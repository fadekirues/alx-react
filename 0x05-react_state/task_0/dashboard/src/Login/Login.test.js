import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Login from "./Login";

// Import react-test-renderer for capturing rendered output
import {create} from "react-test-renderer";

// Configure enzyme with the React adapter
configure({ adapter: new Adapter() });

// Set up jsdom to create a virtual DOM
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("<!doctype html><html><body></body></html>");
global.window = window;
global.document = window.document;

describe("Login Component", () => {
  it("should render without crashing", () => {
    shallow(<Login />);
  });

  it("should render 2 input tags", () => {
    const wrapper = shallow(<Login />);
    const inputElements = wrapper.find("input");
    expect(inputElements).toHaveLength(2);
  });

  it("should render 2 label tags", () => {
    const wrapper = shallow(<Login />);
    const labelElements = wrapper.find("label");
    expect(labelElements).toHaveLength(2);
  });

  it("should match the snapshot", () => {
    const tree = create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
