import { Link } from "react-router-dom";
import { useState } from "react";

import "./Login.scss";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <form className="form-login">
      <div className="title-login">
        <p>LOGIN</p>
      </div>
      <div className="box-input-login">
        <div className="email-login input-login">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="pass-login input-login">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="forgot">
          <Link
            to="/forgotpassword"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Forgot Password ?
          </Link>
        </div>
      </div>
      <div className="box-btn-login">
        <button type="submit" className="btn-login">
          Login
        </button>
        <Link to="/register" className="signup">
          Sign Up
        </Link>
      </div>
    </form>
  );
}

export default Login;
