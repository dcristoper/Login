import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/index.js";
import privates from "./Routes/private.js";
import connectDb from "./Config/ConnectDb.js";

dotenv.config();
connectDb();
const app = express();
const Port = process.env.PORT || 4000;
// ? ==============================
// ? * Middleware
// ? ==============================
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/private", privates);
app.use(cors());

app.listen(Port, () =>
  console.log(`Server is running on port ${Port}`.bold.blue)
);

// ? file env masih ada yang ngarang
// ? daftarkan mailer di web
// ? buat resetpassword
