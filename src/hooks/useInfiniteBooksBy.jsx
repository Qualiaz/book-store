import { useInfiniteQuery } from "react-query";

export const useInfiniteBooksBySubject = (subject) => {
  return useInfiniteQuery(
    ["books", subject],
    async ({ pageParam = 0 }) => {
      const subjectUrl = `https://openlibrary.org/subjects/${subject}.json?limit=30&offset=${pageParam}`;
      const subjectResponse = await fetch(subjectUrl);
      const subjectData = await subjectResponse.json();
      return subjectData.works
        .filter((work) => work.cover_edition_key !== null && work.key !== null)
        .map((work) => ({
          key: work.cover_edition_key,
          title: work.title,
          author: work?.authors[0]?.name || "N/A",
          coverUrl: `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}.jpg`,
        }));
    },
    {
      getNextPageParam: (lastPage, allPages) => allPages.length * 30,
      staleTime: Infinity,
    }
  );
};

export const useInfiniteBooksBySearch = (query) => {
  return useInfiniteQuery(
    ["books", query],
    async ({ pageParam = 0 }) => {
      const searchUrl = `https://openlibrary.org/search.json?q=${query}&offset=${pageParam}`;
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();
      const books = searchData.docs;
      console.log(books);
      return books
        .filter(
          (book) => book.cover_edition_key !== undefined && book.key !== null
        )
        .map((book) => ({
          id: book.key,
          key: book.cover_edition_key,
          title: book.title,
          author: book.author_name || "N/A",
          coverUrl: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`,
        }));
    },
    {
      getNextPageParam: (lastPage, allPages) => allPages.length * 30,
      staleTime: Infinity,
    }
  );
};
