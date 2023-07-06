// ? PACKAGE
import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// ? CONTROLLERS
import UserRouter from "./Routes/User.js";
import ConversationRouter from "./Routes/Conversation.js";
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
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", UserRouter);
app.use("/api/auth/private", privates);
app.use("/api", ConversationRouter);
app.use("/api", MessageRouter);
app.use(
  cors({
    credentials: true,
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
