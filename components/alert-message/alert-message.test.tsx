import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlertMessage from ".";

describe("Alert Messages", () => {
  it("Error should be rendered on the screen if any", async () => {
    render(<AlertMessage error="Internal Server Problem" />);

    expect(screen.getByRole("heading").textContent).toEqual(
      "Internal Server Problem"
    );
  });
});
