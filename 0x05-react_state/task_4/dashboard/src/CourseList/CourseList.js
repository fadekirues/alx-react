import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  courseList: {
    width: "100%",
    border: "1px solid #ddd",
    borderCollapse: "collapse",
  },
  headerRow: {
    backgroundColor: "#f5f5f5ab",
  },
  regularRow: {
    backgroundColor: "#f5f5f5ab",
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
          className={css(styles.headerRow)}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
          className={css(styles.headerRow)}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
            className={css(styles.regularRow)}
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
              className={css(styles.regularRow)}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
