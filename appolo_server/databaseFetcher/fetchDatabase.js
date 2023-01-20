import Book from "./../models/bookModel.js";
import Author from "./../models/authorModel.js";

async function getBooks() {
  return await Book.find({});
}

async function getAuthors() {
  return await Author.find({});
}

export { getAuthors, getBooks };
