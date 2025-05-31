import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res)=>{
    const hotel = await Hotel.create(req.body);
    return res.status(201).json({hotel});
};

export const findHotel = async(req,res)=>{
    const findHotel = await Hotel.find();
    return res.status(201).json({findHotel});
}