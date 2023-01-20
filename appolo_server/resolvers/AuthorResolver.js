import { books } from "./../data.js";

const Author = {
  books: (parent, arg, ctx) => {
    return books.filter((book) => book.authorId === parent.id);
  },
};

export default Author;
