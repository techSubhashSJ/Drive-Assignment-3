import type { NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/layout";
import CarCard from "../components/card";
import { DealerListingsType } from "../types";

type HomePagePropsType = { cars: DealerListingsType[] };

const Home: NextPage<HomePagePropsType> = ({ cars }) => {
  return (
    <Layout>
      <div className="mx-[5%] my-[2%] gap-4 grid md:grid-cols-2 lg:grid-cols-3">
        {cars.slice(0, 9).map((car, index) => (
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
      cars: data.DealerListings.results,
    },
  };
}
