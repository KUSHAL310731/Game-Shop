import React, { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ game, addToCart, inCart, compact = false }) => {
  const [showModal, setShowModal] = useState(false);

  const formatPrice = (price) =>
    price === 0 ? "FREE" : `$${price.toFixed(2)}`;

  return (
    <>
      <div className={`${styles.card} ${compact ? styles.compact : ""}`}>
        <div className={styles.imageWrapper}>
          <img src={game.image} alt={game.title} loading="lazy" />
          <span className={styles.category}>{game.category}</span>
          {game.discount > 0 && (
            <span className={styles.discount}>-{game.discount}%</span>
          )}
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{game.title}</h3>
          {!compact && <p className={styles.description}>{game.description}</p>}

          <div className={styles.meta}>
            <span className={styles.rating}>★ {game.rating}</span>
            <span className={`${styles.price} ${game.price === 0 ? styles.free : ""}`}>
              {formatPrice(game.price)}
            </span>
          </div>

          <div className={styles.actions}>
            <button
              className={`${styles.addBtn} ${inCart ? styles.added : ""}`}
              onClick={() => addToCart(game)}
            >
              {inCart ? "✓ In Cart" : "Add to Cart"}
            </button>
            <button
              className={styles.detailsBtn}
              onClick={() => setShowModal(true)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              className={styles.modalImage}
              src={game.image}
              alt={game.title}
            />
            <div className={styles.modalBody}>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <div className={styles.modalMeta}>
                <span>★ Rating: {game.rating}</span>
                <span>Category: {game.category}</span>
                <span>Price: {formatPrice(game.price)}</span>
              </div>
              <button
                className={styles.addBtn}
                style={{ width: "100%" }}
                onClick={() => {
                  addToCart(game);
                  setShowModal(false);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
