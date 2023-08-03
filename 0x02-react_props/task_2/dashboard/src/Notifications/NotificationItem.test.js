import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import NotificationItem from "./NotificationItem";

// describe("NotificationItem Component", () => {
//   it("should render without crashing", () => {
//     shallow(<NotificationItem />);
//   });

//   it("should render with correct type and value props", () => {
//     const type = "default";
//     const value = "test";
//     const wrapper = shallow(<NotificationItem type={type} value={value} />);
//     const liElement = wrapper.find("li");

//     expect(liElement.prop("data-notification-type")).toEqual(type);
//     expect(liElement.text()).toEqual(value);
//   });

//   it("should render with correct html prop", () => {
//     const htmlProp = { __html: "<u>test</u>" };
//     const wrapper = shallow(<NotificationItem html={htmlProp} />);
//     const liElement = wrapper.find("li");

//     expect(liElement.prop("dangerouslySetInnerHTML")).toEqual(htmlProp);
//   });
// });
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
});