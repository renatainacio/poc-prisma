import booksController from "@/controllers/books.controller";
import validateSchema from "@/middlewares/validateSchema";
import bookSchema from "@/schemas/books.schema";
import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/books", booksController.getAllBooks);
bookRouter.post("/books", validateSchema(bookSchema, "book"), booksController.create);
bookRouter.put("/books/:id", validateSchema(bookSchema, "book"), booksController.updateBook);
bookRouter.delete("/books/:id", booksController.deleteBook);

export default bookRouter;