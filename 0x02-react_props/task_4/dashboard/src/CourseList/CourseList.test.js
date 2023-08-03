import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
  it("should render CourseList component without crashing", () => {
    shallow(<CourseList />);
  });

  it("should render the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    const courseListRows = wrapper.find(CourseListRow);

    expect(courseListRows).toHaveLength(5);

    const firstRowProps = courseListRows.at(0).props();
    expect(firstRowProps.textFirstCell).toBe("Available courses");
    expect(firstRowProps.isHeader).toBe(true);

    const secondRowProps = courseListRows.at(1).props();
    expect(secondRowProps.textFirstCell).toBe("Course name");
    expect(secondRowProps.textSecondCell).toBe("Credit");
    expect(secondRowProps.isHeader).toBe(true);

    const thirdRowProps = courseListRows.at(2).props();
    expect(thirdRowProps.textFirstCell).toBe("ES6");
    expect(thirdRowProps.textSecondCell).toBe("60");
    expect(thirdRowProps.isHeader).toBe(false);

    const fourthRowProps = courseListRows.at(3).props();
    expect(fourthRowProps.textFirstCell).toBe("Webpack");
    expect(fourthRowProps.textSecondCell).toBe("20");
    expect(fourthRowProps.isHeader).toBe(false);

    const fifthRowProps = courseListRows.at(4).props();
    expect(fifthRowProps.textFirstCell).toBe("React");
    expect(fifthRowProps.textSecondCell).toBe("40");
    expect(fifthRowProps.isHeader).toBe(false);
  });
});
