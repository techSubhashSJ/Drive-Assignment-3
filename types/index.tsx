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
