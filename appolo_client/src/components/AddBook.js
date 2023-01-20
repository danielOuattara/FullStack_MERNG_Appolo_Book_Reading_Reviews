import { useQuery, gql } from "@apollo/client";

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

export default function AddBook() {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const displayAuthors = () => {
    return data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  return (
    <form id="add-book">
      <div className="field">
        <label htmlFor="bookName">
          Book Name :
          <input type="text" id="bookName" name="bookName" />
        </label>
      </div>

      <div className="field">
        <label htmlFor="genre">
          Genre :
          <input type="text" id="genre" name="genre" />
        </label>
      </div>

      <div className="field">
        <label htmlFor="author">Author : </label>
        <select name="author" id="author">
          <option value="">Select Author </option>
          {displayAuthors()}
        </select>
      </div>

      <button>Add Book</button>
    </form>
  );
}
