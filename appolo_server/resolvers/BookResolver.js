const Book = {
  author: (parent, arg, ctx) => {
    return ctx.authors.find((author) => author.id === parent.authorId);
  },
};

export default Book;
