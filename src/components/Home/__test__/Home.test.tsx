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
    const link = screen.getByRole("link", { name: /let's talk/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });

  test("should have link to resume", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /my resume/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://drive.google.com/file/d/1K_-VEx948gHzJPKUS7yRCXoUm6vi0BFF/view?usp=sharing"
    );
  });
});
