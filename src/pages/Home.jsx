import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import games from "../data/games";
import styles from "./Home.module.css";


const Home = () => {
  const { addToCart, isInCart } = useCart();

  const featuredGames = games.filter((g) => g.featured);
  const trendingGames = games.filter((g) => g.trending);
  const offerGames = games.filter((g) => g.discount > 0).slice(0, 3);

  return (
    <div className={styles.home}>
      <Hero />

      <section className={`${styles.section} container`}>
        <h2 className="section-title">Featured Games</h2>
        <p className="section-subtitle">Hand-picked titles you can't miss</p>
        <div className={styles.grid}>
          {featuredGames.map((game) => (
            <ProductCard
              key={game.id}
              game={game}
              addToCart={addToCart}
              inCart={isInCart(game.id)}
            />
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className="section-title">Trending Now</h2>
          <p className="section-subtitle">The games everyone is talking about</p>
          <div className={styles.grid}>
            {trendingGames.map((game) => (
              <ProductCard
                key={game.id}
                game={game}
                addToCart={addToCart}
                inCart={isInCart(game.id)}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <h2 className="section-title">Offers & Discounts</h2>
        <p className="section-subtitle">Grab these deals before they're gone</p>
        <div className={styles.offersGrid}>
          {offerGames.map((game) => (
            <div key={game.id} className={styles.offerCard}>
              <span className={styles.offerBadge}>-{game.discount}% OFF</span>
              <h3 className={styles.offerTitle}>{game.title}</h3>
              <p className={styles.offerDesc}>{game.description}</p>
              <div className={styles.offerPrice}>
                <span className={styles.originalPrice}>
                  ${(game.price / (1 - game.discount / 100)).toFixed(2)}
                </span>
                <span className={styles.salePrice}>
                  {game.price === 0 ? "FREE" : `$${game.price.toFixed(2)}`}
                </span>
              </div>
              <Link to="/products" className={styles.offerBtn}>
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.ctaBanner}>
        <h2>Ready to Level Up?</h2>
        <p>Join thousands of gamers and explore our full catalog today.</p>
        <Link to="/products" className="btn-primary">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
