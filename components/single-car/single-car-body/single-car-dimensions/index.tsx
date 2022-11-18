import React, { useEffect, useState } from "react";
import { redbookVehicleType, specificationType } from "../../../../types";
import Accordion from "../accordion";
import AccordionEvenRow from "../accordion-even-row";
import AccordionOddRow from "../accordion-odd-row";
import getDimensionsData from "./single-car-dimensions-data";

const Dimensions = (props: { redbookVehicle: redbookVehicleType }) => {
  const [dimensionsSpecifications, setimensionsSpecifications] = useState<
    specificationType[]
  >([]);

  useEffect(() => {
    const data = getDimensionsData(props.redbookVehicle);
    setimensionsSpecifications(data);
  }, []);

  return (
    <Accordion title="Dimensions">
      {dimensionsSpecifications?.map((dimenson, index) =>
        index % 2 === 0 ? (
          <AccordionOddRow
            title={dimenson?.title}
            value={dimenson?.value}
            key={index}
          />
        ) : (
          <AccordionEvenRow
            title={dimenson?.title}
            value={dimenson?.value}
            key={index}
          />
        )
      )}
    </Accordion>
  );
};

export default Dimensions;
