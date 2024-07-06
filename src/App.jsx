import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className="main-container d-flex">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Navbar></Navbar>
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        </div>
      </div>
    </>
  );
}

export default App;
