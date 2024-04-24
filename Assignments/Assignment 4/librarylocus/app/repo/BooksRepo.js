import path from 'path';
import fs from 'fs-extra';

class BooksRepo {
    #booksFilePath = path.join(process.cwd(), 'app/data/catalog-books.json');

    async getBooks() {
        return await fs.readJSON(this.#booksFilePath);
    }

    async getBook(bookName) {
        if (!bookName || typeof bookName !== 'string') {
            throw new Error("Invalid book name");
        }
        const books = await this.getBooks();
        return books.filter(book => book.title.toLowerCase().includes(bookName.toLowerCase()));
    }

    async addBook(book) {
        if (!book || typeof book !== 'object' || !book.title || !book.isbn) {
            throw new Error("Invalid book object");
        }
        const books = await this.getBooks();
        const maxId = books.reduce((max, b) => b.id > max ? b.id : max, 0);
        book.id = maxId + 1; // Assign the next available integer ID
        books.push(book);
        return await this.saveBooks(books) ? book : null;
    }

    async updateBook(isbn, updatedBook) {
        if (!isbn || typeof isbn !== 'string') {
            throw new Error("Invalid ISBN");
        }
        if (!updatedBook || typeof updatedBook !== 'object') {
            throw new Error("Invalid book data");
        }
        const books = await this.getBooks();
        const index = books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
            books[index] = { ...books[index], ...updatedBook };
            return await this.saveBooks(books) ? books[index] : null;
        }
        throw new Error('Book not found');
    }

    async deleteBook(isbn) {
        if (!isbn || typeof isbn !== 'string') {
            throw new Error("Invalid ISBN");
        }
        const books = await this.getBooks();
        const index = books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
            books.splice(index, 1);
            return await this.saveBooks(books);
        }
        throw new Error('Book not found');
    }

    async getBooksByPageCount(pageCount) {
        if (!Number.isInteger(pageCount)) {
            throw new Error("Invalid page count");
        }
        const books = await this.getBooks();
        return books.filter(book => book.pageCount >= pageCount);
    }

    async getBooksByAuthor(authorName) {
        if (!authorName || typeof authorName !== 'string') {
            throw new Error("Invalid author name");
        }
        const books = await this.getBooks();
        return books.filter(book => book.authors.some(author => author.toLowerCase().includes(authorName.toLowerCase())));
    }

    async getBookByISBN(isbn) {
        if (!isbn || typeof isbn !== 'string') {
            throw new Error("Invalid ISBN");
        }
        const books = await this.getBooks();
        const book = books.find(book => book.isbn === isbn);
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    }

    async getBooksByCategory(bookCategory) {
        if (!bookCategory || typeof bookCategory !== 'string') {
            throw new Error("Invalid book category");
        }
        const books = await this.getBooks();
        return books.filter(book => book.categories.some(category => category.toLowerCase().includes(bookCategory.toLowerCase())));
    }

    async getBooksSummary() {
        const summary = {};
        const books = await this.getBooks();
        books.forEach(book => {
            book.authors.forEach(author => {
                summary[author] = (summary[author] || 0) + 1;
            });
        });
        return summary;
    }

    async saveBooks(books) {
        await fs.writeJSON(this.#booksFilePath, books, { spaces: 2 });
        return books;
    }

    async cleanBooks() {
        const books = await this.getBooks();
        const cleanBooks = books.filter(book => book.shortDescription && book.shortDescription.length > 10);
        await this.saveBooks(cleanBooks);
    }
}

export default new BooksRepo();

// const repo = new BooksRepo();
// // const books = await repo.getBooks()

// // // add a new book
// // const book = books[0]
// // book.title = "new title"
// // book.isbn = '123adf123'
// // delete book.id
// // // console.log(book);

// try {
//     const response = await repo.getBookByISBN("935182455")
//     console.log(response);
// } catch (error) {
//     console.log(error);
// }

