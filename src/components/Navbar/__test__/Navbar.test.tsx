import { render, screen } from "@testing-library/react";
import Navbar from "../navigation/Navbar";

describe("Navbar", () => {
  test("should render name", () => {
    render(<Navbar />);
    expect(screen.getByText(/rreiso/i)).toBeInTheDocument();
  });

  test("should render six list items", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("listitem").length).toBe(6);
  });
});
