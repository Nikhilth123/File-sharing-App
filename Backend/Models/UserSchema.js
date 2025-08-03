import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: {
    type:string,
    required: true,
    unique: true,
  },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    storageused: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
   
});

const User = mongoose.model("User", UserSchema);
export default User;