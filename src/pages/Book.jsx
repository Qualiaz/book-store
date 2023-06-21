import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  console.log(id);
  console.log("ok");

  useEffect(() => {
    async function fetchBook() {
      const bookUrl = `https://openlibrary.org/books/${id}.json`;
      const bookResponse = await fetch(bookUrl);
      const bookData = await bookResponse.json();
      setBook(bookData);
    }
    fetchBook();
  }, [id]);

  return (
    <div className="bg-light-accent w-10 h-20">
      {!book && <div>Book</div>}
      hello there {id}
    </div>
  );
};

export default Book;
