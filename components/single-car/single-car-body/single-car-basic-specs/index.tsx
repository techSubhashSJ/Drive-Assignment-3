import React, { useState } from "react";
import { redbookVehicleType } from "../../../../types";
import getBasicSpecificationData from "./single-car-basic-specs-data";

const BasicSpecs = (props: {
  id: BigInt;
  kms: number;
  redbookVehicle: redbookVehicleType;
}) => {
  const { kms, redbookVehicle } = props;

  const [basicSpecifications, setBasicSpecifications] = useState<
    { iconSrc: string; altText: string; value: string }[]
  >([]);

  useState(() => {
    const data = getBasicSpecificationData(kms, redbookVehicle);
    setBasicSpecifications(data);
  });

  return (
    <div className="mx-[10%] my-4 gap-8 grid grid-cols-2 md:grid-cols-4">
      {basicSpecifications?.map((spec, index) => (
        <div className="flex items-center space-x-4" key={index}>
          <img src={spec.iconSrc} alt={spec.altText} className="w-8" />
          <p>{spec.value}</p>
        </div>
      ))}
    </div>
  );
};

export default BasicSpecs;
