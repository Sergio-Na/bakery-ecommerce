import React from "react";
import { HeroBanner } from "../components";
import { client } from "../lib/client";
import { Navbar } from "../components";
import { Product } from "../components";
import CakeScene from "@/components/CakeScene";

const index = ({ products, bannerData }) => {
  products.map((product) => console.log(product));

  return (
    <div className="h-screen">
      <Navbar />
      <CakeScene />

      {/* <h3 className='text-5xl text-center text-pink-500'>
      Our Delicious Products
    </h3>     */}
      {/* <div className='flex justify-center space-x-10'>
      {products.map((product) => <Product key={product._id} product={product}/>)}
    </div> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default index;
