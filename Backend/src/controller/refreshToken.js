import user from "../model/user.model.js";
import jwt, { decode } from "jsonwebtoken";

const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.token;
    const userExist = await user.findAll({
      where: {
        token: token,
      },
    });
    if (!userExist[0]) return res.status(401);
    // res.json({
    //   user: userExist[0],
    // });

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
      return res.json({
        accessToken,
        // id,
      });
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

export default refreshToken;
