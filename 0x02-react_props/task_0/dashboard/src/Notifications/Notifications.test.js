import React from "react";
import { render } from "@testing-library/react";
import Notifications from "./Notifications";

test("Notifications renders without crashing", () => {
  const { container } = render(<Notifications />);
  expect(container).toBeInTheDocument();
});

test("Notifications renders three list items", () => {
  const { container } = render(<Notifications />);
  const listItems = container.querySelectorAll("li");
  expect(listItems).toHaveLength(3);
});

test('Notifications renders the text "Here is the list of notifications"', () => {
  const { getByText } = render(<Notifications />);
  const textElement = getByText("Here is the list of notifications");
  expect(textElement).toBeInTheDocument();
});
