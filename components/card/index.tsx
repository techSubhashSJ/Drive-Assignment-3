import Link from "next/link";
import React from "react";
import CarCardBody from "./card-body";
import CarCardImage from "./card-image";

type DealerListingCarType = {
  colour: string;
  engineSize: number;
  fuelType: string;
  id: number;
  image: string;
  kms: number;
  listType: string;
  makeName: string;
  modelName: string;
  price: number;
  region: { regionName: string; __typename: string };
  seat_capacity: number;
  state: string;
  transmission: string;
  variant: string;
  vehicleKey: string;
  year: number;
  __typename: string;
};

const CarCard = (props: { car: DealerListingCarType }) => {
  console.log(props.car);

  return (
    <div>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <CarCardImage src={props?.car?.image} />
        <CarCardBody />
      </article>
    </div>
  );
};

export default CarCard;
