import React, { useRef, useEffect } from "react";
import {
  useInfiniteBooksBySubject,
  useInfiniteBooksBySearch,
} from "../hooks/useInfiniteBooksBy";
import BookCard from "../components/BookCard";

const Books = ({ genre, search }) => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } = genre
    ? useInfiniteBooksBySubject(genre)
    : useInfiniteBooksBySearch(search);

  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const booksWithDuplicates = data.pages.flat();
  const books = Array.from(new Set(booksWithDuplicates.map((a) => a.key))).map(
    (key) => {
      return booksWithDuplicates.find((a) => a.key === key);
    }
  );

  return (
    <>
      {books.map((book, i) => (
        <div key={i}>
          <BookCard
            title={book.title}
            cover={book.coverUrl}
            id={book.key}
            author={book.author}
          />
        </div>
      ))}
      <div ref={loaderRef} />
    </>
  );
};

export default Books;
