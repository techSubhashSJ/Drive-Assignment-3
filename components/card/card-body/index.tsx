import Link from "next/link";
import React from "react";
import { DealerListingsType } from "../../../types";

const CarCardBody = (props: { car: DealerListingsType }) => {
  const {
    year,
    makeName,
    modelName,
    price,
    kms,
    transmission,
    fuelType,
    seat_capacity,
    colour,
    id,
  } = props.car;

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Link href={`/cars-for-sale/car/${id}`}>
          <a>
            <h1 className="font-body font-semibold text-xl  hover:text-primary_hover">
              {year} {makeName} {modelName}
            </h1>
          </a>
        </Link>
        <h1 className="font-body font-bold text-xl">$ {price}</h1>
      </div>

      <div className="flex flex-col mt-8 text-lg md:flex-row md:space-x-10">
        <ul role="list" className="list-disc pl-5 space-y-3 ">
          <li>{kms} km</li>
          <li>{colour}</li>
        </ul>

        <ul role="list" className="list-disc pl-5 space-y-3 ">
          <li>{fuelType}</li>
          <li>
            {seat_capacity} {transmission}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarCardBody;
