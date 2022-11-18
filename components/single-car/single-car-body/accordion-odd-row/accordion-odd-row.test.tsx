import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccordionOddRow from ".";

describe("AccordionEvenRow tests", () => {
  it("Renders title", async () => {
    render(<AccordionOddRow title="Sample title" value="sample value" />);

    expect(screen.getByTestId("para").textContent).toEqual("Sample title");
  });

  it("Renders value", async () => {
    render(<AccordionOddRow title="Sample title" value="sample value" />);

    expect(screen.getByTestId("div").textContent).toEqual("sample value");
  });
});
