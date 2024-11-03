import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaListAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
            <FaHome style={styles.icon} /> Trang chủ
          </Link>
          <Link to="/cart" style={styles.navItem}>
            <FaShoppingCart style={styles.icon} /> Giỏ hàng
          </Link>
          <Link to="/profile" style={styles.navItem}>
            <FaUser style={styles.icon} /> Cá nhân
          </Link>
          <Link to="/Orders" style={styles.navItem}>
            <FaListAlt style={styles.icon} /> Danh sách đơn hàng
          </Link>
          <Link to="/contact" style={styles.navItem}>
            <FaPhoneAlt style={styles.icon} /> Liên hệ chúng tôi
          </Link>
          <Link to="/address" style={styles.navItem}>
            <FaMapMarkerAlt style={styles.icon} /> Địa chỉ
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
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  icon: {
    marginRight: "5px",
  },
};

export default Header;
