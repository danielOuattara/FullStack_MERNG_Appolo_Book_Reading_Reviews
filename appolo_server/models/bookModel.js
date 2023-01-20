import mongoose from "mongoose";
//-------------------------------------------------------

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  authorId: String,
  pages: Number,
});

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
