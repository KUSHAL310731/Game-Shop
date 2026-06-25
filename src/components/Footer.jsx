import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.brand}>
        <h3>🎮 GameShop</h3>
        <p>
          Your ultimate destination for the latest and greatest games. Level up
          your collection with exclusive deals and premium titles.
        </p>
      </div>

      <div className={styles.links}>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>

      <div className={styles.social}>
        <h4>Follow Us</h4>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noreferrer">
            f
          </a>
          <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noreferrer">
            𝕏
          </a>
          <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noreferrer">
            📷
          </a>
          <a href="https://discord.com" className={styles.socialLink} aria-label="Discord" target="_blank" rel="noreferrer">
            💬
          </a>
          <a href="https://youtube.com" className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noreferrer">
            ▶
          </a>
        </div>
      </div>
    </div>

    <div className={styles.bottom}>
      <p>© 2026 GameShop. All rights reserved.</p>
      <div className={styles.bottomLinks}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
