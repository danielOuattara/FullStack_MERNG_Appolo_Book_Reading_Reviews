import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books, authors } from "./data.js";
import mongoose from "mongoose";

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

  Book: {
    author: (parent, arg, ctx) => {
      return authors.find((author) => author.id === parent.authorId);
    },
  },
  Author: {
    books: (parent, arg, ctx) => {
      return books.filter((book) => book.authorId === parent.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      `Success: Database connected to:  ${process.env.DATABASE} database * * * `,
    );
    // app.listen(4000, () => {
    //   console.log("Listening on http://localhost:4000/graphql?");
    // });
    const { url } = startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
  })
  .catch((err) => console.log(err.message));
