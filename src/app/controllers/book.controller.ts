import express from "express";
export const bookRoutes = express.Router();

bookRoutes.get("/", async (req, res) => {
  try {
    res.send({ message: "Welcome to the Library Management System API!" });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
