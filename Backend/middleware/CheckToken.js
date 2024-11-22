import jwt from "jsonwebtoken";

export const authenticateToken = (role) => {
  return (req, res, next) => {
    const token = req.cookies.jwtToken;
    if (!token) {
      res.status(401).json({ message: "You're not signed in" });
      return;
    }
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET_CODE);
      if (role.includes(decoded.role)) {
        req.user = decoded;
        next();
      } else {
        res.status(403).json({ message: "Unauthorized" });
        return;
      }
    } catch (error) {
      console.error(error);
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
