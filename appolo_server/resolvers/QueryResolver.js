const Query = {
  books: async (parent, arg, ctx) => await ctx.books,
  book: async (parent, arg, ctx) => {
    return await ctx.books.find((book) => book.id === arg.id);
  },
  authors: async (parent, arg, ctx) => await ctx.authors,
  author: async (parent, arg, ctx) => {
    return await ctx.authors.find((author) => author.id === arg.id);
  },
};

export default Query;
