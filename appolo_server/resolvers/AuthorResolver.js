const Author = {
  books: (parent, arg, ctx) => {
    return ctx.books.filter((book) => book.authorId === parent.id);
  },
};

export default Author;
