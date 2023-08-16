import React, { useContext } from "react";
import "./Footer.css";
import { AppContext } from "../App/AppContext"; // Adjust the path to the context module accordingly
import { getFooterCopy, getFullYear } from "../utils/utils"; // Adjust the path accordingly

function Footer() {
  const isIndex = true;
  const { user } = useContext(AppContext); // Use the useContext hook to access the context

  return (
    <>
      <p>Copyright 2020 - Holberton School</p>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(isIndex)}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </>
  );
}

export default Footer;
