import React from "react";
import { Col } from "react-bootstrap";

const Thumbnail = ({
  img,
  text,
  thumb,
  id,
  gallery,
  setCenterImg,
  setGallery,
}) => {
  // Function
  const handleChangeImage = () => {
    // 1. Change the centerImg state to the one clicked on.
    setCenterImg(img);
    // 2. Change the active boolean value to true for image clicked on and false for rest.
    const selectedPhoto = gallery.map((obj) => {
      if (obj.id === img.id) {
        return {
          ...obj,
          active: true,
        };
      } else {
        return {
          ...obj,
          active: false,
        };
      }
    });

    setGallery(selectedPhoto);
  };
  return (
    <Col xs={2} className=" d-flex justify-content-center">
      <img
        src={thumb}
        onClick={handleChangeImage}
        style={{ width: "100%", objectFit: "cover" }}
        className={`img-fluid rounded ${img.active ? "highlight" : ""}`}
        alt={text}
      />
    </Col>
  );
};

export default Thumbnail;