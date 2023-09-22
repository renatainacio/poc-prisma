import { notFoundError } from "@/errors/notFound";
import { Book, NewBook } from "@/protocols/book";
import booksRepository from "@/repositories/books.repository";


async function create(book: NewBook){
    await booksRepository.create(book);
}

async function getAllBooks(name: string): Promise<Book[]>{
    const books = await booksRepository.getAllBooks(name);
    return books;
}

async function updateBook(id: number, book: NewBook): Promise<void>{
    const searchBook = await booksRepository.getBookById(id);
    if (!searchBook) throw notFoundError("Book");
    await booksRepository.updateBook(id, book);
}

async function deleteBook(id: number): Promise<void>{
    const searchBook = await booksRepository.getBookById(id);
    if (!searchBook) throw notFoundError("Book");
    await booksRepository.deleteBook(id);
}

const booksService = {
    create,
    getAllBooks,
    updateBook,
    deleteBook
}

export default booksService;