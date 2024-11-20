import jwt from "jsonwebtoken";

export const authenticateToken = (role) => {
  return (req, res, next) => {
    const token = req.cookies.jwtToken;
    if (!token) {
      res.status(401).json({ message: "Token is required" });
      return;
    }

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET_CODE);
      if (role.includes(decoded.role)) {
        next();
      } else {
        res.status(403).json({ message: "Unauthorized" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
