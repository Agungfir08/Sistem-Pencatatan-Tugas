import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // console.log(authHeader);
  const token = authHeader.split(" ")[1];
  // res.json({
  //   token,
  // });
  // const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Token is Empty" });
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    // console.log(err);
    if (err) return res.status(403).json({ message: err });
    next();
    // res.json({
    //   message: "verfifkasi berhasil",
    // });
  });
};

export default verifyToken;
