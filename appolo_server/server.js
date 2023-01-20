import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import typeDefs from "./schema/schema.js";
import Query from "./resolvers/QueryResolver.js";
import Book from "./resolvers/BookResolver.js";
import Author from "./resolvers/AuthorResolver.js";

const resolvers = { Query, Book, Author };

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
      listen: { port: 4000 },
    }).then(({ url }) => {
      console.log(`🚀  Server ready at: ${url}`);
    });
  })
  .catch((err) => console.log(err.message));
