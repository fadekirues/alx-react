import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import Login from "./Login";

describe("Login Component", () => {
  it("should render without crashing", () => {
    shallow(<Login />);
  });

  it("should render 2 input tags", () => {
    const wrapper = shallow(<Login />);
    const inputElements = wrapper.find("input");
    expect(inputElements).toHaveLength(2);
  });

  it("should render 2 label tags", () => {
    const wrapper = shallow(<Login />);
    const labelElements = wrapper.find("label");
    expect(labelElements).toHaveLength(2);
  });
});
