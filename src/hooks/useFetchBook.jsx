import { useState, useEffect } from "react";

export default function useFetchBook(id) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=https://openlibrary.org/books/${id}.json`
        );
        const data = await response.json();
        console.log(data);
        setBook({
          name: data.title,
          pages: data.number_of_pages || "N/A",
          description: data.description || "N/A",
          format: data.physical_format || "N/A",
          publishDate: data.publish_date || "N/A",
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
