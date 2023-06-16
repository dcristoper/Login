import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "./Login.scss";
import ContainerForm from "../../Component/ContainerForm/ContainerForm";
import ShowPassword from "../../Component/showPassword/showPassword";

function Login() {
  // ? local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  // ? check token pada local storage
  // ? jika ada
  // ? maka user tidak mengakses path login

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  // ? ===================
  // ? tombol untuk login
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.error,
        footer: '<a href="">Why do I have this issue?</a>',
      });
      setPassword("");
    }
  };

  return (
    <ContainerForm>
      <form className="form-login" onSubmit={(e) => loginHandler(e)}>
        <div className="title-login">
          <p>LOGIN</p>
        </div>
        <div className="box-input-login">
          <div className="email-login input-login">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="pass-login input-login">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ShowPassword show={show} setShow={setShow} />
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
    </ContainerForm>
  );
}

export default Login;
