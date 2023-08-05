import { useState } from "react";
import Cart from "./cart";
import Product from "./product";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(Products);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalprice] = useState(
    cart?.reduce((accu, el, i) => accu + el.price, 0)
  );

  const setCartData = (d) => {
    let total = cart?.reduce((accu, el, i) => accu + el.price, 0);
    setTotalprice(total);
    setCart([...cart, d]);
  };
  return (
    <div className="App">
      <div className="container">
        <Product data={data} setCartData={setCartData} />
        <Cart cart={cart} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 }
];
