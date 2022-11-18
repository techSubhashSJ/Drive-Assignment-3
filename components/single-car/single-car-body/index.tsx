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
      <BasicSpecs
        id={props?.id}
        kms={props?.kms}
        redbookVehicle={props?.redbookVehicle}
      />

      <hr className="mt-16 mx-[10%]" />

      <EngineAndPerformanceSpec redbookVehicle={props?.redbookVehicle} />

      <hr className="mx-[10%]" />

      <TransmissionSpec redbookVehicle={props?.redbookVehicle} />

      <hr className="mx-[10%]" />

      <Dimensions redbookVehicle={props?.redbookVehicle} />
    </>
  );
};

export default SingleCardBody;
