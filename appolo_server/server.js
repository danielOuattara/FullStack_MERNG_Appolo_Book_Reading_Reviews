import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import typeDefs from "./schema/schema.js";
import Query from "./resolvers/QueryResolver.js";
import Book from "./resolvers/BookResolver.js";
import Author from "./resolvers/AuthorResolver.js";
import { getAuthors, getBooks } from "./databaseFetcher/fetchDatabase.js";
import Mutation from "./resolvers/Mutation.js";
//---------------------------------------------------------

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Book, Author, Mutation },
});

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      `Success: Database connected to: ${process.env.DATABASE} database * * *`,
    );
    return startStandaloneServer(server, {
      context: async () => ({
        books: await getBooks(),
        authors: await getAuthors(),
      }),
      listen: { port: 4000 },
    }).then(({ url }) => {
      console.log(`🚀  Server ready at: ${url}`);
    });
  })
  .catch((err) => console.log(err.message));
