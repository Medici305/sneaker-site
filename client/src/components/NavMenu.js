import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import profile from "../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NavMenu = ({
  toggle,
  setToggle,
  basket,
  cartItem,
  setCartToggle,
  cartToggle,
  setCartItem,
}) => {
  return (
    <Container className="">
      <Row>
        <Col xs={1} md={2} className="d-lg-none d-block">
          <FontAwesomeIcon
            onClick={() => setToggle(!toggle)}
            icon={toggle ? faTimes : faBars}
          />
        </Col>
        <Col className="">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
        <Col className="d-none d-lg-block " sm={7}>
          <Nav className="me-auto">
            <Nav.Link href="#Collections">Collections</Nav.Link>
            <Nav.Link href="#Men">Men</Nav.Link>
            <Nav.Link href="#Women">Women</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col
          xs={4}
          md="auto"
          className="profile d-flex align-items-center justify-content-around"
        >
          <div
            className="notification"
            onClick={() => setCartToggle(!cartToggle)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{basket ? cartItem : 0}</span>
          </div>
          <Link to="/" className="d-flex justify-content-center">
            <img className="" src={profile} alt="avatar" />
          </Link>
        </Col>
        {cartToggle && (
          <Cart basket={basket} cartItem={cartItem} setCartItem={setCartItem} />
        )}
      </Row>
    </Container>
  );
};

export default NavMenu;