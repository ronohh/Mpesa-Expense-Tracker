import express from "express";
import { AddTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", AddTransaction)

export default router;