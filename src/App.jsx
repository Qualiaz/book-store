import { Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainLayout from "./Layouts/MainLayout";
import Book from "./pages/Book";
import Books from "./pages/Books";

import React from "react";

const queryClient = new QueryClient();

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const formattedQuery = searchQuery.trim().replace(/\s+/g, "+");
  return <Books search={formattedQuery} />;
};

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Sidebar />
        <div className="flex flex-col outline h-screen ml-20">
          <Header />
          <MainLayout>
            <Routes>
              <Route path="/books/all" element={<Books genre="all" />} />
              <Route
                path="/books/science"
                element={<Books genre="science" />}
              />
              <Route
                path="/books/fiction"
                element={<Books genre="fiction" />}
              />
              <Route
                path="/books/sf"
                element={<Books genre="science_fiction" />}
              />
              <Route
                path="/books/romance"
                element={<Books genre="romance" />}
              />
              <Route
                path="/books/fantasy"
                element={<Books genre="fantasy" />}
              />
              <Route path="/books/kids" element={<Books genre="kids" />} />
              <Route
                path="/books/history"
                element={<Books genre="history" />}
              />
              <Route path="/books/comics" element={<Books genre="comics" />} />
              <Route path="/books/art" element={<Books genre="art" />} />
              <Route path="/books/crime" element={<Books genre="crime" />} />
              <Route
                path="/books/classical"
                element={<Books genre="classic" />}
              />

              <Route path="/book/:id" element={<Book />} />
              <Route path="/results" element={<SearchResults />} />
            </Routes>
          </MainLayout>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
