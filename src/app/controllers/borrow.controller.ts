import express, { Request, Response } from "express";
import { Book } from "../models/books.model";
import { BorrowBook } from "../models/borrow.model";
export const borrowRoutes = express.Router();

// get all borrow records
borrowRoutes.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Borrow records retrieved successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Validation failed", success: false, error: error });
  }
});

// borrow books
borrowRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;

    //Update the book stock
    await Book.borrowCopies(book, quantity);

    //Save borrow record
    const borrowRecord = await BorrowBook.create({ book, quantity, dueDate });
    // const book
    res.status(200).json({
      success: true,
      message: "Borrow records retrieved successfully",
      data: borrowRecord,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: error.message,
    });
  }
});
