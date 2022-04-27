import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

describe("Contact", () => {
  test("should render name", () => {
    render(<Contact />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test("should render form", () => {
    render(<Contact />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  test("should render three text inpur fields", () => {
    render(<Contact />);
    expect(screen.getAllByRole("textbox").length).toBe(3);
  });

  test("should render submit button", () => {
    render(<Contact />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should show a note after a message is sent", async () => {
    render(<Contact />);
    const submit = screen.getByRole("button");
    userEvent.click(submit);
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
  });
});
