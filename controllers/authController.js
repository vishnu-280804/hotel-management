import jwt from "jsonwebtoken";
import User from "../models/User.js";

const signToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });


export const signup = async (req,res)=>{
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);
    return res.status(200).json({token,newUser});
};

export const signin = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) return res.status(401).json({message:"Please enter email and password"});
    const user = await User.findOne({email});

    if(!user) return res.status(401).json({message:"There is no user present"});

    if(!(await user.comparePassword(password))){
        return res.status(401).json({message:"Invalid Credentials"});
    }
    const token = signToken(user._id);

    return res.status(201).json({token,user});


}