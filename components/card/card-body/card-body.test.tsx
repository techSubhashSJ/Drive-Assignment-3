import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarCardBody from ".";

const carData = {
  colour: "black",
  engineSize: 4,
  fuelType: "petrol",
  id: 101,
  image: "/car/image",
  kms: 10000,
  listType: "sample list",
  makeName: "sample make name",
  modelName: "sample model name",
  price: 8000000,
  region: { regionName: "sample region", __typename: "sample typename" },
  seat_capacity: 6,
  state: "sample state",
  transmission: "sample transmission",
  variant: "sample variant",
  vehicleKey: "sample vehicle key",
  year: 2022,
  __typename: "carData",
};

describe("CarCardImage Tests", () => {
  it("Renders year, make name, and model name from car Data", async () => {
    render(<CarCardBody car={carData} />);

    const heading = screen.getByRole("heading", {
      name: /2022 sample make name sample model name/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("Renders price of a car", async () => {
    render(<CarCardBody car={carData} />);

    const heading = screen.getByRole("heading", {
      name: "$ 8000000",
    });
    expect(heading).toBeInTheDocument();
  });

  it("Each unordered list should render 2 specification items", () => {
    render(<CarCardBody car={carData} />);

    const list = screen.getAllByTestId("list");
    {
      const { getAllByRole } = within(list[0]);
      const items = getAllByRole("listitem");
      expect(items[0].textContent).toEqual("10000 km");
      expect(items[1].textContent).toEqual("black");
    }

    {
      const { getAllByRole } = within(list[1]);
      const items = getAllByRole("listitem");
      expect(items[0].textContent).toEqual("petrol");
      expect(items[1].textContent).toEqual("6 sample transmission");
    }
  });
});
