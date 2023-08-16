import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
  },
  cell: {
    padding: "8px 12px",
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
  const rowStyle = isHeader ? css(styles.headerRow) : css(styles.defaultRow);

  const cellStyle = css(styles.cell);

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
