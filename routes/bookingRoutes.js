import express from 'express';
import {
  createBooking,
  getBookings,
  cancelBooking
} from '../controllers/bookingController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, getBookings);
router.delete('/:id', protect, cancelBooking);

export default router;
