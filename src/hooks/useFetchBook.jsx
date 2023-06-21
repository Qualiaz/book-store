import { useState, useEffect } from "react";

export default function useFetchBook(id) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/books/${id}.json`
        );
        const data = await response.json();
        setBook({
          name: data.title,
          pages: data.number_of_pages ? data.number_of_pages : "N/A",
          description: data.description ? data.description.value : "N/A",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { book, loading, error };
}
