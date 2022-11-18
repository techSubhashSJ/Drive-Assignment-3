import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from ".";

describe("Accordion Tests", () => {
  //single child
  it("Renders a passed child", async () => {
    render(<Accordion children={<h1>Hello there</h1>} title="Single Child" />);

    const heading = screen.getByRole("heading", {
      name: /Hello there/i,
    });
    expect(heading).toBeInTheDocument();

    const title = screen.getByTestId("para");
    expect(title.textContent).toEqual("Single Child");
  });

  //multiple children
  it("Renders passed children", async () => {
    render(
      <Accordion
        children={[
          <h1 key={1}>Hello there</h1>,
          <p key={2} data-testid="para_cp">
            This is test paragraph
          </p>,
        ]}
        title="Multiple Children"
      />
    );

    const heading = screen.getByRole("heading", {
      name: /Hello there/i,
    });
    expect(heading).toBeInTheDocument();

    const title_cp = screen.getByTestId("para_cp");
    expect(title_cp.textContent).toEqual("This is test paragraph");

    const title = screen.getByTestId("para");
    expect(title.textContent).toEqual("Multiple Children");
  });
});
