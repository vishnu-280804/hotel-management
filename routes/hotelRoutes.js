import express from 'express';
import { createHotel, findHotel } from '../controllers/hotelController.js';
import { protect, restrict } from '../middlewares/auth.js';

const router = express.Router();

router.route('/')
  .get(findHotel)
  .post(protect, restrict('admin'), createHotel);

export default router;
