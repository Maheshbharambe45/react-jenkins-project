import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main CI/CD title", () => {
  render(<App />);
  expect(
    screen.getByText(/React \+ Jenkins \+ Docker \+ Kubernetes/i)
  ).toBeInTheDocument();
});
