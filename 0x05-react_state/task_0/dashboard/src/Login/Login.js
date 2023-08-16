import React,{useRef} from "react";
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

  const handleLabelClick = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div className={css(styles.loginContainer)}>
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
        />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;
