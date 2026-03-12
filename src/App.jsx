import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import Postlists from "./components/Postlists";
import Createpost from "./components/Createpost";
import PostListProvider from "./store/Post-list-store";
import { useContext, useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="main-content">
          <Header />
          {selectedTab === "Home" ? (
            <Postlists />
          ) : (
            <Createpost setSelectedTab={setSelectedTab} />
          )}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
