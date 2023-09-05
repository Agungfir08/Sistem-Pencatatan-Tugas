import user from "../model/user.model.js";
import jwt, { decode } from "jsonwebtoken";

const refreshToken = async (req, res) => {
  console.log("dawdkdnkw dwaudgw");
  try {
    const token = req.cookies.token;
    console.log(token);
    const userExist = await user.findAll({
      where: {
        refresh_token: token,
      },
    });
    if (!userExist[0]) return res.status(401).json({ message: "dkwandwkjwd" });

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const { id, name, email } = userExist[0];
      const accessToken = jwt.sign(
        { id, name, email },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "20s",
        }
      );
      return res.status(200).json({
        accessToken,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Wrong",
    });
  }
};

export default refreshToken;
