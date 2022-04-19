import React from "react";
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <div className="navbar container-fluid d-flex justify-content-between align-items-center py-2 px-5">
      <div>
        {" "}
        <h2 className="fw-bolder">
          <NavLink to="/" className="nav-link">
            iStore
          </NavLink>
        </h2>
      </div>
      <div>
        <nav className="nav nav-pills flex-column flex-sm-row">
          <NavLink
            className="flex-sm-fill text-sm-center nav-link"
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="flex-sm-fill text-sm-center nav-link"
            to="/products"
          >
            Products
          </NavLink>
          <NavLink className="flex-sm-fill text-sm-center nav-link" to="">
            About
          </NavLink>
          <NavLink
            className="flex-sm-fill text-sm-center nav-link"
            to=""
            tabindex="-1"
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="d-flex justify-content-between align-items-center p-0 py-auto">
        <div className="input-group d-none d-md-flex ">
          <span className="input-group-text px-2 py-0">
            <i className="bi bi-search fw-bold fs-3"></i>
          </span>
          <input type="text" className="form-control" placeholder="Search.." />
        </div>
        <NavLink to="#" className="nav-link text-dark p-0 d-block d-md-none">
          <i className="bi bi-search fw-bold fs-3"></i>
        </NavLink>
        <div className="cartIcon position-relative ms-3 p-0">
          <NavLink to="/cart" className="nav-link text-dark p-0">
            {" "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              10
            </span>
            <i className="bi bi-cart3 fw-bolder fs-3"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
