import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import { StyleSheetTestUtils } from "aphrodite";
import NotificationItem from "./NotificationItem";
// Suppress style injections during testing
StyleSheetTestUtils.suppressStyleInjection();
describe("NotificationItem Component", () => {
  it("should render without crashing", () => {
    shallow(<NotificationItem type="default" value="Test Value" />);
  });

  it("should render the correct type prop as data-notification-type attribute", () => {
    const type = "urgent";
    const wrapper = shallow(
      <NotificationItem type={type} value="Test Value" />
    );
    expect(wrapper.find("li").prop("data-notification-type")).toBe(type);
  });

  it("should render the value prop within the li tag", () => {
    const value = "Test Value";
    const wrapper = shallow(<NotificationItem type="default" value={value} />);
    expect(wrapper.find("li").text()).toBe(value);
  });

  it("should render the correct HTML content when the html prop is provided", () => {
    const htmlContent = "<u>Test HTML</u>";
    const wrapper = shallow(
      <NotificationItem type="default" html={{ __html: htmlContent }} />
    );

    // Get the HTML content rendered by dangerouslySetInnerHTML
    const renderedHTML = wrapper.find("div").prop("dangerouslySetInnerHTML");

    expect(renderedHTML).toEqual({ __html: htmlContent });
  });

  it("should call the markAsRead function with the correct ID when li is clicked", () => {
    // Create a spy for the markAsRead function
    const mockMarkAsRead = jest.fn();

    // Create a notification with an ID
    const notification = { id: 1, type: "default", value: "Test Value" };

    // Render the NotificationItem with the mockMarkAsRead as the markAsRead prop
    const wrapper = shallow(
      <NotificationItem
        id={notification.id}
        type={notification.type}
        value={notification.value}
        markAsRead={mockMarkAsRead}
      />
    );

    // Simulate a click on the li element
    wrapper.find("li").simulate("click");

    // Check if the mockMarkAsRead function is called with the correct ID argument
    expect(mockMarkAsRead).toHaveBeenCalledWith(notification.id);
  });
});
