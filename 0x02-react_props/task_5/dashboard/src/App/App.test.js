import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import App from "./App";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
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

test("App renders the Notifications component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Notifications).exists()).toBe(true);
});

test("App renders the Header component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).exists()).toBe(true);
});

test("App renders the Login component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Login).exists()).toBe(true);
});

test("App renders the Footer component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).exists()).toBe(true);
});
// Add a test to check that CourseList is not displayed by default (isLoggedIn is false)
test("App does not render the CourseList component by default", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CourseList).exists()).toBe(false);
});

// Describe a new case when isLoggedIn is true
describe("App when isLoggedIn is true", () => {
  // Add a test to verify that the Login component is not included
  test("App does not render the Login component when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).exists()).toBe(false);
  });

  // Add a test to verify that the CourseList component is included
  test("App renders the CourseList component when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
});