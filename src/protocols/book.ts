export type Book = {
    id: number,
    title: string,
    author: string,
    pages: number
}

export type NewBook = Omit<Book, "id">;