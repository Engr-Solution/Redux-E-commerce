import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function LatestProducts() {
  const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [products, setProducts] = useState();
  const [filtered, setFilter] = useState();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch("https://fakestoreapi.com/products?sort='desc'")
      .then((res) => res.json())
      .then((products) => {
        if (isMounted) {
          setProducts(products);
          setFilter(products);
        }
      })
      .catch((err) => console.log(err));

    return () => setIsMounted(false);
  });

  const Filter = (filter) => {
    let filteredProducts = products.filter(
      (product) => product.category === filter
    );
    return setFilter(filteredProducts);
  };

  const ProductsSkeleton = () => {
    return ids.map((i) => (
      <div className="col-sm-6 col-lg-4">
        <div className="card">
          <Skeleton className="card-img-top products-img" />
          <div className="card-body p-3">
            <Skeleton className="my-2" style={{ height: "30px" }} />
            <Skeleton className="my-2 w-25" style={{ height: "30px" }} />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container pt-5">
      <p className="text-dark fw-bold fs-2 p-0 m-0 text-center">
        Latest Products
      </p>
      {/* Filter Buttons */}
      <div className="container-fluid d-flex justify-content-center py-5">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={(e) => setFilter(products)}
          >
            All
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={(e) => Filter("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={(e) => Filter("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={(e) => Filter("jewelery")}
          >
            Jewelery
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={(e) => Filter("electronics")}
          >
            Electronics
          </button>
        </div>
      </div>
      {/* Latest Products */}
      <motion.div layer animinate={{ y: 100 }} className="row">
        {filtered ? (
          filtered.map((product) => (
            <motion.div
              layer
              className="col-sm-6 col-lg-4 mt-3"
              key={product.id}
            >
              <motion.div layer className="card">
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
                    to={`products/product/${product.id}`}
                    className="btn btn-outline-secondary mx-auto mt-2"
                  >
                    Check Out
                  </NavLink>
                </div>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <ProductsSkeleton />
        )}
      </motion.div>
    </div>
  );
}

export default LatestProducts;
