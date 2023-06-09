import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col h-2/6 border">
      <Link href={`/product/${product.slug.current}`}>
        <div>
          <Image
            src={urlFor(product.image && product.image[0])}
            alt=""
            width={250}
            height={250}
            className="border rounded-lg"
          />
        </div>
      </Link>
    </div>
  );
};

export default Product;
