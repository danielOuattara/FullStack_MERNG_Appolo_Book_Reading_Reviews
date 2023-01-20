import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       #graphql
//       query GetAuthors {
//         authors {
//           id
//           name
//           age
//         }
//       }
//     `,
//   })
//   .then((result) => console.log("result = ", result));

function App() {
  return (
    <ApolloProvider client={client}>
      <BookList />
      <AddBook />
    </ApolloProvider>
  );
}

export default App;
