import React from "react";
import "../../config/setupTests";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
configure({ adapter: new Adapter() });
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

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
    const wrapper = shallow(<Notifications />);
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems).toHaveLength(3);

    // Check if the first NotificationItem renders the correct values
    const firstNotification = notificationItems.first();
    expect(firstNotification.props().type).toEqual("default");
    expect(firstNotification.props().value).toEqual("New course available");
    expect(firstNotification.props().html).toBeUndefined();

    // Check if the third NotificationItem renders the correct HTML
    const thirdNotification = notificationItems.last();
    expect(thirdNotification.props().type).toEqual("urgent");
    expect(thirdNotification.props().value).toEqual(getLatestNotification());
    expect(thirdNotification.props().html).toEqual({
      __html: "<strong>Test HTML</strong>",
    });
  });

  it("should call handleButtonClick when the close button is clicked", () => {
    const wrapper = mount(<Notifications />);
    const closeButton = wrapper.find("button[aria-label='Close']");
    expect(closeButton.exists()).toBe(true);

    // Define a mock function for handleButtonClick
    const mockHandleButtonClick = jest.fn();

    // Set the handleButtonClick prop of the Notifications component to the mock function
    wrapper.setProps({ handleButtonClick: mockHandleButtonClick });

    // Simulate the click on the close button
    closeButton.simulate("click");

    // Check if the handleButtonClick function is called
    expect(mockHandleButtonClick).toHaveBeenCalled();
  });

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
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  // Add a check that the div.Notifications is being displayed when displayDrawer is true
  it("should display the div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications").exists()).toBe(true);
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
  it("should call the markAsRead function with the correct ID when li is clicked", () => {
    // Create a spy for the markAsRead function
    const mockMarkAsRead = jest.fn();

    // Create a notification with an ID
    const notification = { id: 1, type: "default", value: "Test Value" };

    // Render the NotificationItem with the mockMarkAsRead as the markAsRead prop
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[notification]}
        markAsRead={mockMarkAsRead}
      />
    );

    // Simulate a click on the li element
    wrapper.find(NotificationItem).simulate("click");

    // Check if the mockMarkAsRead function is called with the correct ID argument
    expect(mockMarkAsRead).toHaveBeenCalledWith(notification.id);

    // Check if the console.log function is called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith(
      `Notification ${notification.id} has been marked as read`
    );
  });
});
