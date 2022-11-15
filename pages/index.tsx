import type { GetStaticProps, NextPage } from "next";
import { useLazyQuery } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/layout";
import AlertMessage from "../components/alert-message";
import CarCard from "../components/card";
import { DealerListingsType, pageInfoType } from "../types";
import Button from "../components/button";
import { useState } from "react";
import { GET_CARS, LOAD_MORE_CARS } from "../graphql-queries";
import Spinner from "../components/spinner";

type HomePagePropsType = {
  cars: DealerListingsType[];
  pageInfo: pageInfoType;
};

const Home: NextPage<HomePagePropsType> = ({ cars, pageInfo }) => {
  const [carsData, setCarsData] = useState<DealerListingsType[]>(cars);
  const [pageInformation, setPageInformation] = useState(pageInfo);
  const [error, setError] = useState<string | null>(null);

  const [fetchPosts, { loading }] = useLazyQuery(LOAD_MORE_CARS, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      /**
       * Call setCarsData to concat the new set of cars to existing one and update pageInfo
       * that contains the information about whether we have the next page.
       */
      setCarsData((cars) => cars.concat(data.DealerListings.results));
      setPageInformation(data.DealerListings.pageInfo);
    },
    onError: (error) => {
      setError("Something went wrong");
    },
  });

  const handleSubmit = () => {
    fetchPosts({
      variables: {
        page: pageInformation.currentPage + 1,
      },
    });
  };

  return (
    <Layout>
      <> {error && <AlertMessage error={error} />} </>

      <div className="xl:flex xl:justify-center">
        <div className="mx-[5%] my-[2%] gap-4 grid md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl ">
          {carsData.map((car, index) => (
            <CarCard car={car} key={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        {loading ? (
          <Spinner />
        ) : (
          pageInformation.hasNextPage && (
            <Button
              label="Load More"
              classes="px-4 py-2 my-4 rounded-lg bg-primary text-white hover:bg-primary_hover"
              onclick={handleSubmit}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await client.query({
    query: GET_CARS,
  });

  return {
    props: {
      cars: data.DealerListings.results,
      pageInfo: data.DealerListings.pageInfo,
    },
  };
};
