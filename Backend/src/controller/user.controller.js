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
        email: req.body.email,
      },
    });
    if (userExist[0])
      return res.status(409).json({
        message: "Email Already Used",
      });

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

    const id = userExist[0].d;
    const name = userExist[0].name;
    const email = userExist[0].email;

    const match = await bcyrpt.compare(
      req.body.password,
      userExist[0].password
    );
    if (!match)
      res.status(400).json({
        message: "Wrong Password",
      });

    const token = jwt.sign({ id, name, email }, process.env.ACCESS_TOKEN, {
      expiresIn: "200s",
    });
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3600000),
    });

    res.status(200).json({ id: userExist[0].id, token: token });
  } catch (error) {
    res.status(400).json({
      message: "Email Not Found",
    });
  }
};

const logout = (req, res) => {
  const token = req.cookies.token;
  if (!token) res.sendStatus(403);

  res.clearCookie("token");
  return res.sendStatus(200);
};

const testMiddleware = (req, res) => {
  console.log("Midlleware");
  // res.json({
  //   message: "middleware",
  // });
};

export { register, login, testMiddleware, logout };
