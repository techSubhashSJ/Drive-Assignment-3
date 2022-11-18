import React, { useEffect, useState } from "react";
import { redbookVehicleType, specificationType } from "../../../../types";
import Accordion from "../accordion";
import AccordionEvenRow from "../accordion-even-row";
import AccordionOddRow from "../accordion-odd-row";
import getEngineAndPerformnaceData from "./single-car-engine-and-performance-data";

const EngineAndPerformanceSpec = (props: {
  redbookVehicle: redbookVehicleType;
}) => {
  const [
    engineAndPerformanceSpecifications,
    setEngineAndPerformanceSpecifications,
  ] = useState<specificationType[]>([]);

  useEffect(() => {
    const data = getEngineAndPerformnaceData(props.redbookVehicle);
    setEngineAndPerformanceSpecifications(data);
  }, []);

  return (
    <Accordion title="Engine & Performance">
      {engineAndPerformanceSpecifications?.map(
        (engineAndPerformanceSpec, index) =>
          index % 2 === 0 ? (
            <AccordionOddRow
              title={engineAndPerformanceSpec?.title}
              value={engineAndPerformanceSpec?.value}
              key={index}
            />
          ) : (
            <AccordionEvenRow
              title={engineAndPerformanceSpec?.title}
              value={engineAndPerformanceSpec?.value}
              key={index}
            />
          )
      )}
    </Accordion>
  );
};

export default EngineAndPerformanceSpec;
