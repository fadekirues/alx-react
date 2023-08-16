import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import { StyleSheetTestUtils } from "aphrodite";
import Header from "./Header";
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
});
