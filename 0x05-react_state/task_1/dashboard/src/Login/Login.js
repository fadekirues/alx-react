import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginRight: "10px",
    cursor: "pointer",
  },
  input: {
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
});

function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLabelClick = (inputRef) => {
    inputRef.current.focus();
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Enable the submit button when both email and password are not empty
  useEffect(() => {
    setEnableSubmit(email.trim() !== "" && password.trim() !== "");
  }, [email, password]);

  return (
    <div className={css(styles.loginContainer)}>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.inputContainer)}>
          <label
            htmlFor="email"
            className={css(styles.label)}
            onClick={() => handleLabelClick(emailRef)}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className={css(styles.input)}
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className={css(styles.inputContainer)}>
          <label
            htmlFor="password"
            className={css(styles.label)}
            onClick={() => handleLabelClick(passRef)}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            ref={passRef}
            className={css(styles.input)}
            
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <input
          type="submit"
          value="OK"
          className={css(styles.button)}
          disabled={!enableSubmit}
        />
      </form>
    </div>
  );
}

export default Login;
