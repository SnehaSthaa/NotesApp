import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./App.css";

import { Outlet } from "react-router";
import { NotesProvider } from "./context/NotesProvider";

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
