import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "./../queries/queries";
import { useState } from "react";
//----------------------------------------------------------

export default function AddBook() {
  const [newBook, setNewBook] = useState({
    title: "",
    genre: "",
    authorId: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log("newBook = ", newBook);
    setNewBook((prevState) => ({
      ...prevState,
      title: "",
      genre: "",
      authorId: "",
    }));
  };

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
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label htmlFor="bookName">
          Book Name :
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={newBook.title}
            onChange={(event) =>
              setNewBook((prevState) => ({
                ...prevState,
                title: event.target.value,
              }))
            }
          />
        </label>
      </div>

      <div className="field">
        <label htmlFor="genre">
          Genre :
          <input
            type="text"
            id="genre"
            name="genre"
            value={newBook.genre}
            onChange={(event) =>
              setNewBook((prevState) => ({
                ...prevState,
                genre: event.target.value,
              }))
            }
          />
        </label>
      </div>

      <div className="field">
        <label htmlFor="author">Author : </label>
        <select
          name="author"
          id="author"
          value={newBook.authorId}
          onChange={(event) =>
            setNewBook((prevState) => ({
              ...prevState,
              authorId: event.target.value,
            }))
          }
        >
          <option value="">Select Author </option>
          {displayAuthors()}
        </select>
      </div>

      <button>Add Book</button>
    </form>
  );
}
