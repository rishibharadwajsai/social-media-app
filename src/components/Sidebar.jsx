import { Link } from "react-router-dom";
import "../routes/App.css";
function Sidebar(/*{ selectedTab, setSelectedTab }*/) {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div
      className="d-flex main-container flex-column flex-shrink-0 p-3 text-bg-light border-end border-dark sticky-top"
      style={{ maxWidth: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto mx-4 text-dark fw-semibold text-decoration-none"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="menu-icon"
          width={28}
          height={28}
        />
        <span className="fs-4 mx-2">Menu</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" /*onClick={() => handleOnClick("Home")}*/>
          <Link
            to="/"
            className={`nav-link text-dark`}
            aria-current="page"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt="home-icon"
              className="mx-2 mb-1"
              width={20}
              height={20}
            />
            Home
          </Link>
        </li>
        <li /*onClick={() => handleOnClick("Create Post")} */>
          <Link
            to="/createpost"
            className={`nav-link text-dark`}
          >
            <img
              src="https://www.freeiconspng.com/thumbs/writing-icon/writing-icon-4.png"
              className="mx-2 mb-1"
              alt="post-icon"
              width={20}
            />
            Create Post
          </Link>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            Friends
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark">
            Account
          </a>
        </li>
      </ul>
      <hr />
      <div className="sb-footer col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-1 me-2 mb-md-0 text-body-dark text-decoration-none lh-1"
        ></a>
        <span className="mb-1 mb-md-0 text-body-dark">© 2024 Company, Inc</span>
      </div>
    </div>
  );
}

export default Sidebar;
