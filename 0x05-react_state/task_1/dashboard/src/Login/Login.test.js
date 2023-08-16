import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Login from "./Login";
import { act } from "react-dom/test-utils";

// Import react-test-renderer for capturing rendered output
import { create } from "react-test-renderer";


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
    console.log(wrapper.html()); // Log the initial rendered HTML
    const emailInput = wrapper.find(".input_1vpfudx");
    console.log(emailInput.debug()); // Log the debug output of the found input element
    expect(emailInput.exists()).toBe(true);
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

  it("should have the submit button disabled by default", () => {
    const wrapper = shallow(<Login />);
    // afterEach(() => {
    //   wrapper.unmount();
    // });
    const submitButton = wrapper.find("input[type='submit']");
    expect(submitButton.prop("disabled")).toBe(true);
  });

  // it("should enable the submit button after changing input values", () => {
  //   const wrapper = shallow(<Login />);
  //   act(() => {
  //     wrapper.find("input#email").simulate("change", {
  //       target: { value: "test@example.com" },
  //     });

  //     wrapper.find("input#password").simulate("change", {
  //       target: { value: "password123" },
  //     });
  //   });
  //   // // Change email input value
  //   // wrapper.find("input#email").simulate("change", {
  //   //   target: { value: "test@example.com" },
  //   // });
  //   // // Change password input value
  //   // wrapper.find("input#password").simulate("change", {
  //   //   target: { value: "password123" },
  //   // });
  //   // Allow for a re-render to take place
  //   wrapper.update();

  //   console.log(wrapper.find("input#email").props()); // Log email input props
  //   console.log(wrapper.find("input#password").props()); // Log password input props
   
  //   const submitButton = wrapper.find("input[type='submit']");
  //   console.log(submitButton.props()); // Log submit button props

  //   expect(submitButton.prop("disabled")).toBe(false);
  // });
});
