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
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
  })
);
// app.use((req, res, next) => {
//   req.setHeader("Access-Control-Allow-Origin", "*");
//   req.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE, OPTIONS"
//   );
//   req.setHeader("Access-Control-Allow-Headers", );
//   next();
// });

app.listen(Port, () =>
  console.log(`Server is running on port ${Port}`.bold.blue)
);
