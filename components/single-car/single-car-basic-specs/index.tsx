import React from "react";
import { redbookVehicleType } from "../../../types";

const BasicSpecs = (props: {
  id: BigInt;
  kms: number;
  redbookVehicle: redbookVehicleType;
}) => {
  return (
    <div className="mx-[10%] my-4 gap-8 grid xsm:grid-cols-2 md:grid-cols-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/OdometerIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">{props.kms} km</p>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/EngineIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">
          {props.redbookVehicle.driveCode} {props.redbookVehicle.cylinders} Cyl
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/EnginePowerIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">{props.redbookVehicle.power} Nm</p>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/FuelIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">NA</p>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/DrivetrainIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">{props.redbookVehicle.gearNum}XD</p>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/TransmissionIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">NA</p>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/WarrantyIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">NA</p>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/AncapSafetyIcon"
          alt=""
          className="w-8"
        />
        <p className="font-semibold">NA</p>
      </div>
    </div>
  );
};

export default BasicSpecs;
