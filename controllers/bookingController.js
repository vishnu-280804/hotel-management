import Booking from "../models/Booking.js";


export const createBooking =async(req,res)=>{
    const {room,checkIn,checkOut} = req.body;
    
    if(!room || !checkIn || !checkOut){
        return res.status(401).json({message:"Please enter required credentials"});
    }

    const existing = await Booking.findOne({
        room,
        $or:[
             { checkIn: { $lt: new Date(checkOut), $gte: new Date(checkIn) } },
            { checkOut: { $gt: new Date(checkIn), $lte: new Date(checkOut) } }
        ]
        }
    );

    if (existing){
        return res.status(400).json({ message: 'Room is already booked for selected dates' });
    }

    const newBooking = await Booking.create(
        {
            customer:req.user._id,
            room,
            checkIn,
            checkOut
        }
    );

    return res.status(200).json(newBooking);

};

export const getBookings = async (req, res) => {
  const bookings = await Booking.find({ customer: req.user._id }).populate('room');
  res.json(bookings);
};

export const cancelBooking = async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: 'Booking cancelled' });
};