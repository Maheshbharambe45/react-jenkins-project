import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("counter increments when button is clicked", () => {
  render(<Counter />);

  const button = screen.getByTestId("increment-btn");
  const countValue = screen.getByTestId("count-value");

  fireEvent.click(button);

  expect(countValue).toHaveTextContent("1");
});
