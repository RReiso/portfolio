import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  test("should render name", () => {
    render(<Navbar />);
    expect(screen.getByText(/rr/i)).toBeInTheDocument();
  });

  test("should render ten list items", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("listitem").length).toBe(10);
  });
});
