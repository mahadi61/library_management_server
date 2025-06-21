import express, { Application, Request, Response } from "express";
import { bookRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";

const app: Application = express();

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/borrow", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Library Management System API is running!");
});

export default app;
