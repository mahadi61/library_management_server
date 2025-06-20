import express, { Request, Response } from "express";
import { Book } from "../models/books.model";
export const bookRoutes = express.Router();

bookRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const { filter, sortBy, sort, limit } = req.query;
    console.log(filter, sortBy, sort, limit);

    const limitValue = parseInt(limit as string);

    const filterObj: any = {};
    if (filter) {
      filterObj.genre = filter;
    }

    const sortOrder = sort === "asc" ? 1 : -1;
    const sortObj: any = {};
    sortObj[sortBy as string] = sortOrder;

    console.log(sortObj, filterObj);

    const books = await Book.find(filterObj).sort(sortObj).limit(limitValue);

    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// create a new book
bookRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Book.create(body);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: "Validation failed",
      success: false,
      error: error,
    });
  }
});
