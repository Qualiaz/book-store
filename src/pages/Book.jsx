import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetchBook, { useFetchAuthor } from "../hooks/useFetchBook";
import useTurnIdIntoPrice from "../hooks/useTurnIdIntoPrice";

const Book = () => {
  const { id } = useParams();
  console.log(id);
  const { book, loading, error } = useFetchBook(id);
  useFetchAuthor({ bookKey: id });
  const location = useLocation();
  const author = location.state?.author;
  let imageSrc = location.state?.imageSrc || book.coverUrl;
  const title = location.state?.title || book.title;
  const [ron, bani] = useTurnIdIntoPrice(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(typeof book.description);

  if (typeof book.description === "object") {
    book.description = book.description.value;
  }

  return (
    <div className="flex flex-col gap-10  bg-light-accent outline">
      {book && (
        <>
          <div className="flex gap-10">
            <div className="w-72 h-110">
              <img className="w-full h-full" src={imageSrc} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div>author: {author}</div>
              <div>title: {title}</div>
              <div>pages: {book.pages}</div>
              <div>description: {book.description}</div>
              <div>publish date: {book.publishDate}</div>
              <div>format: {book.format}</div>
            </div>
          </div>
          <div>
            <span>
              {ron}, {bani}
            </span>
            <button>Buy now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Book;
