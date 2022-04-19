import React from "react";
import Img from '../images/for0for (2).png';
import { NavLink } from "react-router-dom";

function For0For() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-sm-12">
          {" "}
          <img
            src={Img}
            alt="404"
            className="w-100"
            style={{ maxHeight: "400px" }}
          />
          <span className="text-mute mt-3">
            <p className="d-flex justify-content-center align-items-center">
              Go back to our
              <NavLink to="/" className='text-dark'>
                <p className="text-dark  m-0 ms-2 fs-5 fw-bold">
                  Homepage
                </p>
              </NavLink>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default For0For;
