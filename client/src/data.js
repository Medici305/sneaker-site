import { v4 as uuidv4 } from "uuid";
import imageThumb1 from "./images/image-product-1-thumbnail.jpg";
import imageThumb2 from "./images/image-product-2-thumbnail.jpg";
import imageThumb3 from "./images/image-product-3-thumbnail.jpg";
import imageThumb4 from "./images/image-product-4-thumbnail.jpg";

import image1 from "./images/image-product-1.jpg";
import image2 from "./images/image-product-2.jpg";
import image3 from "./images/image-product-3.jpg";
import image4 from "./images/image-product-4.jpg";

export const info = () => {
  return [
    {
      pic: image1,
      thumb: imageThumb1,
      desc: "thumbnail-1",
      active: true,
      id: uuidv4(),
    },
    {
      pic: image2,
      thumb: imageThumb2,
      desc: "thumbnail-2",
      active: false,
      id: uuidv4(),
    },
    {
      pic: image3,
      thumb: imageThumb3,
      desc: "thumbnail-3",
      active: false,
      id: uuidv4(),
    },
    {
      pic: image4,
      thumb: imageThumb4,
      desc: "thumbnail-4",
      active: false,
      id: uuidv4(),
    },
  ];
};

export const sneaker = {
  company: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  sale: 125,
  discount: "50%",
  originalPrice: "$250.00",
};