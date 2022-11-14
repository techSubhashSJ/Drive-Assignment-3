import Link from "next/link";
import React from "react";

const CarCardBody = () => {
  return (
    <>
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
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
      </header>

      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <p className="text-zinc-400" data-testid="paragraph">
          Published date
        </p>
      </footer>
    </>
  );
};

export default CarCardBody;
