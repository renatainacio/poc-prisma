import { NewBook } from "@/protocols/book";
import booksService from "@/services/books.service";
import { Request, Response } from "express";

async function create(req: Request, res: Response){
    const book = req.body as NewBook;
    await booksService.create(book);
    res.sendStatus(201);
}

async function getAllBooks(req: Request, res: Response){
    const { name } = req.query;
    const books = await booksService.getAllBooks(name);
    res.send(books);
}

async function updateBook(req: Request, res: Response){
    const { id } = req.params;
    const book = req.body as NewBook;
    await booksService.updateBook(parseInt(id), book);
    res.sendStatus(204);
}

async function deleteBook(req: Request, res: Response){
    const { id } = req.params;
    await booksService.deleteBook(parseInt(id));
    res.sendStatus(204);
}

const booksController = {
    create,
    getAllBooks,
    updateBook,
    deleteBook
}

export default booksController;