import React from "react";
import BasicSpecs from "../single-car-basic-specs";
import {redbookVehicleType} from "../../../types/index"

const SingleCardBody = (props: {id: BigInt, kms:number, redbookVehicle: redbookVehicleType}) => {
  return <BasicSpecs id={props.id} kms={props.kms} redbookVehicle={props.redbookVehicle}/>;
};

export default SingleCardBody;
