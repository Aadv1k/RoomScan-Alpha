import express, { Request, Response } from "express";

const PORT = 8080;
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({"Hello": "World"});
});

export default app;
