import { redbookVehicleType } from "../../../../../types";

const getBasicSpecificationData = (
  kms: number,
  redbookVehicle: redbookVehicleType
) => {
  const {
    driveCode,
    cylinders,
    power,
    vehicle_fuel_type_description,
    gearNum,
    vehicle_warranty_years,
    vehicle_warranty_km,
  } = redbookVehicle;

  const basicSpecifications = [
    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/OdometerIcon",
      altText: "OdometerIcon",
      value: `${kms ? kms : "-"}`,
    },

    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/EngineIcon",
      altText: "EngineIcon",
      value: `${
        driveCode && cylinders ? `${driveCode} ${cylinders} Cyl` : "-"
      }`,
    },

    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/EnginePowerIcon",
      altText: "EnginePowerIcon",
      value: `${power ? `${power} Nm` : "-"}`,
    },

    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/FuelIcon",
      altText: "FuelIcon",
      value: `${
        vehicle_fuel_type_description ? vehicle_fuel_type_description : "-"
      }`,
    },

    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/DrivetrainIcon",
      altText: "DrivetrainIcon",
      value: `${gearNum ? `${gearNum}XD` : "-"}`,
    },

    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/TransmissionIcon",
      altText: "TransmissionIcon",
      value: `NA`,
    },

    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/WarrantyIcon",
      altText: "WarrantyIcon",
      value: `${
        vehicle_warranty_years && vehicle_warranty_km
          ? `${vehicle_warranty_years} Yr, ${vehicle_warranty_km} KMs`
          : "-"
      }`,
    },

    {
      iconSrc:
        "https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/AncapSafetyIcon",
      altText: "AncapSafetyIcon",
      value: `NA`,
    },
  ];
  return basicSpecifications;
};

export default getBasicSpecificationData;
