import express from "express";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import { initDb } from "./db/connection.js";
import router from './routes/products.js';
import userRouter from "./routes/user.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(compression());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use("/user", userRouter);
app.use("/", router);

app.listen(process.env.PORT, async () => {
  await initDb();
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
