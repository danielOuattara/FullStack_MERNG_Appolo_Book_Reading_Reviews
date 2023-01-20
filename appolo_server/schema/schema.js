const typeDefs = `#graphql

  type Book {
    id: ID!
    title: String
    genre: String
    pages: Int
    author: Author
  }
  
  type Author {
    id: ID!
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
  
  type Mutation {
    addAuthor(
      name: String!
      age: Int!
    ): Author

    addBook(
      title: String!
      genre: String!
      pages: Int!
      authorId: ID!
    ): Book
  }
`;

export default typeDefs;
