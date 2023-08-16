import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Header from "./Header";
import { AppContext } from "../App/AppContext"; // Import the AppContext from the context module

configure({ adapter: new Adapter() });

// Suppress style injections during testing
StyleSheetTestUtils.suppressStyleInjection();

describe("Header Component", () => {
  it("should render without crashing", () => {
    shallow(<Header />);
  });

  it("should render an img tag with the correct src attribute", () => {
    const wrapper = shallow(<Header />);
    const imgElement = wrapper.find("img");
    expect(imgElement).toHaveLength(1);
    expect(imgElement.prop("src")).toEqual("../assets/logo.jpg"); // Replace 'logo.jpg' with the correct image path
  });

  it("should render an h1 tag with the correct text", () => {
    const wrapper = shallow(<Header />);
    const h1Element = wrapper.find("h1");
    expect(h1Element).toHaveLength(1);
    expect(h1Element.text()).toEqual("School dashboard");
  });

  it("should not render logoutSection with default context", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: "" } }}>
        <Header />
      </AppContext.Provider>
    );
    const logoutSection = wrapper.find("#logoutSection");
    expect(logoutSection.exists()).toBe(false);
  });

  it("should render logoutSection with user context", () => {
    const wrapper = shallow(
      <AppContext.Provider
        value={{ user: { isLoggedIn: true, email: "test@example.com" } }}
      >
        <Header />
      </AppContext.Provider>
    );
    const logoutSection = wrapper.find("#logoutSection");
    expect(logoutSection.exists()).toBe(true);
  });

  it("should call logOut when logout link is clicked", () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider
        value={{
          user: { isLoggedIn: true, email: "test@example.com" },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );
    const logoutLink = wrapper.find("#logoutSection span");
    expect(logoutLink.exists()).toBe(true);
    logoutLink.simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
  });

  it("should display welcome message when user is logged in", () => {
    const wrapper = shallow(
      <AppContext.Provider
        value={{ user: { isLoggedIn: true, email: "test@example.com" } }}
      >
        <Header />
      </AppContext.Provider>
    );
    const welcomeMessage = wrapper.find("#logoutSection");
    expect(welcomeMessage.exists()).toBe(true);
    expect(welcomeMessage.text()).toContain(
      "Welcome test@example.com (logout)"
    );
  });

  it("should not display welcome message when user is not logged in", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: "" } }}>
        <Header />
      </AppContext.Provider>
    );
    const welcomeMessage = wrapper.find("#logoutSection");
    expect(welcomeMessage.exists()).toBe(false);
  });

  it("should call logIn function when the login form is submitted", () => {
    const logInSpy = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider
        value={{ user: { isLoggedIn: false, email: "" }, logIn: logInSpy }}
      >
        <Header />
      </AppContext.Provider>
    );
    const loginForm = wrapper.find(Login);
    expect(loginForm.exists()).toBe(true);

    // Simulate a login form submission
    loginForm.prop("logIn")("test@example.com", "password123");

    // Verify that the logIn function is called with the correct arguments
    expect(logInSpy).toHaveBeenCalledWith("test@example.com", "password123");
  });

  it("should call logOut function when the logout link is clicked", () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider
        value={{
          user: { isLoggedIn: true, email: "test@example.com" },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );
    const logoutLink = wrapper.find("#logoutSection span");
    expect(logoutLink.exists()).toBe(true);

    // Simulate clicking on the logout link
    logoutLink.simulate("click");

    // Verify that the logOut function is called
    expect(logOutSpy).toHaveBeenCalled();
  });
});
it("should mark a notification as read", () => {
  const wrapper = shallow(
    <AppContext.Provider
      value={{
        user: { isLoggedIn: true, email: "test@example.com" },
        markNotificationAsRead: wrapper.instance().markNotificationAsRead,
        listNotifications: [
          { id: 1, type: "default", value: "Notification 1" },
          { id: 2, type: "urgent", value: "Notification 2" },
          { id: 3, type: "default", value: "Notification 3" },
        ],
      }}
    >
      <Header />
    </AppContext.Provider>
  );

  // Call the markNotificationAsRead function with a specific notification ID
  wrapper.instance().markNotificationAsRead(2);

  // Verify that the state has been updated correctly
  const updatedListNotifications = wrapper.state("listNotifications");
  expect(updatedListNotifications).toHaveLength(2); // Expecting one notification to be removed
  expect(updatedListNotifications).toEqual([
    { id: 1, type: "default", value: "Notification 1" },
    { id: 3, type: "default", value: "Notification 3" },
  ]);
});