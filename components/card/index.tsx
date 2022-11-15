import React from "react";
import CarCardBody from "./card-body";
import CarCardImage from "./card-image";
import { DealerListingsType } from "../../types";
import CarCardFooter from "./card-footer";

const CarCard = (props: { car: DealerListingsType }) => {
  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <CarCardImage src={props?.car?.image} />
        <CarCardBody car={props.car} />
        <CarCardFooter />
      </article>
    </div>
  );
};

export default CarCard;
