import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  console.log(products + "cart product");

  const dispatch = useDispatch();

  const removeTocart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className=" col-md-3">
      <div key={product.id} className="product-card">
        <img src={product.image} alt="img" />
        <h3>{product.title}</h3>
        <p className="product-description">{product.category}</p>
        <p className="product-price">{product.price}</p>
        <button
          className="add-to-cart "
          onClick={() => removeTocart(product.id)}
        >
          Remove Product
        </button>
      </div>
    </div>
  ));

  return <div className="row">{cards}</div>;
};

export default Cart;
