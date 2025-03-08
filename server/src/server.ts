import express from "express"
import dotenp from "dotenv";
import cors from "cors"
import connectWithDB from "./lib/config/db";

// Load environment variables
dotenp.config()

// Connect  
connectWithDB();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json())

// Start server
const PORT = process.env.PORT || 8080   ;
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));