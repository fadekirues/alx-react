import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
  cell: {
    padding: "8px 12px",
  },
  checkboxCell: {
    padding: "8px 12px",
    width: "40px",
    textAlign: "center",
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = isHeader
    ? css(styles.headerRow)
    : css(styles.defaultRow, isChecked && styles.rowChecked);

  const cellStyle = css(styles.cell);
  const checkboxCellStyle = css(styles.checkboxCell);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className={rowStyle}>
      {isHeader ? (
        <>
          <th className={cellStyle} colSpan="2">
            {textFirstCell}
          </th>
        </>
      ) : (
        <>
          <td className={checkboxCellStyle}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </td>
          <td className={cellStyle}>{textFirstCell}</td>
          <td className={cellStyle}>{textSecondCell}</td>
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
