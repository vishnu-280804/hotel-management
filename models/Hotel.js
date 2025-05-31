import mongoose from "mongoose";

const hotelSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String
    }
})

const Hotel = mongoose.model("Hotel",hotelSchema);
export default Hotel;