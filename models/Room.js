import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    hote:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    },
    type:{
        name:String
    },
    price:{
        type:Number
    },
    available:{
        type:Boolean,
        default:true
    }
});

const Room = mongoose.model("Room",roomSchema);
export default Room;