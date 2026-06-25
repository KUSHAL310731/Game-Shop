import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";

const formatPrice = (price) =>
  price === 0 ? "FREE" : `$${price.toFixed(2)}`;

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const total = getTotalPrice();
  const itemCount = cart.length;

  const handleConfirmOrder = () => {
    setShowConfirm(false);
    setProcessing(true);

    setTimeout(() => {
      const order = {
        id: `GS-${Date.now().toString().slice(-8)}`,
        items: [...cart],
        total,
        date: new Date().toLocaleString(),
      };
      clearCart();
      navigate("/order-success", { state: { order } });
    }, 1500);
  };

  if (processing) {
    return (
      <div className={`${styles.cart} container`}>
        <div className={styles.processing}>
          <div className={styles.spinner} />
          <p>Processing your order...</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={`${styles.cart} container`}>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🛒</span>
          <h2>Your cart is empty</h2>
          <p>Add some games to get started!</p>
          <Link to="/products" className={styles.shopBtn}>
            Browse Games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.cart} container`}>
      <div className={styles.header}>
        <h1>Shopping Cart</h1>
        <p>{itemCount} game{itemCount !== 1 ? "s" : ""} in your cart</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.itemsList}>
          {cart.map((game) => (
            <div key={game.id} className={styles.cartItem}>
              <img
                className={styles.itemImage}
                src={game.image}
                alt={game.title}
              />
              <div className={styles.itemInfo}>
                <h3>{game.title}</h3>
                <span className={styles.category}>{game.category}</span>
                <div
                  className={`${styles.itemPrice} ${game.price === 0 ? styles.free : ""}`}
                >
                  {formatPrice(game.price)}
                </div>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => removeFromCart(game.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Items ({itemCount})</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Delivery</span>
            <span>FREE</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span className={styles.totalPrice}>{formatPrice(total)}</span>
          </div>

          <button
            className={styles.confirmBtn}
            onClick={() => setShowConfirm(true)}
          >
            Confirm Order
          </button>
          <Link to="/products" className={styles.continueLink}>
            Continue Shopping
          </Link>
        </aside>
      </div>

      {showConfirm && (
        <div className={styles.modalOverlay} onClick={() => setShowConfirm(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Confirm Your Order</h3>
            <p>
              You are about to purchase {itemCount} game
              {itemCount !== 1 ? "s" : ""}. Proceed with checkout?
            </p>
            <div className={styles.modalTotal}>{formatPrice(total)}</div>
            <div className={styles.modalActions}>
              <button
                className={styles.modalCancel}
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button className={styles.modalConfirm} onClick={handleConfirmOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
