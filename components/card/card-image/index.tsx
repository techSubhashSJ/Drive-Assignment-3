import Link from "next/link";
import React from "react";

const CarCardImage = (props: { src: string; id: number }) => {
  return (
    <Link href={`/cars-for-sale/car/${props.id}`}>
      <a>
        <img
          alt="Image not available"
          className="block h-72 w-full object-cover transition ease-in-out delay-150 duration-300 hover:scale-110"
          src={props.src}
          data-testid="image"
        />
      </a>
    </Link>
  );
};

export default CarCardImage;
