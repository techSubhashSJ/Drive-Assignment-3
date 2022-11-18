import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from ".";

describe("Layout Tests", () => {
  //single child
  it("Renders a passed child", async () => {
    render(<Layout children={<h1>Hello there</h1>} />);

    const heading = screen.getByRole("heading", {
      name: /Hello there/i,
    });
    expect(heading).toBeInTheDocument();
  });

  //multiple children
  it("Renders passed children", async () => {
    render(
      <Layout
        children={[
          <h1 key={1}>Hello there</h1>,
          <p key={2} data-testid="para">This is test paragraph</p>,
        ]}
      />
    );

    const heading = screen.getByRole("heading", {
      name: /Hello there/i,
    });
    expect(heading).toBeInTheDocument();

    const title = screen.getByTestId("para");
    expect(title.textContent).toEqual("This is test paragraph");
  });
});
