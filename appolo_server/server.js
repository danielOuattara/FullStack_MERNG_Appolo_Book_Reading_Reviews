import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books, authors } from "./data.js";

const typeDefs = `#graphql

  type Book {
    id: ID!
    title: String
    genre: String
    pages: Int
    author: Author
  }
  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, arg, ctx) => {
      return books.find((book) => book.id === arg.id);
    },
    authors: () => authors,
    author: (parent, arg, ctx) => {
      return authors.find((author) => author.id === arg.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
