import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Categories from "../Categories";

describe("Categories", () => {
  const handleCategory = jest.fn();
  test("should render 8 buttons", () => {
    render(<Categories handleCategory={handleCategory} />);
    expect(screen.getAllByRole("button").length).toBe(8);
  });

  test("should call 'handleCategory` on button click", () => {
    render(<Categories handleCategory={handleCategory} />);
    const button = screen.getAllByRole("button")[1];
    userEvent.click(button);
    expect(handleCategory).toHaveBeenCalledTimes(1);
  });
});
