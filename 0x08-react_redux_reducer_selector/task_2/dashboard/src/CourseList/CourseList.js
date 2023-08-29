import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
  const styles = StyleSheet.create({
    table: {
      marginTop: '2em',
      width: '100%',
      border: '1px solid #ddd',
      fontSize: '1.2rem',
      marginBottom: '15em',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    th: {
      borderBottom: '1px solid #ddd',
    },
    td: {
      width: '80%', 
    },
    th: {
      width: '80%', 
    },   
    tr: {
      textAlign: 'left',
      border: '1px solid #ddd',
    }

  });
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead >
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody className={css(styles.body)}>
        {listCourses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
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
