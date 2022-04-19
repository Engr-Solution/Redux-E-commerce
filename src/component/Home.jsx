import React from "react";
import LatestProducts from './LatestProducts';

function Home() {

  return (
    <>
      <div className="header container-fluid row m-0">
        <div className="col-sm-6 d-flex justify-content-center align-items-center">
          <h2 className="text-center text-light fs-1 fw-bold">
            Welcone to{" "}
            <p className="highlight">
              <strong className="highlight text-danger">i</strong>Store
              <i class="bi bi-cart3 fw-bolder fs-2 ms-2"></i>
            </p>
          </h2>
        </div>
      </div>
      <LatestProducts />
    </>
  );
}

export default Home;
