// Cart.js

import { useCart } from "../Provider/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
