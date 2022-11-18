import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccordionEvenRow from ".";

describe("AccordionEvenRow tests", () => {
  it("Renders title", async () => {
    render(<AccordionEvenRow title="Sample title" value="sample value" />);

    expect(screen.getByTestId("para").textContent).toEqual(
      "Sample title"
    );
  });
  
  it("Renders value", async () => {
    render(<AccordionEvenRow title="Sample title" value="sample value" />);

    expect(screen.getByTestId("div").textContent).toEqual(
      "sample value"
    );
  });
});
