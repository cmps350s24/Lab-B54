import booksRepo from "@/app/repo/BooksRepo.js";


//update a book
export async function PUT(request, { params }) {
    const bookIsbn = params.isbn
    const bookUpdate = await request.json()
    const updatedBook = await booksRepo.updateBook(bookIsbn, bookUpdate)
    return Response.json(updatedBook, { status: 200 })
}
export async function GET(request, { params }) {
    const bookIsbn = params.isbn
    const book = await booksRepo.getBookByISBN(bookIsbn)
    return Response.json(book, { status: 200 })
}

//deletes a book 
export async function DELETE(request, { params }) {
    const bookIsbn = params.isbn
    const message = await booksRepo.deleteBook(bookIsbn)
    return Response.json({ message }, { status: 200 })
}
