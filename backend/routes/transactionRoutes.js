import express from "express";
import { AddTransaction } from "../controllers/transactionController";

const router = express.Router();

router.get("/", AddTransaction)

export default router;