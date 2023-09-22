-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "idUser" INTEGER NOT NULL,
    "idBook" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL,
    "review" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("idBook","idUser")
);

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_idBook_fkey" FOREIGN KEY ("idBook") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
