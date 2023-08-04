import React,{useRef} from "react";
import "./Login.css";

function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleLabelClick = (inputRef) => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div>
        <label htmlFor="email" onClick={() => handleLabelClick(emailRef)}>
          Email:
        </label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password" onClick={() => handleLabelClick(passRef)}>
          Password:
        </label>
        <input type="password" id="password" ref={passRef} />
      </div>
      <button>OK</button>
    </div>
  );
}

export default Login;
