import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.CartHandler);
  const increaseCount = (product) => {
    dispatch(addToCart(product))
  }
  const decreaseCount = (product) => {
    dispatch(removeFromCart(product))
  }


  const Empty = () => {
    return (
      <div className="row">
        <p className="fs-3 text-center fw-bold">Nothing in Cart to display</p>
      </div>
    );
  };

  return (
    <div className="container-fluid px-sm-3 p-md-5 p-5">
      <div className="row">
        {cart.length >= 1 ? (
          cart.map((item) => (
            <>
              <div key={item.id} className="col-sm-12">
                <div className=" mb-3">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt="... "
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="card-body ">
                        <h5 className="card-title fs-1 mb-3 text-center">
                          {item.title}
                        </h5>
                        <span className="total-items fw-bold text-center">
                          <p>
                            {" "}
                            ${item.price} x {item.count} = $
                            {(item.count * item.price).toFixed(2)}{" "}
                          </p>
                        </span>
                        <div className="btns">
                          <div className="d-flex justify-content-center">
                            <button
                              className="btn btn-outline-primary"
                              type="button"
                              onClick={() => decreaseCount(item)}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <button
                              className="btn btn-outline-primary ms-5"
                              type="button"
                              onClick={() => increaseCount(item)}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export default Cart;
