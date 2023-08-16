// Import necessary dependencies and configurations
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
// Import the necessary functions from jsdom for creating a virtual DOM
import { JSDOM } from "jsdom";
configure({ adapter: new Adapter() });

// Set up jsdom to create a virtual DOM
const { window } = new JSDOM("<!doctype html><html><body></body></html>");
global.window = window;
global.document = window.document;
// Import the component being tested
import App from "./App";

// Import other components used in the App component
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";

// The main test suite
describe("App Component", () => {
  // Test case: App renders without crashing
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // // Test cases for various elements within the App component
  // test("renders a header with the class App-header", () => {
  //  const wrapper = shallow(<App />);
  //  console.log(wrapper.debug()); // Print the component's debug output
  //  console.log(wrapper.find("header.App-header").debug()); // Print the specific element's debug output
  //  expect(wrapper.find("header.App-header").exists()).toBe(true);
  // });

  // test("renders a div with the class App-body", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("div.App-body").exists()).toBe(true);
  // });

  // test("renders a div with the class App-footer", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("div.App-footer").exists()).toBe(true);
  // });

  // Test cases to check if specific components are rendered
  test("renders the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  test("renders the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  test("renders the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  test("renders the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  // Test case: App does not render the CourseList component by default (isLoggedIn is false)
  test("does not render the CourseList component by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  // Describe a new case when isLoggedIn is true
  describe("when isLoggedIn is true", () => {
    // Test case: App does not render the Login component when isLoggedIn is true
    test("does not render the Login component when isLoggedIn is true", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    // Test case: App renders the CourseList component when isLoggedIn is true
    test("renders the CourseList component when isLoggedIn is true", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });

  // Test case: Default state for displayDrawer is false
  test("default state for displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    const appInstance = wrapper.instance();
    expect(appInstance.state.displayDrawer).toBe(false);
  });

  // Test case: Calling handleDisplayDrawer updates state to true
  test("calling handleDisplayDrawer updates state to true", () => {
    const wrapper = shallow(<App />);
    const appInstance = wrapper.instance();
    appInstance.handleDisplayDrawer();
    expect(appInstance.state.displayDrawer).toBe(true);
  });

  // Test case: Calling handleHideDrawer updates state to false
  test("calling handleHideDrawer updates state to false", () => {
    const wrapper = shallow(<App />);
    const appInstance = wrapper.instance();
    appInstance.handleDisplayDrawer(); // First, set displayDrawer to true
    appInstance.handleHideDrawer();
    expect(appInstance.state.displayDrawer).toBe(false);
  });

  // Additional test cases related to App Class
  // describe("when logOut function is called", () => {
  //   it("should display alert", () => {
  //     const mockLogOut = jest.fn();
  //     const mockAlert = jest.spyOn(window, "alert");

  //     const wrapper = shallow(<App logOut={mockLogOut} />);
  //     // Assuming that the handleKeyDown function is triggered when the user presses Ctrl+H
  //     wrapper.instance().handleKeyDown({ ctrlKey: true, key: "h" });

  //     expect(mockAlert).toHaveBeenCalledWith("Logging you out");
  //   });

  //   afterEach(() => {
  //     jest.restoreAllMocks();
  //   });
  // });
  describe("when logOut function is called", () => {
    it("should display alert", () => {
      // Create a mock function for alert
      const mockAlert = jest.fn();
      // Temporarily replace the real alert function with the mock function
      global.alert = mockAlert;

      const mockLogOut = jest.fn();

      const wrapper = shallow(<App logOut={mockLogOut} />);
      // Assuming that the handleKeyDown function is triggered when the user presses Ctrl+H
      wrapper.instance().handleKeyDown({ ctrlKey: true, key: "h" });

      // Check if the mockAlert function is called with the expected message
      expect(mockAlert).toHaveBeenCalledWith("Logging you out");

      // Restore the real alert function
      global.alert = window.alert;
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });
});
