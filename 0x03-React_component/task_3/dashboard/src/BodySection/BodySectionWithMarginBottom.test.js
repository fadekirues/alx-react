import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom Component", () => {
  it("should render correctly a BodySection component and pass props correctly", () => {
    const title = "test title";
    const children = <p>test children node</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // Check if a BodySection component is rendered within BodySectionWithMarginBottom
    const bodySectionComponent = wrapper.find(BodySection);
    expect(bodySectionComponent.exists()).toBe(true);

    // Check if the props are passed correctly to the BodySection component
    expect(bodySectionComponent.props().title).toBe(title);
    expect(bodySectionComponent.props().children).toBe(children);
  });
});
