import React from "react";
import { carType } from "../../types";
import SingleCarMedia from "./single-car-media";

const SingleCar = (props: { car: carType }) => {
  console.log(props.car);

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl">
        <SingleCarMedia dealerListingImages={props.car.DealerListingImages} />
        single car
      </div>
    </div>
  );
};

export default SingleCar;
