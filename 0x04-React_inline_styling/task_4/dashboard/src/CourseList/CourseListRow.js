import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const styles = StyleSheet.create({
    tr: {
      backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    },
    th: {
      backgroundColor: '#deb5b545',
    },
    td: {
      backgroundColor: '#f5f5f5ab', 
    }
  });

  const tdClass = isHeader ? styles.th : styles.td;
  const tdColspan = isHeader && textSecondCell === null ? 2 : 1;

  // const trStyle = {
  //   backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  // };
  
  return (
    <tr className={css(styles.tr)}>
      <td className={css(tdClass)} colSpan={tdColspan}>
        {textFirstCell}
      </td>
      {textSecondCell !== null && (
        <td className={css(tdClass)}>
          {textSecondCell}
        </td>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};



export default CourseListRow;
