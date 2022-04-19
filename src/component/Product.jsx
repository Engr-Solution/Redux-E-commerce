import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/index";

function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))
      .catch((err) => console.log(err));
  });

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
    console.log(product)
  };

  // Skeleton Loader
  const ProductSkeleton = () => {
    return (
      <div className="row">
        <div className="col-md-6 product-img-wrap">
          <div className="product-img">
            <Skeleton className="h-100 w-100" />
          </div>
        </div>
        <div className="col-md-6">
          <Skeleton className="w-50 mb-3" height={25} />
          <Skeleton className="w-75 mb-3" height={30} />
          <Skeleton className="w-100 mb-3" height={90} />
          <Skeleton className="w-50 mt-5" height={25} />
          <Skeleton className="w-50 mt-3" height={20} />
          <div className="row mt-5">
            <div className="col-4">
              <Skeleton height={40} />
            </div>
            <div className="col-4">
              <Skeleton height={40} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid pt-5 px-5 mt-3">
        {product ? (
          <div className="row">
            <div className="col-md-6 product-img-wrap">
              <div className="product-img">
                <img
                  src={product.image}
                  alt="product"
                  className="h-100 w-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <p className="product-category fs-6 fst-italic text-uppercase mb-md-3">
                - {product.category}
              </p>
              <h1 className="product-name fs-1 fw-normal mb-3">
                {product.title}
              </h1>
              <p className="product-desc py-3">{product.description}</p>
              <p className="product-more d-fle justify-content-between align-items-center py-3">
                <p className="product-price fs-3 fw-normal">${product.price}</p>
                <p className="rate d-flex align-items-center text-danger">
                  Stars: 3.5
                  <i className="bi bi-star-fill mx-1 "></i>
                  <i className="bi bi-star-fill mx-1"></i>
                  <i className="bi bi-star-fill mx-1"></i>
                  <i className="bi bi-star-half mx-1"></i>
                  <i className="bi bi-star mx-1"></i>
                </p>
              </p>
              <div className="pb-3">
                <button
                  className="btn btn-primary me-3"
                  onClick={() => addProduct(product)}
                >
                  {" "}
                  <i className="bi bi-cart-plus me-2"></i> Add to Cart
                </button>
                <NavLink to="products/cart">
                  <button className="btn btn-outline-primary">
                    {" "}
                    <i className="bi bi-cart me-2 "></i>Go to Cart
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <ProductSkeleton />
        )}
      </div>
    </>
  );
}

export default Product;
