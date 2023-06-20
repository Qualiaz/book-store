import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col outline h-screen ml-20">
        <Header />
        <MainLayout />
      </div>
    </>
  );
}

export default App;
