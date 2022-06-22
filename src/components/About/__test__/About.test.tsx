import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About", () => {
  test("should show 'About'", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });

  test("should show 'Technologies I work with'", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /technologies I work with/i })
    ).toBeInTheDocument();
  });

  test("should render 17 icons", () => {
    render(<About />);
    expect(screen.getAllByRole("img").length).toBe(17);
  });
});
