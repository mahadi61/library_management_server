import express, { Application } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Library Management System API is running!");
});

export default app;
