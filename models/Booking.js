import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    customer:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    room:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Room'
    },
    checkIn:{
        type:Date
    },
    checkOut:{
        type:Date
    }
});
const Booking = mongoose.model("Booking",bookingSchema);
export default Booking;