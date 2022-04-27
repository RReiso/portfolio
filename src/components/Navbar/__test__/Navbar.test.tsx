import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  test("should render name", () => {
    render(<Navbar />);
    expect(screen.getByText(/rreiso/i)).toBeInTheDocument();
  });

  test("should render six list items", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("listitem").length).toBe(6);
  });

  test("LinkedIn icon should link to LinkedIn profile", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", { name: "LinkedIn profile" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ruta-reisoglu/"
    );
  });

  test("GitHub icon should link to GitHub profile", () => {
    render(<Navbar />);
    const link = screen.getByRole("link", { name: "GitHub profile" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/RReiso");
  });
});
