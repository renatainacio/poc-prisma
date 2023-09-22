import prisma from "@/configs/database.connection";
import { Book, NewBook } from "@/protocols/book";

async function create(book: NewBook): Promise<void>{
    await prisma.book.create({
        data: book
    })
}

async function getAllBooks(name: string): Promise<Book[]>{
    let books = [];
    if (!name)
        books = await prisma.book.findMany();
    else
        books = await prisma.book.findMany({
            where: {
                title: {
                    contains: name,
                    mode: "insensitive"
                }
            }
        });
    return books;
}

async function getBookById(id: number){
    const book = await prisma.book.findUnique({
        where: {
            id
        }
    })
    return book;
}

async function updateBook(id: number, book: NewBook): Promise<void>{
    await prisma.book.update({
        data: book,
        where: {
            id
        }
    })
}

async function deleteBook(id: number): Promise<void>{
    await prisma.book.delete({
        where: {
            id
        }
    })
}

const booksRepository = {
    create,
    getAllBooks,
    updateBook,
    deleteBook,
    getBookById
}

export default booksRepository;