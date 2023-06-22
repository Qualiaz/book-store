// import { useState, useEffect } from "react";

// const useSearchBook = (book, numOfBooks) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const res = await fetch(`https://openlibrary.org/search.json?q=${book}`);
//       const data = await res.json();

//       for (let i = 0; i < numOfBooks; i++) {
//         const bookData = data.docs[i];
//         const worksUrl = bookData.key;
//         const worksRes = await fetch(`https://openlibrary.org${worksUrl}.json`);
//         const worksData = await worksRes.json();

//         setBooks((prevBooks) => [
//           ...prevBooks,
//           {
//             title: worksData.title,
//             author: worksData.authors[0].name,
//             cover: `http://covers.openlibrary.org/b/olid/${worksData.covers[0]}-M.jpg`,
//           },
//         ]);
//       }
//     };

//     fetchBooks();
//   }, [book, numOfBooks]);

//   return books;
// };

// export default useSearchBook;
