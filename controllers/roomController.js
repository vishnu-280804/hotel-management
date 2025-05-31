import Room from "../models/Room.js";

export const createRoom = async (req,res)=>{
    const room = await Room.create(req.body);
    return res.status(201).json({room});
}

export const getRoom = async (req, res) => {
    try {
        const roomId = req.params.id;
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
