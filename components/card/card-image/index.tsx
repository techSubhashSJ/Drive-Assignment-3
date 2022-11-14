import React from "react";

const CarCardImage = (props: { src: string }) => {
  return (
    <img
      alt="Image not available"
      className="block h-72 w-full object-cover"
      src={props.src}
      data-testid="image"
    />
  );
};

export default CarCardImage;
