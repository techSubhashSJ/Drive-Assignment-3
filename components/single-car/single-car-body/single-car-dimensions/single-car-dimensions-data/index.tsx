import { redbookVehicleType } from "../../../../../types";

const getDimensionsData = (redbookVehicle: redbookVehicleType) => {
  const {
    wheelBaseConfig,
    manufacturerWheelBaseConfig,
    wheelBase,
    vehicle_roofline,
    vehicle_height,
    vehicle_length,
    vehicle_width,
    frontRimDesc,
    frontTyreSize,
    rearRimDesc,
    rearTyreSize,
    kerbWeight,
    tareMass,
    grossVehicleMass,
    grossCombinationMass,
  } = redbookVehicle;

  const dimensionsSpecifications = [
    {
      title: "Wheel Base Style",
      value: `${wheelBaseConfig ? wheelBaseConfig : "-"}`,
    },

    {
      title: "Manufacturer Wheel Base",
      value: `${
        manufacturerWheelBaseConfig ? manufacturerWheelBaseConfig : "-"
      }`,
    },

    {
      title: "Wheel Base",
      value: `${wheelBase ? wheelBase : "-"}`,
    },

    {
      title: "Roofline",
      value: `${vehicle_roofline ? vehicle_roofline : "-"}`,
    },

    {
      title: "Height",
      value: `${vehicle_height ? `${vehicle_height}mm` : "-"}`,
    },

    {
      title: "Length",
      value: `${vehicle_length ? `${vehicle_length}mm` : "-"}`,
    },

    {
      title: "Width",
      value: `${vehicle_width ? `${vehicle_width}mm` : "-"}`,
    },

    {
      title: "Front Wheels",
      value: `${frontRimDesc ? frontRimDesc : "-"}`,
    },

    {
      title: "Front Tyres",
      value: `${frontTyreSize ? frontTyreSize : "-"}`,
    },

    {
      title: "Rear Wheels",
      value: `${rearRimDesc ? rearRimDesc : "-"}`,
    },

    {
      title: "Rear Tyres",
      value: `${rearTyreSize ? rearTyreSize : "-"}`,
    },

    {
      title: "Kerb Weight",
      value: `${kerbWeight ? kerbWeight : "-"}`,
    },

    {
      title: "Tare Mass",
      value: `${tareMass ? tareMass : "-"}`,
    },

    {
      title: "Gross Vehicle Mass",
      value: `${grossVehicleMass ? `${grossVehicleMass}kg` : "-"}`,
    },

    {
      title: "Gross Combination Mass",
      value: `${grossCombinationMass ? `${grossCombinationMass}kg` : "-"}`,
    },
  ];

  return dimensionsSpecifications;
};

export default getDimensionsData;
