import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token is Empty" });
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) return res.status(403).json({ err });
      // console.log(err);
      // req.id = decoded.id;
      // console.log("Verifikasi Token Berhasil");
      next();
      // res.json({
      //   message: "verfifkasi berhasil",
      //   decoded: decoded,
      // });
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

export default verifyToken;
