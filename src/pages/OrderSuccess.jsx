import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import styles from "./OrderSuccess.module.css";

const formatPrice = (price) =>
  price === 0 ? "FREE" : `$${price.toFixed(2)}`;

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.successPage}>
      <div className={styles.card}>
        <div className={styles.confetti}>
          {[...Array(6)].map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className={styles.checkmark}>✓</div>
        <h1 className={styles.title}>Order Successful!</h1>
        <p className={styles.subtitle}>
          Thank you for your purchase. Your games are ready — check your email
          for download keys and receipts.
        </p>

        <div className={styles.orderInfo}>
          <div className={styles.orderRow}>
            <span>Order ID</span>
            <span className={styles.orderId}>{order.id}</span>
          </div>
          <div className={styles.orderRow}>
            <span>Date</span>
            <span>{order.date}</span>
          </div>
          <div className={styles.orderRow}>
            <span>Status</span>
            <span style={{ color: "var(--accent-cyan)" }}>Confirmed</span>
          </div>

          <div className={styles.itemsList}>
            <h4>Items Purchased</h4>
            {order.items.map((game) => (
              <div key={game.id} className={styles.item}>
                <span className={styles.itemName}>{game.title}</span>
                <span className={styles.itemPrice}>
                  {formatPrice(game.price)}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.totalPaid}>
            <span>Total Paid</span>
            <span className={styles.totalAmount}>
              {formatPrice(order.total)}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/products" className={styles.primaryBtn}>
            Continue Shopping
          </Link>
          <Link to="/" className={styles.secondaryBtn}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
