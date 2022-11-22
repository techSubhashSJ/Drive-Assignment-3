import React, { useRef, useState } from "react";
import BasicSpecs from "./single-car-basic-specs";
import { redbookVehicleType } from "../../../types/index";

import EngineAndPerformanceSpec from "./single-car-engine-and-performance";
import TransmissionSpec from "./single-car-transmission";
import Dimensions from "./single-car-dimensions";

const SingleCardBody = (props: {
  id: BigInt;
  kms: number;
  redbookVehicle: redbookVehicleType;
}) => {
  return (
    <>
      <BasicSpecs kms={props?.kms} redbookVehicle={props?.redbookVehicle} />

      <hr className="mt-16 mx-[5%]" />

      <EngineAndPerformanceSpec redbookVehicle={props?.redbookVehicle} />

      <hr className="mx-[5%]" />

      <TransmissionSpec redbookVehicle={props?.redbookVehicle} />

      <hr className="mx-[5%]" />

      <Dimensions redbookVehicle={props?.redbookVehicle} />
    </>
  );
};

export default SingleCardBody;
