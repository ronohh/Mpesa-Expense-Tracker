import userModel from "../models/User.js";
import bcrypt from "bcryptjs"

const register = async (req, res) => {
    try {
        const {name, username, email, phoneNumber, password} = req.body;
        if (!name || !username || !email || !phoneNumber || !password){
            return res.status(400).json({ success: false, message: "All fields are required"});
        }

        const existingUsername = await userModel.findOne({ username });
        if (existingUsername){
            return res.status(400).json({success: false, message: "Username already exists"});
        }

        const existingEmail = await userModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ succcess: false, message: "Email already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            name,
            username,
            email,
            phoneNumber,
            password: hashedPassword
        });
        return res.status(201).json({ success: true, message: "user registered successfully"})
    }catch (error){
        console.error("not registered. Try again!", error)
        return res.status(500).json({success: false , message : " server error"})
    }
}

export {register}