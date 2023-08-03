import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import App from "./App";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Header from "../Header/Header";

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
