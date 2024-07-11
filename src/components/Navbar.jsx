import { Button } from "antd";

function Navbar() {

  return (
    <header className="p-3 text-bg-light sticky-top ">
      <div className="container border-bottom border-2 border-dark pb-3">
        <div className="d-flex flex-wrap align-items-center justify-content-sm-evenly justify-content-lg-end">
          <form id="search-form" className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              className="form-control form-control-dark text-bg-white text-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <Button className="mx-1 my-1 fw-semibold">Login</Button>
            <Button type="primary" className="mx-1 my-1 fw-semibold">
              Sign-up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
