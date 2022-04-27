import { render, screen } from "@testing-library/react";
import Projects from "../Projects";

describe("Project", () => {
  test("should show 'Project'", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: "Projects" })
    ).toBeInTheDocument();
  });

  test("should show at least one project card", () => {
    render(<Projects />);
    expect(screen.getAllByRole("article").length).toBeGreaterThanOrEqual(1);
  });
});
