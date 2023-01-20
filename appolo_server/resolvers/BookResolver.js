const Book = {
  author: async (parent, arg, ctx) => {
    return await ctx.authors.find((author) => author.id === parent.authorId);
  },
};

export default Book;
