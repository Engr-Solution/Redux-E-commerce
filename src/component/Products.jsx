import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Products() {
  const ids = [0, 1, 2, 3, 4, 5];
  // const [products, setProducts] = useState();
  const [filtered, setFilter] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        // setProducts(products);
        setFilter(products);
      })
      .catch((err) => console.log(err));
  });

  const ProductsSkeleton = () => {
    return ids.map((i) => (
      <div className="col-sm-6 col-lg-4 mb-3">
        <div className="card">
          <Skeleton className="card-img-top products-img p-0" />
          <div className="card-body p-3">
            <Skeleton className="my-2" height={30} />
            <Skeleton className="my-2 w-25" height={30} />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <motion.div layer className="container pt-3">
        <p className="text-dark fw-bold fs-2 text-center my-3">Our Products</p>
        <motion.div layer className="row">
          {filtered ? (
            filtered.map((product) => (
              <motion.div
                layer
                className="col-sm-6 col-lg-4 mt-3"
                key={product.id}
              >
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top products-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mt-0">
                      <h6 className="product-name m-0">
                        {product.title.slice(0, 30)}...
                      </h6>
                      <p className="product-price fs-6 m-0">${product.price}</p>
                    </div>
                    <NavLink
                      to={`/products/product/${product.id}`}
                      className="btn btn-outline-secondary mx-auto mt-2"
                    >
                      Check Out
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <ProductsSkeleton />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Products;
