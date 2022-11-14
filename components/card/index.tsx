import Link from "next/link";
import React from "react";
import CarCardBody from "./card-body";
import CarCardImage from "./card-image";
import { DealerListingsType } from "../../types";

const CarCard = (props: { car: DealerListingsType }) => {
  console.log(props.car);

  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <CarCardImage src={props?.car?.image} />
        <CarCardBody car={props.car} />
      </article>
    </div>
  );
};

export default CarCard;
