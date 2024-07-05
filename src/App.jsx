import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="main-container d-flex">
        <Sidebar></Sidebar>
        <div className="content">
          <Navbar></Navbar>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </>
  );
}

export default App;
