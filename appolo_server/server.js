import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";

// dummy data
const books = [
  { title: "Name of the wind", genre: "Fantasy", id: "1", pages: "230" },
  { title: "The final empire", genre: "Fantasy", id: "2", pages: "340" },
  { title: "The long earth", genre: "Sci-Fi", id: "3", pages: "120" },
];
const authors = [
  { name: "Patrick Rothfus", age: "44", id: "1" },
  { name: "Bradon Sanderso", age: "42", id: "2" },
  { name: "Terry Pratchett", age: "66", id: "3" },
];

const typeDefs = `#graphql

  type Book {
    id: ID!
    title: String
    genre: String
    pages: Int
  }
  type Author {
    id: ID
    name: String
    age: Int
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
