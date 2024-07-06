import "./App.css";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="main-container d-flex">
        <Sidebar></Sidebar>
        <div className="content">
          <Navbar></Navbar>
          <CreatePost />
          <PostList />
        </div>
      </div>
    </>
  );
}

export default App;
