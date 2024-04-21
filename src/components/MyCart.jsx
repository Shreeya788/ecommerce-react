// MyCart.js

import { useCart } from "../Provider/CartContext";

const MyCart = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="my-cart">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default MyCart;
