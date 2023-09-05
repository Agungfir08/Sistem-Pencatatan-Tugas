import user from "../model/user.model.js";
import jwt, { decode } from "jsonwebtoken";

const refreshToken = async (req, res) => {
  res.json("tes");
  // console.log("tes");
  // try {
  //   const token = req.cookies.token;
  //   res.json({
  //     message: "tes",
  //   });
  //   console.log(token);
  //   const userExist = await user.findAll({
  //     where: {
  //       refresh_token: token,
  //     },
  //   });
  //   if (!userExist[0]) return res.status(401);
  //   // res.json({
  //   //   user: userExist[0],
  //   // });

  //   jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
  //     if (err) return res.sendStatus(403);
  //     const { id, name, email } = userExist[0];
  //     const accessToken = jwt.sign(
  //       { id, name, email },
  //       process.env.ACCESS_TOKEN,
  //       {
  //         expiresIn: "20s",
  //       }
  //     );
  //     return res.json({
  //       accessToken,
  //       // id,
  //     });
  //   });
  // } catch (error) {
  //   res.json({
  //     msg: " sdsdsd ",
  //   });
  // }
};

export default refreshToken;
