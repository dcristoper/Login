import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import ContainerForm from "../../Component/Container/Form/ContainerForm";
import ShowPassword from "../../Component/showPassword/showPassword";
import Form from "../../Component/Form/Form";
import Title from "../../Component/Title/Title";
import { postsUsers } from "../../Utils/Reducer";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Login() {
  const dispatch = useDispatch();
  // ? local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  // ? ===================
  // ? tombol untuk login
  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      endpoint: "/login",
      payload: { email, password },
    };
    const getStatus = await dispatch(postsUsers(config));
    if (getStatus?.error) {
      setEmail("");
      setPassword("");
      return Swal.fire("Login Gagal", getStatus.error.message, "error");
    }

    navigate("/");
  };

  return (
    <ContainerForm>
      <Form submit={loginHandler}>
        <Title txt="Login" />
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
      </Form>
    </ContainerForm>
  );
}

export default Login;
