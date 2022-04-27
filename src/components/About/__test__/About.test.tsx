import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About", () => {
  test("should show 'About'", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });

  test("should show 'My skills'", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /my skills/i })
    ).toBeInTheDocument();
  });

  test("should render 16 icons", () => {
    render(<About />);
    expect(screen.getAllByRole("img").length).toBe(16);
  });
});
