import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRouter from "./Routes/User.js";
import ChatRouter from "./Routes/Chat.js";
import MessageRouter from "./Routes/Message.js";
import privates from "./Routes/private.js";
import connectDb from "./Config/ConnectDb.js";

// ? ==============================
// ? * Initialisation
// ? ==============================
dotenv.config();
connectDb();
const app = express();
const Port = process.env.PORT || 5000;

// ? ==============================
// ? * Middleware
// ? ==============================
app.use(express.json());
app.use("/api/auth", UserRouter);
app.use("/api/private", privates);
app.use("/api/user", ChatRouter);
app.use("/api/message", MessageRouter);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
  })
);

// ? ==============================
// ? * Runner Server
// ? ==============================

app.listen(Port, () =>
  console.log(`Server is running on port ${Port}`.bold.blue)
);
