import Book from "./../models/bookModel.js";
import Author from "./../models/authorModel.js";

const Mutation = {
  addAuthor: (parent, args, ctx) => {
    console.log(args);
    return Author.create(args);
  },
  addBook: (parent, args, ctx) => {
    return Book.create(args);
  },
};

export default Mutation;
