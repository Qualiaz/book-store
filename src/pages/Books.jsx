import { useEffect, useRef } from "react";
import useInfiniteBooksBySubject from "../hooks/useInfiniteBooksBySubject";
import BookCard from "../components/BookCard";

const Books = ({ genre }) => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteBooksBySubject(genre);
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

  const books = data.pages.flat();

  return (
    <>
      {books.map((book, i) => (
        <div key={i}>
          <BookCard
            title={book.title}
            cover={book.coverUrl}
            id={book.id}
            author={book.author}
          />
        </div>
      ))}
      <div ref={loaderRef} />
    </>
  );
};

export default Books;
