import jwt from "jsonwebtoken";
import User from "../models/User";

const authMiddleware = async (req, res, next ) => {
    try{
        const autHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({ success: false, message: "Authorization header missing"});
        }

        const token = authHeader.split("")[1];
        if(!token){
            return res.status(401).json({ success: false, message: "No token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({ success: false, message: "Invalid token"})
        }

        const user = await User.findById({_id:decoded.id });
        if(!user) {
            return res.status(401).json({ success: false, message: "user not found"})
        }

        req.user = user;
        next();
    }catch(error) {
        console.error("authmidlleware problem", error);
        return res.status(401).json({ success: false, message: "invalid or expired token"})
    }
}

export default authMiddleware;