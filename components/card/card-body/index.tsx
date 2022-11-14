import Link from "next/link";
import React from "react";
import { DealerListingsType } from "../../../types";

const CarCardBody = (props: { car: DealerListingsType }) => {
  return (
    <div className="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 className="text-lg">
        <Link href={`/`}>
          <a
            className="no-underline hover:underline text-black font-mono"
            data-testid="news-title"
          >
            Trial hdhawfkjh...
          </a>
        </Link>
      </h1>
    </div>
  );
};

export default CarCardBody;
