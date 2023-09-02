import express, { Request, Response } from "express";

import userRoutes from "./routes/v1/user";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use("/v1/users", userRoutes);

export default app;
