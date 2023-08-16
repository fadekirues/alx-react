import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import CourseListRow from "./CourseListRow";
// import { StyleSheetTestUtils } from "aphrodite/no-important";
// Suppress style injections during testing
// StyleSheetTestUtils.suppressStyleInjection();

// Import the necessary functions from jsdom for creating a virtual DOM
import { JSDOM } from "jsdom";
configure({ adapter: new Adapter() });

// Set up jsdom to create a virtual DOM
const { window } = new JSDOM("<!doctype html><html><body></body></html>");
global.window = window;
global.document = window.document;

describe("CourseListRow Component", () => {
  it("should render a header row with correct inline styles", () => {
    const props = {
      isHeader: true,
      textFirstCell: "Available courses",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a regular row with correct inline styles", () => {
    const props = {
      isHeader: false,
      textFirstCell: "ES6",
      textSecondCell: "60",
    };
    const wrapper = shallow(<CourseListRow {...props} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
})
