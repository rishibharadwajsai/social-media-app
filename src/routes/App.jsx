import { useState } from "react";
import "./App.css";
// import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
// import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className=" d-flex">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="content">
            <Navbar></Navbar>
            {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
            <Outlet></Outlet>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
