import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);

   expect(wrapper.hasClass("notificationItem")).toBe(true);
   expect(wrapper.find('[data-notification-type="default"]').length).toBe(1);
  });

  it('renders correct html from  html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem html="<u>test</u>" />);

   expect(wrapper.hasClass("notificationItem")).toBe(true);
   expect(wrapper.hasClass("urgent")).toBe(true);
   expect(wrapper.find('[data-urgent="true"]').length).toBe(1);
  });
});

describe("onclick event behaves as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});