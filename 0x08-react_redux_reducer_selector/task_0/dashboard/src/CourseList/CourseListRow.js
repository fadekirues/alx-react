import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const styles = StyleSheet.create({
    tr: {
      backgroundColor: isChecked ? '#e6e4e4' : isHeader ? '#deb5b545' : '#f5f5f5ab',
    },
    th: {
      backgroundColor: '#deb5b545',
    },
    td: {
      backgroundColor: isChecked ? '#e6e4e4' : '#f5f5f5ab',
    },
    rowChecked: {
      backgroundColor: '#e6e4e4',
    },
  });

  const tdClass = isHeader ? styles.th : styles.td;
  const tdColspan = isHeader && textSecondCell === null ? 2 : 1;

  return (
    <tr className={css(styles.tr)}>
      {isHeader && textSecondCell !== null ? (
        <>
          <th className={css(tdClass)}>{textFirstCell}</th>
          <th className={css(tdClass)}>{textSecondCell}</th>
        </>
      ) : (
        <>
          <td className={css(tdClass, isChecked && styles.rowChecked)}>
            {isHeader ? (
              <input
                type="checkbox"
                disabled
                style={{ opacity: 0.5 }}
                aria-label="Checkbox"
              />
            ) : (
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
            )}
            {textFirstCell}
          </td>
          {textSecondCell !== null && (
            <td className={css(tdClass)}>{textSecondCell}</td>
          )}
        </>
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
