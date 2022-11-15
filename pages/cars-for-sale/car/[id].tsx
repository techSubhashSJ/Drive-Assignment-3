import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Layout from "../../../components/layout";
import client from "../../../apollo-client";
import { GET_CARS_IDS, GET_CAR_BY_ID } from "../../../graphql-queries";
import { carType, pathsDatatype } from "../../../types/index";

type carPropsType = { car: carType };

const Car: NextPage<carPropsType> = ({ car }) => {
  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  );
};

export default Car;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, error } = await client.query({
    query: GET_CAR_BY_ID,
    variables: { carId: params?.id },
  });

  return {
    props: {
      car: data.DealerListing,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_CARS_IDS,
  });

  const pathsData: pathsDatatype[] = [];

  data?.DealerListings?.results?.map((car: { id: number }) => {
    pathsData.push({ params: { id: car?.id?.toString() } });
  });

  return {
    paths: pathsData,
    fallback: "blocking", 
  };
};
