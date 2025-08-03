import mongoose from "mongoose";
import User from "../Models/UserSchema.js";
import File from "../Models/FileSchema.js";
export const handleuserregistration = async (req, res) => {
  const { name, email, password } = req.body;
    try {
        if(!name||!email||!password){
            return res.status(400).json({ message: "All fields are required" });
        }
        if(password.length<5){
            return res.status(400).json({ message: "Password must be at least 5 characters long" });
        }

        const existingUser = await User.findone({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }   
        const saltrounds=10;
        const hashedPassword = await bcrypt.hash(password, saltrounds);
       

        const newUser = new User({ 
            name, 
            email, 
            password:hashedPassword});
        await newUser.save();

        res.starus(201).cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax" ,
            maxAge: 24 * 60 * 60 * 1000, 
        }).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    } catch (error) {   
        console.error("Error during user registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }   
}

export const handleuserlogin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email||!password){
            return res.status(400).json({msg:'Email and password is required'});
        }
        const user=await User.findone({email});
        if(!user)return res.status(400).json({msg:'user not found'});

        const matchpassword=await bcrypt.compare(user.password,password);
        if(!matchpassword)return res.status(400).json({msg:'wrong password'});
        return res.status(201).cookie('token',token,{
              httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax" ,
            maxAge: 24 * 60 * 60 * 1000, 
        }).json({
            msg:'Loggedin successfully',
             id: user._id,
                name: user.name,
                email: user.email,
        })
    }
    catch(err){
        return res.status(500).json({msg:"internal server error"});
    }
}

