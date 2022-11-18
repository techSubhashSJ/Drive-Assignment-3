import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarCardImage from ".";

describe("CarCardImage Tests", () => {
  it("Renders a image in the card with passed source", async () => {
    render(<CarCardImage src="/sample/img" id={1} />);

    const image = screen.getByTestId("image");
    image.getAttribute("src") === "/sample/img";
  });
});
