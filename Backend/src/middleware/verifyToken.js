import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) res.status(401).json({ message: "Token is Empty" });

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    console.log(err);
    if (err) return res.status(403).json({ message: err });
    // res.json(decoded);
    console.log("Verifikasi Token Berhasil");
    next();
  });
};

export default verifyToken;