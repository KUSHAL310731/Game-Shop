import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className={`${styles.contact} container`}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Have a question? We'd love to hear from you.</p>
      </div>

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={errors.name ? styles.error : ""}
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? styles.error : ""}
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="How can we help?"
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className={errors.subject ? styles.error : ""}
            />
            {errors.subject && (
              <span className={styles.errorMsg}>{errors.subject}</span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={5}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={errors.message ? styles.error : ""}
            />
            {errors.message && (
              <span className={styles.errorMsg}>{errors.message}</span>
            )}
          </div>

          {submitted && (
            <div className={styles.successMsg}>
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>Get In Touch</h3>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h4>Email</h4>
                <p>support@gameshop.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <h4>Address</h4>
                <p>123 Gaming Street, Tech City, India 400001</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <h4>Business Hours</h4>
                <p>Mon – Sat: 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className={styles.map}>
            <div className={styles.mapGrid} />
            <span className={styles.mapPin}>📍</span>
            <span className={styles.mapIcon}>🗺️</span>
            <p>Google Maps Placeholder</p>
            <p style={{ fontSize: "0.85rem" }}>123 Gaming Street, Tech City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
