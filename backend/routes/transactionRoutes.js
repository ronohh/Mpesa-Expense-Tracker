import express from "express";
import { AddTransaction, getTransactions } from "../controllers/transactionController.js";
import authmiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", AddTransaction);
router.get("/", authmiddleware, getTransactions);

export default router;