import user from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcyrpt, { hash } from "bcrypt";

// register function
const register = async (req, res) => {
  const { email, password, name, gender } = req.body;
  const salt = bcyrpt.genSaltSync();
  const hashPassword = bcyrpt.hashSync(password, salt);
  try {
    // If email Already in database
    const userExist = await user.findAll({
      where: {
        email: email,
      },
    });
    // if (userExist) return res.json("Email Already Used");

    // email never used
    await user.create({
      email: email,
      name: name,
      password: hashPassword,
      gender: gender,
      profile_img: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    });
    res.json({
      message: "User Create Success",
    });
  } catch (error) {
    res.json({ error });
  }
};

// login
const login = async (req, res) => {
  try {
    const userExist = await user.findAll({
      where: {
        email: req.body.email,
      },
    });
    if (!userExist) return res.json("Email Not Found");

    const id = userExist[0].d;
    const name = userExist[0].name;
    const email = userExist[0].email;
    // const pass = req.body.password;

    const match = await bcyrpt.compare(
      req.body.password,
      userExist[0].password
    );
    if (!match) return res.json("Wrong Password");

    const token = jwt.sign({ id, name, email }, process.env.ACCESS_TOKEN, {
      expiresIn: "20s",
    });

    res.code(201).json({ User: userExist, AccessToken: token });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

export { register, login };
