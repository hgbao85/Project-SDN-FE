import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <nav>
        <Row>
          <Col>
            <Link to="/">Home</Link>
          </Col>

          <Col>
            <Link to="/">Shop</Link>
          </Col>
          <Col>
            <Link to="/"> </Link>
          </Col>
          <Col>
            <Link to="/">Profile</Link>
          </Col>
          <Col>
            <Link to="/">cart</Link>
          </Col>
        </Row>
        <div>
          <Link to="/support">Trợ giúp</Link>
          <Link to="/login">
            Tài khoảng
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?ga=GA1.1.2107631779.1727836364&semt=ais_hybrid"
              alt="Person with sunglasses"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
