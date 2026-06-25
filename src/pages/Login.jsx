import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      login(email);
      setLoading(false);
      navigate("/");
    }, 1200);
  };

  const fillDemo = () => {
    setEmail("gamer@gameshop.com");
    setPassword("gameshop");
    setErrors({});
  };

  return (
    <div className={styles.loginPage}>
      {/* Left branding panel */}
      <div className={styles.brandPanel}>
        <div className={styles.brandBg} />
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />

        <div className={styles.brandContent}>
          <div className={styles.brandLogo}>
            <span className={styles.brandLogoIcon}>🎮</span>
            <span className={styles.brandLogoText}>GAMESHOP</span>
          </div>

          <h1 className={styles.brandTitle}>
            Level Up Your<br />
            <span>Gaming Experience</span>
          </h1>
          <p className={styles.brandDesc}>
            Access 500+ premium titles, exclusive deals, and instant digital
            delivery — all in one epic gaming marketplace.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⚡</span>
              <div className={styles.featureText}>
                <strong>Instant Delivery</strong>
                <span>Digital keys in seconds</span>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🏷️</span>
              <div className={styles.featureText}>
                <strong>Exclusive Deals</strong>
                <span>Up to 50% off top titles</span>
              </div>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🛡️</span>
              <div className={styles.featureText}>
                <strong>Secure Platform</strong>
                <span>256-bit encrypted checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className={styles.formPanel}>
        <div className={styles.loginCard}>
          <div className={styles.mobileBrand}>
            <div className={styles.mobileBrandIcon}>🎮</div>
            <div className={styles.mobileBrandName}>GAMESHOP</div>
          </div>

          <div className={styles.formHeader}>
            <h2>Sign In</h2>
            <p>Enter your credentials to access your account</p>
          </div>

          <form className={styles.form} onSubmit={handleLogin} noValidate>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>✉️</span>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={errors.email ? styles.error : ""}
                />
              </div>
              {errors.email && (
                <span className={styles.errorMsg}>⚠ {errors.email}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWrapper}>
                <span className={styles.inputIcon}>🔒</span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: "" });
                  }}
                  className={`${styles.passwordInput} ${errors.password ? styles.error : ""}`}
                />
                <button
                  type="button"
                  className={styles.toggleBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <span className={styles.errorMsg}>⚠ {errors.password}</span>
              )}
            </div>

            <div className={styles.options}>
              <label className={styles.remember}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className={styles.forgotLink}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className={styles.loginBtn} disabled={loading}>
              {loading ? (
                <>
                  <span className={styles.btnSpinner} />
                  Signing in...
                </>
              ) : (
                "Login →"
              )}
            </button>

            <div className={styles.divider}>or try demo</div>

            <div className={styles.demoHint}>
              <strong>Demo:</strong> Use any valid email & password (6+ chars),{" "}
              <button
                type="button"
                onClick={fillDemo}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--accent-pink)",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "inherit",
                  padding: 0,
                }}
              >
                click to autofill
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
