import React, { useState } from "react";
import styles from "./Cart.module.css";
import "../../asset/css/bootstrap.css";

// Sample local images for products
import macBookPro from "../../asset/images/home/macbook-pro.jpg";
import ipadPro from "../../asset/images/others/Apple Watch Ultra.jpg";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    // {
    //   id: 1,
    //   name: 'MacBook Pro 14"',
    //   price: 999,
    //   quantity: 1,
    //   image: macBookPro,
    // },
    // {
    //   id: 2,
    //   name: "Apple Watch Ultra",
    //   price: 399,
    //   quantity: 2,
    //   image: ipadPro,
    // },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartWrapper}>
      <div className="container">
        <h1 className={styles.cartTitle}>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty.</p>
        ) : (
          <>
            <div className="row">
              {cartItems.map((item) => (
                <div key={item.id} className="col-md-12 mb-4">
                  <div className={styles.cartItem}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.itemDetails}>
                      <h3>{item.name}</h3>
                      <p>${item.price}</p>
                      <div className={styles.quantityControl}>
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.totalWrapper}>
              <h3>Total: ${totalPrice}</h3>
              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
