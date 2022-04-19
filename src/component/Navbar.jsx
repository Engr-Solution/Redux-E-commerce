import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.CartHandler);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light position-sticky top-0 h-100">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <p className="highlight fw-bolder fs-2 m-0">
            <strong className="highlight text-danger">i</strong>Store
            <i class="bi bi-cart3 fw-bolder fs-2 ms-2"></i>
          </p>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between bg-light" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link fs-5 active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link fs-5" to="#">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="#">
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="d-flex ">
            <div className="cartIcon position-relative me-3 p-0">
              <NavLink to="products/cart" className="nav-link text-dark p-0">
                {" "}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cart.length}
                </span>
                <i className="bi bi-cart3 fw-bold fs-3"></i>
              </NavLink>
            </div>
            <div className="input-group ms-2">
              <span class="input-group-text" id="basic-addon1">
                <i className="bi bi-search "></i>
              </span>
              <input
                className="form-control me-0"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              {/* <span class="input-group-text" id="basic-addon1">
                <button className="btn btn-outline-primary" type="submit">
                Search
                </button>
              </span> */}
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
