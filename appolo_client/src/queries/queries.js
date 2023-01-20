import { gql } from "@apollo/client";

//--------------------------------------------
const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

//--------------------------------------------
const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      id
    }
  }
`;

//--------------------------------------------
export { GET_AUTHORS, GET_BOOKS };
