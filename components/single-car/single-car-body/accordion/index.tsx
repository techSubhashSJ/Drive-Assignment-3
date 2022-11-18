import { DownOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";

const Accordion = (props: {
  children: JSX.Element | JSX.Element[];
  title: string;
}) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : "100%");
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  }

  return (
    <div className="flex flex-col mx-[10%] my-2">
      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote text-xl font-bold">
          {props.title}
        </p>
        <DownOutlined alt="Chevron icon" className={`${rotate} inline-block`} />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className={`overflow-auto transition-max-height md:max-h-[${height}]`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
