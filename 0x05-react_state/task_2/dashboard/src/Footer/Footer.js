import React from 'react'
import './Footer.css'
import { getFooterCopy, getFullYear } from "../utils/utils"; // Adjust the path accordingly
function Footer() {
  const isIndex = true;
  return (
    <>
      <p>Copyright 2020 - holberton School</p>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(isIndex)}
      </p>
    </>
  );
}

export default Footer