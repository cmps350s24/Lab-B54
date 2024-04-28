import booksRepo from "@/app/repo/BooksRepo.js";

// Returns a map of author names with the count of books they have authored
export async function GET(request) {
    const books = await booksRepo.getBooksSummary()
    return Response.json(books, { status: 200 })
}