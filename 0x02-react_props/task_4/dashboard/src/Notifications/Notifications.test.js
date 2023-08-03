import React from "react";
import "../../config/setupTests";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
configure({ adapter: new Adapter() });
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

//Mock the import for closeIcon
jest.mock("../close-icon.png", () => "close-icon.png");
describe("Notifications Component", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });


  it("should render NotificationItem elements", () => {
    const wrapper = shallow(<Notifications />);
    console.log(wrapper)
    
    const notificationItems = wrapper.find(NotificationItem);
    console.log(notificationItems)
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
});
