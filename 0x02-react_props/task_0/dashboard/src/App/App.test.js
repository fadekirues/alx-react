import React from "react";
// import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
// test("App renders without crashing", () => {
//   const { container } = render(<App />);
//   expect(container).toBeInTheDocument();
// });

// test("App renders a div with the class App-header", () => {
//   const { container } = render(<App />);
//   const appHeader = container.querySelector(".App-header");
//   expect(appHeader).toBeInTheDocument();
// });

// test("App renders a div with the class App-body", () => {
//   const { container } = render(<App />);
//   const appBody = container.querySelector(".App-body");
//   expect(appBody).toBeInTheDocument();
// });

// test("App renders a div with the class App-footer", () => {
//   const { container } = render(<App />);
//   const appFooter = container.querySelector(".App-footer");
//   expect(appFooter).toBeInTheDocument();
// });
test("App renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

test("App renders a header with the class App-header", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("header.App-header").exists()).toBe(true);
});
test("App renders a div with the class App-body", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("div.App-body").exists()).toBe(true);
});

test("App renders a div with the class App-footer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("div.App-footer").exists()).toBe(true);
});