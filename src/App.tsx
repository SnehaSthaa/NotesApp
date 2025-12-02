import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./App.css";
import { NotesProvider } from "./context/NotesContex";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <NotesProvider>
        <div className="app-container">
          <SideBar />
          <div className="content">
            <Header />
            <Outlet />

            <Footer />
          </div>
        </div>
      </NotesProvider>
    </>
  );
};

export default App;
