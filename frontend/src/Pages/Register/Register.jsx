import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Register.scss";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confPassword) {
      setPassword("");
      setConfPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password does not match \n please try again");
    }
    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password },
        config
      );
      localStorage.setItem("authTOken", data.token);
      setSuccess("Success");
    } catch (error) {
      console.log(error);
      setEmail("");
      setConfPassword("");
      setPassword("");
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 8000);
    }
  };

  return (
    <form className="form-register" onSubmit={registerHandler}>
      {success && (
        <div className="success-register">
          <p>{success}</p>
        </div>
      )}
      {error && (
        <div className="error-register">
          <p>{error}</p>
        </div>
      )}
      <div className="title-register">
        <p>REGISTER</p>
      </div>
      <div className="box-input-register">
        <div className="user-register input-register">
          <input
            type="text"
            placeholder="Username"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="email-register input-register">
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pass-register input-register">
          <input
            type="password"
            placeholder="Password"
            id="pasword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="confPass-register input-register">
          <input
            type="password"
            placeholder="Confirm Password"
            id="confPassword"
            required
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="box-btn-register">
        <button type="submit" className="btn-register">
          Submit
        </button>
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
}

export default Register;
