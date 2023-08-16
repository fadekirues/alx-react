import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import BodySection from "./BodySection";

describe("BodySection Component", () => {
  it("should render correctly with the children and h2 element", () => {
    const title = "test title";
    const children = <p>test children node</p>;
    const wrapper = shallow(
      <BodySection title={title}>{children}</BodySection>
    );

    // Check if the h2 element contains the correct title
    const h2Element = wrapper.find("h2");
    expect(h2Element.exists()).toBe(true);
    expect(h2Element.text()).toBe(title);

    // Check if the p element contains the correct children
    const pElement = wrapper.find("p");
    expect(pElement.exists()).toBe(true);
    expect(pElement.text()).toBe("test children node");
  });
});
