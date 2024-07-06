function Sidebar({ selectedTab, setSelectedTab }) {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => handleOnClick("Home")}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li onClick={() => handleOnClick("Create Post")}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Friends
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Account
          </a>
        </li>
      </ul>
      <hr />
      <div className="sb-footer col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-1 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            alt="logo"
            width={30}
            height={24}
          />
        </a>
        <span className="mb-1 mb-md-0 text-body-dark">© 2024 Company, Inc</span>
      </div>
    </div>
  );
}

export default Sidebar;
