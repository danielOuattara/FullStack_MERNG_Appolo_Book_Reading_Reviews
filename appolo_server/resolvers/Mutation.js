import Book from "./../models/bookModel.js";
import Author from "./../models/authorModel.js";

const Mutation = {
  addAuthor: async (parent, args, ctx) => {
    console.log(args);
    return await Author.create(args);
  },
  addBook: async (parent, args, ctx) => {
    return await Book.create(args);
  },
};

export default Mutation;
