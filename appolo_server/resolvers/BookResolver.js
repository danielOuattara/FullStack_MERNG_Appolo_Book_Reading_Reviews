import { authors } from "../data.js";

const Book = {
  author: (parent, arg, ctx) => {
    return authors.find((author) => author.id === parent.authorId);
  },
};

export default Book;
