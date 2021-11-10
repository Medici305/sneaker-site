import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import SlideImages from "./SlideImages";
import Detail from "./Detail";
import { info } from "../data";
import { Container, Row, Col } from "react-bootstrap";

const Product = ({
  counter,
  setCounter,
  setBasket,
  basket,
  cartItem,
  setCartItem,
}) => {
  // State
  const [gallery, setGallery] = useState(info());
  const [centerImg, setCenterImg] = useState(gallery[0]);
  // Functions

  return (
    <Container>
      {/* Responsive carousel */}
      <SlideImages />
      <Row className="my-5">
        {/* Left side with shoe images */}
        <Col xs={12} lg={6} className="d-none d-lg-block">
          {/* Center stage main photo */}
          <Row className="d-flex justify-content-center align-items-center mb-4">
            <Col xs={10} className="px-0">
              <img
                src={centerImg.pic}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className="img-fluid rounded"
                alt="Main-sneaker"
              />
            </Col>
          </Row>
          {/* Back up dancers thumbnail */}
          <Row className=" d-flex justify-content-evenly">
            {gallery.map((img) => (
              <Thumbnail
                img={img}
                src={img.pic}
                text={img.desc}
                thumb={img.thumb}
                key={img.id}
                gallery={gallery}
                setCenterImg={setCenterImg}
                setGallery={setGallery}
              />
            ))}
          </Row>
        </Col>
        {/* Right side description of sneaker */}
        <Col xs={12} lg={6} style={{}} className="">
          <Detail
            counter={counter}
            setCounter={setCounter}
            setBasket={setBasket}
            basket={basket}
            cartItem={cartItem}
            setCartItem={setCartItem}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Product;