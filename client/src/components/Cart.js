import React, { useState } from "react";
import Bin from "./Bin";
import { sneaker } from "../data";
import { Card, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import shoe from "../images/image-product-1-thumbnail.jpg";

const Cart = ({ basket, cartItem, setCartItem }) => {
  // State
  const [modalShow, setModalShow] = useState(false);
  const [removeItem, setRemoveItem] = useState(0);
  const [loading, setLoading] = useState(false);
  // Function
  const handleClick = () => {
    setLoading(true);
    fetch(
      "https://sneaker-site-uk.herokuapp.com/create-checkout-session",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [{ id: 1, quantity: cartItem }],
        }),
      }
    )
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
        setLoading(false);
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <Card
      style={{
        width: "25rem",
        position: "absolute",
        right: "2%",
        top: "100%",
        padding: "1rem 0",
        zIndex: 5,
      }}
      className="shadow rounded-lg"
    >
      <Card.Body>
        <Card.Title className="font-weight-bold">Cart</Card.Title>
        <hr />
        <div className="item d-flex justify-content-between align-items-center my-3">
          {basket ? (
            <>
              <img
                src={shoe}
                style={{ width: "20%" }}
                className="rounded"
                alt="shoe"
              />
              <div className="">
                <Card.Text className="">{sneaker.name}</Card.Text>
                <Card.Text className="d-block">
                  ${sneaker.sale}.00 x {basket ? cartItem : 0}{" "}
                  <span className="font-weight-bold text-black ml-3">
                    ${sneaker.sale * cartItem}
                  </span>
                </Card.Text>
              </div>
              <Button
                variant="outline-light"
                onClick={() => setModalShow(true)}
              >
                <FontAwesomeIcon className="text-secondary" icon={faTrash} />
              </Button>
              <Bin
                show={modalShow}
                removeItem={removeItem}
                setRemoveItem={setRemoveItem}
                cartItem={cartItem}
                setCartItem={setCartItem}
                onHide={() => setModalShow(false)}
              />{" "}
            </>
          ) : (
            <>
              <Card.Text className="text-center p-5 font-weight-bold w-100">
                Your cart is empty.
              </Card.Text>
            </>
          )}
        </div>
        {basket && (
          <Button
            className="d-block custom-button w-100 text-white font-weight-bold py-3"
            type="submit"
            onClick={() => handleClick()}
            size="lg"
          >
            {loading ? <Spinner animation="border" /> : "Checkout"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cart;
