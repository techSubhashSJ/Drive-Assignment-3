import type { NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/layout";
import CarCard from "../components/card";

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
  __typename: string;
};

const Home: NextPage<{ data: DealerListingsType[] }> = ({ data }) => {
  return (
    <Layout>
      <div className="mx-[5%] my-[2%] gap-4 grid md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 9).map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
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
