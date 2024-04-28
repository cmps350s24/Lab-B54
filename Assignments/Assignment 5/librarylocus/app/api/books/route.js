import bookRepo from "@/app/repo/BooksRepo.js";

//get books 
export async function GET(request) {
    const { searchParams } = new URL(request.url)

    let filterType = [...searchParams.keys()][0]
    let value = searchParams.get(filterType)
    console.log(`The filter is ${filterType} and the value is ${value}`);

    let response
    // this switch case will filter the books based on the filter type
    switch (filterType) {
        case 'name':
            response = await bookRepo.getBooksByName(value)
            break;
        case 'author':
            response = await bookRepo.getBooksByAuthor(value)
            break;
        case 'category':
            response = await bookRepo.getBooksByCategory(value)
            break;
        case 'pageCount':
            response = await bookRepo.getBooksByPageCount(value)
            break;
        default:
            response = await bookRepo.getBooks()
    }
    return Response.json(response, { status: 200 })

}

//add book
export async function POST(request) {
    const book = await request.json()
    const newBooks = await bookRepo.addBook(book)
    return Response.json(newBooks, { status: 200 })
}