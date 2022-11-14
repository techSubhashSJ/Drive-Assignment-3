import React from "react";
import Button from "../../button";

const CarCardFooter = () => {
  return (
    <div className="flex flex-col justify-between p-4 lg:flex-row lg:space-x-2">
      <Button
        label="Enquire Now"
        onclick={() => {}}
        classes="px-8 py-2 mt-2 tracking-wide rounded-lg font-bold text-white bg-primary hover:bg-primary_hover"
      />

      <Button
        label="View Details"
        onclick={() => {}}
        classes="px-8 py-2 mt-2 tracking-wide rounded-lg  font-bold text-primary opacity-80 border border-primary hover:bg-primary_hover hover:text-white"
      />
    </div>
  );
};

export default CarCardFooter;
