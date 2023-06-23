import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchBook(id) {
  const [book, setBook] = useState("null");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.allorigins.win/raw?url=https://openlibrary.org/books/${id}.json`
        );

        const data = await response.json();

        setBook({
          title: data.title,
          pages: data.number_of_pages || "N/A",
          description: data.description || "N/A",
          format: data.physical_format || "N/A",
          publishDate: data.publish_date || "N/A",
          coverUrl:
            `https://covers.openlibrary.org/b/olid/${data.key.replace(
              "/books/",
              ""
            )}.jpg` || "N/A",
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

export const useFetchAuthor = ({ authorId, bookKey }) => {
  const [author, setAuthor] = useState("null");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    (async () => {
      console.log(bookKey);
      try {
        if (bookKey) {
          const response = await axios.get(
            `https://openlibrary.org/books/${bookKey}.json`
          );
          const data = response.data;
          console.log(data);

          if (data.authors[0]) {
            const responseAuthor = await axios.get(
              `https://openlibrary.org/${data.authors[0]?.json}`
            );
            const dataAuthor = responseAuthor.data;
            console.log(dataAuthor);
          } else {
            throw new Error("author data not available");
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);
};
