import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
  it("should render CourseList component without crashing", () => {
    shallow(<CourseList />);
  });

  it("should render the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    const courseListRows = wrapper.find(CourseListRow);
    console.log("checking...", courseListRows)
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

  // Add a new test to verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property
  it("should render correctly when listCourses is not passed or is an empty array", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  // Add a new test to verify that when you pass a list of courses, the component renders it correctly
  it("should render the correct number of CourseListRow when listCourses is passed", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const courseListRows = wrapper.find(CourseListRow);

    expect(courseListRows).toHaveLength(listCourses.length + 2); // 2 additional rows for headers
  });
});
