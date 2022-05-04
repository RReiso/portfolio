import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  test("should render name", () => {
    render(<Home />);
    expect(screen.getByText(/ruta/i)).toBeInTheDocument();
  });

  test("should have link to contact form", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /let's talk/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });

  test("should have link to resume", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /my resume/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "ruta_reisoglu_resume.pdf");
  });
});
