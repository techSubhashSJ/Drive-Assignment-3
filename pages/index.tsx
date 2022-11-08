import type { NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../src/components/layout";

type DealerListingsType = {
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
  __typename: "DealerListing";
}[];

const Home: NextPage<{ data: [DealerListingsType] }> = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline" role="heading">
        Welcome to next.js!
      </h1>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        DealerListings {
          results {
            id
            colour
            vehicleKey: vehicle_key
            listType: list_type
            year
            price: price_excluding_government_charges
            kms: odometer
            variant
            fuelType: fuel_type
            transmission
            engineSize: engine_size
            seat_capacity
            image: main_image
            state: location_state
            makeName: make
            modelName: model
            region: Region {
              regionName: region_name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.DealerListings.results,
    },
  };
}
