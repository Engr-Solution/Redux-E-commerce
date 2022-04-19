import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import For0For from "./component/For0For";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/product/:id" element={<Product />} />
        <Route path="/products/cart" element={<Cart />} />
        <Route path="*" element={<For0For />} />
      </Routes>
    </>
  );
}

export default App;
