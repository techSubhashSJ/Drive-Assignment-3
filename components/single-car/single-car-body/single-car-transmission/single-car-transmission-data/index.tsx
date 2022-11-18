import { redbookVehicleType } from "../../../../../types";

const getTransmissionData = (redbookVehicle: redbookVehicleType) => {
  const { driveCode, gearNum, gearLocationDescription, gearTypeDescription } =
    redbookVehicle;

  const transmissionSpecifications = [
    {
      title: "Drive Type",
      value: `${driveCode ? driveCode : "-"}`,
    },

    {
      title: "Number of Gears",
      value: `${gearNum ? gearNum : "-"}`,
    },

    {
      title: "Transmission Type",
      value: `${gearTypeDescription ? gearTypeDescription : "-"}`,
    },

    {
      title: "Gear Location",
      value: `${gearLocationDescription ? gearLocationDescription : "-"}`,
    },
  ];

  return transmissionSpecifications;
};

export default getTransmissionData;
