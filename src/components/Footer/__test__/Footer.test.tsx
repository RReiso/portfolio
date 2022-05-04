import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("should render link to navbar", () => {
    render(<Footer />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "#home");
  });

  test("should render name", () => {
    render(<Footer />);
    expect(screen.getByText(/ruta reisoglu/i)).toBeInTheDocument();
  });
});
