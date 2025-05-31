import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','customer'],
        default:'customer'
    }
});
userSchema.pre('save', async function () {
  if (!this.isModified('password')){
    return -1;
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function(input) {
    return bcrypt.compare(input,this.password);
}

const User = mongoose.model("User",userSchema);
export default User;