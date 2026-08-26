import userModel from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
            return res.status(400).json({ success: false, message: "Email already exists"})
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

const login = async (req, res) => {
    try{
        const {username, password} = req.body;

        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(404).json({message: "user not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({ message: "invalid credetials"})
        }

        const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, {expiresIn: '2d'});
        return res.status(200).json({success:true, message: "login successful",token,user: { id: user._id, name: user.name, username: user.username, email: user.email }})

    }catch(error){
        console.error("error in controller", error)
        return res.status(500).json({success: false, message: "server error"})
    }
}

export {register, login}