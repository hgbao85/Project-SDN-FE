import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header} className="header">
      <nav style={styles.navbar}>
        <div
          style={{
            height: "10vh",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Link to="/home" style={styles.navItem}>
            Shoe Store
          </Link>
        </div>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navItem}>
            Trang chủ
          </Link>
          <Link to="/cart" style={styles.navItem}>
            Giở hàng
          </Link>
          <Link to="/profile" style={styles.navItem}>
            Cá nhân
          </Link>
          <Link to="/Orders" style={styles.navItem}>
            Danh sách đơn hàng
          </Link>
          <Link to="/contact" style={styles.navItem}>
            Liên hệ chúng tôi
          </Link>
          <Link to="/address" style={styles.navItem}>
            Địa chỉ
          </Link>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#f9fafb",
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: "1.5vh",
  },
  navItem: {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "10px",
    transition: "color 0.3s ease",
  },
  authLinks: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  authItem: {
    color: "#f8f8f8",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  hover: {
    color: "#ffdd57",
  },
};

// Adding hover effects in JavaScript since inline styles do not support CSS :hover
const addHoverEffect = (element, style) => {
  const originalColor = element.style.color;
  element.onmouseover = () => (element.style.color = style.color);
  element.onmouseout = () => (element.style.color = originalColor);
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("a")
    .forEach((link) => addHoverEffect(link, styles.hover));
});

export default Header;
