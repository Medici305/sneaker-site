import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

const SlideImages = () => {
  // State
  const [index, setIndex] = useState(0);

  // Function
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="d-lg-none" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideImages;