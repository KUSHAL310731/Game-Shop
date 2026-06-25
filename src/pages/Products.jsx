import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import games, { categories } from "../data/games";
import styles from "./Products.module.css";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const { addToCart, isInCart, cartCount } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "All" || game.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`${styles.products} container`}>
      <div className={styles.header}>
        <h1>Our Games</h1>
        <p>Explore our full catalog of epic titles</p>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.categoryFilter}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <Link to="/cart" className={styles.cartBadge}>
          🛒 Cart: {cartCount} item{cartCount !== 1 ? "s" : ""}
        </Link>
      </div>

      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <p>Loading games...</p>
        </div>
      ) : filteredGames.length === 0 ? (
        <div className={styles.noResults}>
          <span>🎮</span>
          <h3>No games found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <>
          <p className={styles.resultsCount}>
            Showing {filteredGames.length} game
            {filteredGames.length !== 1 ? "s" : ""}
          </p>
          <div className={styles.grid}>
            {filteredGames.map((game) => (
              <ProductCard
                key={game.id}
                game={game}
                addToCart={addToCart}
                inCart={isInCart(game.id)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
