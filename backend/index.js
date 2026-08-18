import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./config/db_connection.js";

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

//DB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});