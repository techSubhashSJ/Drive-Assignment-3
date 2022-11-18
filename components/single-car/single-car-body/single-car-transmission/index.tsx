import React, { useEffect, useState } from "react";
import { redbookVehicleType, specificationType } from "../../../../types";
import Accordion from "../accordion";
import AccordionEvenRow from "../accordion-even-row";
import AccordionOddRow from "../accordion-odd-row";
import getTransmissionData from "./single-car-transmission-data";

const TransmissionSpec = (props: { redbookVehicle: redbookVehicleType }) => {
  const [transmissionSpecifications, setTransmissionSpecifications] = useState<
    specificationType[]
  >([]);

  useEffect(() => {
    const data = getTransmissionData(props.redbookVehicle);
    setTransmissionSpecifications(data);
  }, []);

  return (
    <Accordion title="Transmission">
      {transmissionSpecifications?.map((transmission, index) =>
        index % 2 === 0 ? (
          <AccordionOddRow
            title={transmission?.title}
            value={transmission?.value}
            key={index}
          />
        ) : (
          <AccordionEvenRow
            title={transmission?.title}
            value={transmission?.value}
            key={index}
          />
        )
      )}
    </Accordion>
  );
};

export default TransmissionSpec;
