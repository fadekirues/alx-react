import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

describe("Notifications Component", () => {
  it("should render without crashing", () => {
    shallow(<Notifications />);
  });

   it("should render NotificationItem elements", () => {
     const wrapper = shallow(<Notifications />);
     const notificationItems = wrapper.find(NotificationItem);

     expect(notificationItems).toHaveLength(3);

     // Check if the first NotificationItem renders the correct values
     const firstNotification = notificationItems.at(0);
     expect(firstNotification.prop("type")).toEqual("default");
     expect(firstNotification.prop("value")).toEqual("New course available");
     expect(firstNotification.prop("html")).toBeUndefined();

     // Check if the third NotificationItem renders the correct HTML
     const thirdNotification = notificationItems.at(2);
     expect(thirdNotification.prop("type")).toEqual("urgent");
     expect(thirdNotification.prop("value")).toEqual(getLatestNotification());
     expect(thirdNotification.prop("html")).toEqual({
       __html: "<strong>Test HTML</strong>",
     });
   });





  it("should call handleButtonClick when the close button is clicked", () => {
    const mockConsoleLog = jest.spyOn(console, "log"); // Mock console.log

    const wrapper = shallow(<Notifications />);

    const closeButton = wrapper.find("button[aria-label='Close']");
    expect(closeButton.exists()).toBe(true);

    // Simulate the click on the close button
    closeButton.simulate("click");

    // Check if the handleButtonClick function is called
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "Close button has been clicked"
    );

    // Restore the original console.log
    mockConsoleLog.mockRestore();
  });
});
