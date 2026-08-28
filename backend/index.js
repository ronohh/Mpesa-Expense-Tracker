import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db_connection.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend is running"
    });
});
app.use('/api/auth', authRoutes)
//DB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});