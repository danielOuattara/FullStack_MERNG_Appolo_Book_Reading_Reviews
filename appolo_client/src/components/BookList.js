// Import everything needed to use the `useQuery` hook
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "./../queries/queries";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.pages} pages
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
