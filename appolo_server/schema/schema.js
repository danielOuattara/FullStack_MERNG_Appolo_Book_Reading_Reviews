const typeDefs = `#graphql

  type Book {
    id: ID!
    title: String!
    genre: String!
    pages: Int!
    author: Author!
  }
  
  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book]
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }
`;

export default typeDefs;
