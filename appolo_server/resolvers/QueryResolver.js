import { books, authors } from "../data.js";

const Query = {
  books: () => books,
  book: (parent, arg, ctx) => {
    return books.find((book) => book.id === arg.id);
  },
  authors: () => authors,
  author: (parent, arg, ctx) => {
    return authors.find((author) => author.id === arg.id);
  },
};

export default Query;
