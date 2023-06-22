import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetchBook from "../hooks/useFetchBook";

const Book = () => {
  const { id } = useParams();
  const { book, loading, error } = useFetchBook(id);
  const location = useLocation();
  const author = location.state?.author;
  const imageSrc = location.state?.imageSrc;
  const title = location.state?.title;
  // const publishDate = location.state?.publishDate;
  // const format = location.state?.format;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(typeof book.description);

  if (typeof book.description === "object") {
    book.description = book.description.value;
  }

  return (
    <div className="flex flex-col bg-light-accent">
      {book && (
        <>
          <div>author: {author}</div>
          <div>title: {title}</div>
          <div>image: {imageSrc}</div>
          <div>pages: {book.pages}</div>
          <div>description: {book.description}</div>
          <div>publish date: {book.publishDate}</div>
          <div>format: {book.format}</div>
        </>
      )}
    </div>
  );
};

export default Book;
