import { useInfiniteQuery } from "react-query";

const useInfiniteBooksBySubject = (subject) => {
  return useInfiniteQuery(
    ["books", subject],
    async ({ pageParam = 0 }) => {
      const subjectUrl = `https://openlibrary.org/subjects/${subject}.json?limit=30&offset=${pageParam}`;
      const subjectResponse = await fetch(subjectUrl);
      const subjectData = await subjectResponse.json();
      return subjectData.works
        .filter((work) => work.cover_edition_key !== null)
        .map((work) => ({
          id: work.cover_edition_key,
          title: work.title,
          coverUrl: `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-M.jpg`,
          author: work?.authors[0]?.name,
        }));
    },
    {
      getNextPageParam: (lastPage, allPages) => allPages.length * 30,
      staleTime: Infinity,
    }
  );
};

export default useInfiniteBooksBySubject;
