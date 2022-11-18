export type DealerListingsType = {
  colour: string;
  engineSize: number;
  fuelType: string;
  id: number;
  image: string;
  kms: number;
  listType: string;
  makeName: string;
  modelName: string;
  price: number;
  region: { regionName: string; __typename: string };
  seat_capacity: number;
  state: string;
  transmission: string;
  variant: string;
  vehicleKey: string;
  year: number;
  __typename: string;
};

export type pageInfoType = {
  __typename: string;
  hasNextPage: boolean;
  currentPage: number;
  pageCount: number;
  itemCount: number;
};

export type pathsDatatype = {
  params: { id: string };
};

export type carType = {
  DealerListingImages: [];
  RedbookVehicle: redbookVehicleType;
  id: BigInt;
  kms: number;
};

export type redbookVehicleType = {
  RedbookFamily: { model: string };
  RedbookMake: { make: string };
  acceleration: number;
  altEngTorque: number | null;
  badgeCode: string;
  badgeDescription: string;
  badgeSecondaryDescription: string | null;
  bodyConfigDescription: string | null;
  bodyStyleDescription: string;
  buildCountryOriginDescription: string;
  camDescription: string;
  cylinders: number;
  driveCode: string;
  engineConfigurationDescription: string;
  engineDescription: string;
  engineLocation: string;
  familyCode: string;
  frontRimDesc: string;
  frontTyreSize: string;
  fuelDeliveryDescription: string;
  gearLocationDescription: string;
  gearNum: number;
  gearTypeDescription: string;
  grossCombinationMass: string | null;
  grossVehicleMass: number;
  inductionDescription: string;
  kerbWeight: number | null;
  limitedEdition: string;
  makeCode: string;
  makeName: string;
  manufacturerBodyConfig: string | null;
  manufacturerBodyStyle: string;
  manufacturerWheelBaseConfig: string | null;
  modelCode: string;
  modelName: string;
  power: number;
  powerRpmFrom: number;
  powerRpmTo: number;
  rearRimDesc: string;
  rearTyreSize: string;
  seriesModelYear: number | null;
  seriesPublic: string;
  tareMass: number;
  torqueRpmFrom: number;
  vehicle_height: number;
  vehicle_length: number;
  vehicle_roofline: number | null;
  vehicle_width: number;
  wheelBase: number;
  wheelBaseConfig: number | null;
  yearGroup: number;
  vehicle_fuel_type_description: string;
  vehicle_warranty_years: number;
  vehicle_warranty_km: number;
};

export type specificationType = {
  title: string;
  value: string;
};
