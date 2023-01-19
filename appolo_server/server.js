import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";

// dummy data
const books = [
  {
    title: "Name of the wind",
    genre: "Fantasy",
    id: "1",
    pages: "230",
    authorId: "1",
  },
  {
    title: "The final empire",
    genre: "Fantasy",
    id: "2",
    pages: "340",
    authorId: "2",
  },
  {
    title: "The long earth",
    genre: "Sci-Fi",
    id: "3",
    pages: "520",
    authorId: "3",
  },
  {
    title: "Dance the stars",
    genre: "Novel",
    id: "4",
    pages: "320",
    authorId: "3",
  },
  {
    title: "The guitar play ",
    genre: "Music",
    id: "5",
    pages: "270",
    authorId: "1",
  },
  {
    title: "Swim in the sea",
    genre: "Practics",
    id: "6",
    pages: "220",
    authorId: "2",
  },
  {
    title: "Fight the vaccin",
    genre: "Novel",
    id: "7",
    pages: "300",
    authorId: "2",
  },
];

//--------------------------------------------------
const authors = [
  { id: "1", name: "Patrick Rothfus", age: "44" },
  { id: "2", name: "Bradon Sanderso", age: "42" },
  { id: "3", name: "Terry Pratchett", age: "66" },
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
