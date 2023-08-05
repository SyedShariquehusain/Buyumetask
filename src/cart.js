import { useEffect, useState } from "react";
import "./styles.css";

const Cart = ({ cart, totalPrice }) => {
  // useEffect(()=>{
  //   let total = cart?.reduce((accu,el,i)=>accu+el.price,0)
  //   setTotalprice(total)
  //   console.log(total);

  // },[])
  return (
    <div className="right">
      <h4>Cart</h4>
      {cart?.map((el) => {
        return (
          <div className="product" key={el.id}>
            <div>{el.name}</div>
            <div>{el.price}</div>
          </div>
        );
      })}
      {cart.length === 0 && <div>No Cart Item</div>}
      <div className="total">
        <h2>Total: {totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
