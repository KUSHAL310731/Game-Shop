import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} onClick={closeMenu}>
        <span className={styles.logoIcon}>🎮</span>
        GameShop
      </Link>

      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={styles.cartLink} onClick={closeMenu}>
            🛒 Cart
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </NavLink>
        </li>
        <li>
          <span className={styles.userGreeting}>
            👤 {user?.name}
          </span>
        </li>
        <li>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
