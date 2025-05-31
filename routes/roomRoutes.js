import express from "express";
import { createRoom,getRoom } from "../controllers/roomController.js";
import {protect,restrict} from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(getRoom).post(protect,restrict("admin"),createRoom);

router.get("/:id", getRoom);
export default router;