import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleCarMedia from ".";
const dealerListingImages = [
  { image_location: "/sample/images/1" },
  { image_location: "/sample/images/2" },
  { image_location: "/sample/images/3" },
  { image_location: "/sample/images/4" },
  { image_location: "/sample/images/5" },
];

describe("SingleCarMedia Tests", () => {
  it("Renders all images from dealerListingImages", async () => {
    render(<SingleCarMedia dealerListingImages={dealerListingImages} />);

    const image = screen.getByTestId("image");
    image.getAttribute("src") === "/sample/imgages/1";
    image.getAttribute("src") === "/sample/imgages/2";
    image.getAttribute("src") === "/sample/imgages/3";
    image.getAttribute("src") === "/sample/imgages/4";
    image.getAttribute("src") === "/sample/imgages/5";
  });
});
