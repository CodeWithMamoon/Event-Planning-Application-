import express from "express";
import { sendMessage } from "../controlar/messagecontrolar.js";  // Ensure this path is correct

const router = express.Router();

router.post("/send", sendMessage);

export default router;
