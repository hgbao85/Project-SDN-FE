import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div style={styles.header}>
      <Container>
        <nav style={styles.navbar}>
          <Row style={styles.navLinks}>
            <Col>
              <Link to="/" style={styles.navItem}>
                Home
              </Link>
            </Col>
            <Col>
              <Link to="/shop" style={styles.navItem}>
                Shop
              </Link>
            </Col>
            <Col>
              <Link to="/profile" style={styles.navItem}>
                Profile
              </Link>
            </Col>
            <Col>
              <Link to="/cart" style={styles.navItem}>
                Cart
              </Link>
            </Col>
          </Row>
          <div style={styles.authLinks}>
            <Link to="/support" style={styles.authItem}>
              Trợ giúp
            </Link>
            <Link to="/login" style={styles.authItem}>
              Tài khoản
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#007bff",
    padding: "10px 0",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "10px",
    transition: "color 0.3s ease",
  },
  authLinks: {
    display: "flex",
    gap: "15px",
  },
  authItem: {
    color: "#f8f8f8",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  // Hover effect for nav and auth items
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
