import React from "react";

const AccordionEvenRow = (props: { title: string; value: string }) => {
  return (
    <div className="flex flex-col my-2 space-y-2 md:space-x-4 md:flex-row md:space-y-0 md:w-2/3">
      <div className="py-4 px-8 w-full md:w-[40%]">
        <p className="font-semibold">{props?.title}</p>
        <div className="flex w-full mt-2  md:hidden">{props?.value}</div>
      </div>
      <div className="hidden py-4 px-8 w-full md:w-[60%] md:flex">
        {props?.value}
      </div>
    </div>
  );
};

export default AccordionEvenRow;
