const Query = {
  books: (parent, arg, ctx) => ctx.books,
  book: (parent, arg, ctx) => {
    return ctx.books.find((book) => book.id === arg.id);
  },
  authors: (parent, arg, ctx) => ctx.authors,
  author: (parent, arg, ctx) => {
    return ctx.authors.find((author) => author.id === arg.id);
  },
};

export default Query;
