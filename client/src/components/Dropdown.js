import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ toggle, setToggle }) => {
  return (
    <div className="screen">
      <div className="menu">
        <FontAwesomeIcon

          className="my-5"
          onClick={() => setToggle(!toggle)}
          icon={faTimes}
        />
        <Nav className="me-auto d-flex flex-column">
          <Nav.Link href="#Collections">Collections</Nav.Link>
          <Nav.Link href="#Men">Men</Nav.Link>
          <Nav.Link href="#Women">Women</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Dropdown;