import React from "react";
import { carType } from "../../types";
import SingleCardBody from "./single-car-body";
import SingleCarMedia from "./single-car-media";

const SingleCar = (props: { car: carType }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-2xl">
        <SingleCarMedia dealerListingImages={props.car.DealerListingImages} />
        <SingleCardBody id={props.car.id} kms={props.car.kms} redbookVehicle={props.car.RedbookVehicle}/>
      </div>
    </div>
  );
};

export default SingleCar;
