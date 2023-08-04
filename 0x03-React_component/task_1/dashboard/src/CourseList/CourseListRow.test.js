import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("should render one cell with colspan = 2 when textSecondCell does not exist and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header Cell" />
    );
    const thElement = wrapper.find("th");

    expect(thElement).toHaveLength(1);
    expect(thElement.prop("colSpan")).toBe("2");
    expect(thElement.text()).toBe("Header Cell");
  });

  it("should render two cells when textSecondCell is present and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="First Header Cell"
        textSecondCell="Second Header Cell"
      />
    );
    const thElements = wrapper.find("th");

    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe("First Header Cell");
    expect(thElements.at(1).text()).toBe("Second Header Cell");
  });

  it("should render two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="First Data Cell"
        textSecondCell="Second Data Cell"
      />
    );
    const trElement = wrapper.find("tr");
    const tdElements = wrapper.find("td");

    expect(trElement).toHaveLength(1);
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toBe("First Data Cell");
    expect(tdElements.at(1).text()).toBe("Second Data Cell");
  });
});
