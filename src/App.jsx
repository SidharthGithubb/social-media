import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
