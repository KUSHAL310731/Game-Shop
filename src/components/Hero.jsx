import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.background} />
    <div className={styles.particles}>
      {[...Array(6)].map((_, i) => (
        <span key={i} className={styles.particle} />
      ))}
    </div>

    <div className={styles.content}>
      <span className={styles.badge}>Next-Gen Gaming</span>
      <h1 className={styles.title}>
        Welcome to{" "}
        <span className={styles.titleGradient}>GameShop</span>
      </h1>
      <p className={styles.subtitle}>
        Discover the hottest titles, exclusive deals, and epic adventures.
        Your ultimate gaming destination awaits.
      </p>

      <div className={styles.actions}>
        <Link to="/products" className={styles.ctaPrimary}>
          Browse Games
        </Link>
        <Link to="/about" className={styles.ctaSecondary}>
          Learn More
        </Link>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>15+</div>
          <div className={styles.statLabel}>Games</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>50K+</div>
          <div className={styles.statLabel}>Gamers</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>4.9★</div>
          <div className={styles.statLabel}>Rating</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
