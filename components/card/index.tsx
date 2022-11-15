import React from "react";
import CarCardBody from "./card-body";
import CarCardImage from "./card-image";
import { DealerListingsType } from "../../types";
import CarCardFooter from "./card-footer";

const CarCard = (props: { car: DealerListingsType }) => {  
  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <CarCardImage src={props?.car?.image} id={props.car.id}/>
        <CarCardBody car={props.car} />
        <CarCardFooter id={props.car.id}/>
      </article>
    </div>
  );
};

export default CarCard;
