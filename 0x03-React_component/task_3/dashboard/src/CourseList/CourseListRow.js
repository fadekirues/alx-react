import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const tdClass = isHeader ? 'th' : 'td';
  const tdColspan = isHeader && textSecondCell === null ? 2 : 1;

  return (
    <tr>
      <td className={tdClass} colSpan={tdColspan}>
        {textFirstCell}
      </td>
      {textSecondCell !== null && (
        <td className={tdClass}>
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
