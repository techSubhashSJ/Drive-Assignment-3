import { redbookVehicleType } from "../../../../../types";

const getEngineAndPerformnaceData = (redbookVehicle: redbookVehicleType) => {
  const {
    engineDescription,
    inductionDescription,
    cylinders,
    engineConfigurationDescription,
    camDescription,
    fuelDeliveryDescription,
    powerRpmTo,
    power,
    torqueRpmFrom,
    engineLocation,
    acceleration,
  } = redbookVehicle;

  const EngineAndPerformanceSpecifications = [
    {
      title: "Engine Description",
      value: `${engineDescription ? engineDescription : "-"}`,
    },

    {
      title: "Introduction",
      value: `${inductionDescription ? inductionDescription : "-"}`,
    },

    {
      title: "Cylinders",
      value: `${cylinders ? `${cylinders}Cyl.` : "-"}`,
    },

    {
      title: "Engine Configuration",
      value: `${
        engineConfigurationDescription ? engineConfigurationDescription : "-"
      }`,
    },

    {
      title: "Valve Gear",
      value: `${camDescription ? camDescription : "-"}`,
    },

    {
      title: "Fuel Injection",
      value: `${fuelDeliveryDescription ? fuelDeliveryDescription : "-"}`,
    },

    {
      title: "Power",
      value: `${power && powerRpmTo ? `${power} kW ${powerRpmTo} rpm` : "-"}`,
    },

    {
      title: "Torque",
      value: `${torqueRpmFrom ? `${torqueRpmFrom} rpm` : "-"}`,
    },

    {
      title: "Engine Location",
      value: `${engineLocation ? engineLocation : "-"}`,
    },

    {
      title: "Acceleration (0 - 100 km/h)",
      value: `${acceleration ? acceleration : "-"}`,
    },
  ];

  return EngineAndPerformanceSpecifications;
};

export default getEngineAndPerformnaceData;
