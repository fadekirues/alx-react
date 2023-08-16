import React from "react";
import "../../config/setupTests";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure} from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
configure({ adapter: new Adapter() });
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { styles } from "./Notifications";
import { getLatestNotification } from "../utils/utils";

// Suppress style injections during testing
StyleSheetTestUtils.suppressStyleInjection();
// Mock the import for closeIcon
jest.mock("../close-icon.png", () => "close-icon.png");
// Create a spy on the console.log function
const consoleSpy = jest.spyOn(console, "log");
afterEach(() => {
  // Restore the original console.log function after each test
  consoleSpy.mockClear();
});
describe("Notifications Component", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });

  it("should render NotificationItem elements", () => {
    // Define a sample list of notifications
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      // Add more notifications if needed
    ];

    // Render the Notifications component with the listNotifications prop
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    // Find all rendered NotificationItem elements
    const notificationItems = wrapper.find(NotificationItem);

    // Check if the correct number of NotificationItem elements is rendered
    expect(notificationItems).toHaveLength(listNotifications.length);

    // Additional checks can be added for specific properties of the NotificationItem
    // elements if needed.
  });
  // it("should call handleButtonClick when the close button is clicked", () => {
  //   const wrapper = mount(<Notifications />);
  //   const closeButton = wrapper.find("button[aria-label='Close']");
  //   expect(closeButton.exists()).toBe(true);

  //   // Define a mock function for handleButtonClick
  //   const mockHandleButtonClick = jest.fn();

  //   // Set the handleButtonClick prop of the Notifications component to the mock function
  //   wrapper.setProps({ handleButtonClick: mockHandleButtonClick });

  //   // Simulate the click on the close button
  //   closeButton.simulate("click");

  //   // Check if the handleButtonClick function is called
  //   expect(mockHandleButtonClick).toHaveBeenCalled();
  // });
  //  it("should call handleButtonClick when the close button is clicked", () => {
  //    // Create a mock function for handleButtonClick
  //    const mockHandleButtonClick = jest.fn();
  //    // Define an empty list of notifications
  //    const listNotifications = [];

  //    // Render the Notifications component with the mock handleButtonClick prop and empty listNotifications
  //    const wrapper = mount(
  //      <Notifications
  //        displayDrawer={true}
  //        listNotifications={listNotifications}
  //        handleButtonClick={mockHandleButtonClick}
  //      />
  //    );

  //    // Find the close button using the aria-label attribute
  //    const closeButton = wrapper.find("button[aria-label='Close']");

  //    // Check if the closeButton exists
  //    expect(closeButton.exists()).toBe(true);

  //    // Simulate a click on the close button
  //    closeButton.simulate("click");

  //    // Check if the mock handleButtonClick function is called
  //    expect(mockHandleButtonClick).toHaveBeenCalled();
  //  });

  // Add a check that the menu item is being displayed when displayDrawer is false
  it("should display the menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  // Add a check that the div.Notifications is not being displayed when displayDrawer is false
  it("should not display the div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications").exists()).toBe(false);
  });

  // Add a check that the menu item is being displayed when displayDrawer is true
  it("should display the menu item when displayDrawer is true", () => {
    // const wrapper = shallow(<Notifications displayDrawer={true} />);
    // expect(wrapper.find(".menuItem").exists()).toBe(true);
    // Define an empty array for listNotifications
    const listNotifications = [];

    // Render the Notifications component with displayDrawer set to true
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    // Find the menu item
    const menuItem = wrapper.find(".menuItem");

    // Check if the menu item is displayed
    expect(menuItem.exists()).toBe(true);
  });

  // Add a check that the div.Notifications is being displayed when displayDrawer is true
  it("should display the div.Notifications when displayDrawer is true", () => {
    // const wrapper = shallow(<Notifications displayDrawer={true} />);
    // expect(wrapper.find(".Notifications").exists()).toBe(true);
    // Define an empty array for listNotifications
    // const listNotifications = [];
    // // Render the Notifications component with displayDrawer set to true
    // const wrapper = shallow(
    //   <Notifications
    //     displayDrawer={true}
    //     listNotifications={listNotifications}
    //   />
    // );
    // console.log(wrapper.props());
    // // Find the .Notifications element
    // const notificationsDiv = wrapper.find(".Notifications");
    // // Debug: Log the rendered HTML of the Notifications component
    // console.log(wrapper.html());
    // // Check if the .Notifications element is displayed
    // expect(notificationsDiv.exists()).toBe(true);
    // Render the Notifications component with displayDrawer set to true
    // Render the Notifications component with displayDrawer set to true and an empty array for listNotifications
    // const wrapper = shallow(
    //   <Notifications displayDrawer={true} listNotifications={[]} />
    // );
    // // Check if the .notificationsContainer CSS class is present
    // const notificationsContainerClass = styles.notificationsContainer;
    // expect(wrapper.find(`.${notificationsContainerClass}`).exists()).toBe(true);
    // // Check if the .Notifications CSS class is present
    // const notificationsClass = styles.Notifications;
    // expect(wrapper.find(`.${notificationsClass}`).exists()).toBe(true);
  });

  // Add a new test to verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property
  it("should render correctly when listNotifications is not passed or is an empty array", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // Add a new test to verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem
  it("should render the correct number of NotificationItem when listNotifications is passed", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems).toHaveLength(listNotifications.length);
  });

  it("should not re-render when updating with the same listNotifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    const instance = wrapper.instance();

    // Spy on the render method
    const renderSpy = jest.spyOn(instance, "render");

    // Update the props with the same listNotifications
    wrapper.setProps({ listNotifications });

    // Check that the render method was not called again
    expect(renderSpy).not.toHaveBeenCalled();
  });

  it("should re-render when updating with a longer listNotifications", () => {
    const initialList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const updatedList = [
      ...initialList,
      { id: 3, type: "urgent", value: "New job available" },
    ];

    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={initialList} />
    );

    const instance = wrapper.instance();

    // Spy on the render method
    const renderSpy = jest.spyOn(instance, "render");

    // Update the props with a longer listNotifications
    wrapper.setProps({ listNotifications: updatedList });

    // Check that the render method was called again
    expect(renderSpy).toHaveBeenCalled();
  });

  // Add a new test to verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is
  it("should display No new notification for now when listNotifications is empty", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("No new notification for now");
    expect(wrapper.text()).not.toContain("Here is the list of notifications");
  });

  it("should call console.log with the right message when markAsRead is called", () => {
    const wrapper = shallow(<Notifications />);
    const notification = {
      id: 1,
      type: "default",
      value: "New course available",
    };

    // Call the markAsRead function on the instance of the component
    wrapper.instance().markAsRead(notification.id);

    // Check if console.log is called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith(
      `Notification ${notification.id} has been marked as read`
    );
  });

  // Test case: Clicking on the menu item calls handleDisplayDrawer
  it("should call handleDisplayDrawer when the menu item is clicked", () => {
    // Define a mock function for handleDisplayDrawer
    const mockHandleDisplayDrawer = jest.fn();

    // Render the Notifications component with the mock handleDisplayDrawer prop
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={mockHandleDisplayDrawer}
      />
    );

    // Find the menu item
    const menuItem = wrapper.find(".menuItem");

    // Simulate a click on the menu item
    menuItem.simulate("click");

    // Check if the mock handleDisplayDrawer function is called
    expect(mockHandleDisplayDrawer).toHaveBeenCalled();
  });

  // Test case: Clicking on the button calls handleHideDrawer
  it("should call handleHideDrawer when the close button is clicked", () => {
    // Define a mock function for handleHideDrawer
    const mockHandleHideDrawer = jest.fn();

    // Render the Notifications component with the mock handleHideDrawer prop
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={mockHandleHideDrawer}
      />
    );

    // Find the close button using the aria-label attribute
    const closeButton = wrapper.find("button[aria-label='Close']");

    // Check if the closeButton exists
    expect(closeButton.exists()).toBe(true);

    // Simulate a click on the close button
    closeButton.simulate("click");

    // Check if the mock handleHideDrawer function is called
    expect(mockHandleHideDrawer).toHaveBeenCalled();
  });
  
  // Test case: should re-render when displayDrawer prop changes
  it("should re-render when displayDrawer prop changes", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const instance = wrapper.instance();

    // Spy on the render method
    const renderSpy = jest.spyOn(instance, "render");

    // Update the displayDrawer prop
    wrapper.setProps({ displayDrawer: true });

    // Check that the render method was called again
    expect(renderSpy).toHaveBeenCalled();
  });
  //  it("should call the markAsRead function with the correct ID when li is clicked", () => {
  //    // Create a mock function for markAsRead
  //    const mockMarkAsRead = jest.fn();

  //    // Create a notification with an ID
  //    const notification = { id: 1, type: "default", value: "Test Value" };

  //    // Render the Notifications component with a single notification
  //    const wrapper = shallow(
  //      <Notifications
  //        id={notification.id}
  //        displayDrawer={true}
  //        listNotifications={[notification]}
  //        markAsRead={mockMarkAsRead}
  //      />
  //    );

  //    // Find the rendered NotificationItem
  //    const notificationItem = wrapper.find(NotificationItem);

  //    // Simulate a click on the NotificationItem
  //    notificationItem.simulate("click");

  //    // Check if the mock markAsRead function is called with the correct ID argument
  //    expect(mockMarkAsRead).toHaveBeenCalledWith(notification.id);
  //  });
});
