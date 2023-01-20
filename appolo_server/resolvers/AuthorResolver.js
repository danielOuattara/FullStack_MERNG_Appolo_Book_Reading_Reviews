const Author = {
  books: async (parent, arg, ctx) => {
    return await ctx.books.filter((book) => book.authorId === parent.id);
  },
};

export default Author;
