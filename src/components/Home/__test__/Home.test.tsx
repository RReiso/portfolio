import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  test("should render name", () => {
    render(<Home />);
    expect(screen.getByText(/ruta reisoglu/i)).toBeInTheDocument();
  });

  test("should render image", () => {
    render(<Home />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("should have link to contact form", () => {
    render(<Home />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });
});
