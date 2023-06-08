import ContainerForm from "../../Component/ContainerForm/ContainerForm";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./Register.scss";
import { registerState } from "./state";
function Register() {
  const [data, setData] = useState(registerState);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const registerHandler = async (e) => {
    e.preventDefault();
    const { username, email, password, confPassword } = data;
    if (password.payload !== confPassword.payload) {
      setData((prevData) => ({
        ...prevData,
        password: {
          ...prevData.password,
          payload: "",
        },
      }));
      setData((prevData) => ({
        ...prevData,
        confPassword: {
          ...prevData.confPassword,
          payload: "",
        },
      }));
    }

    try {
      const payloadUsername = username.payload;
      const payloadEmail = email.payload;
      const payloadPassword = password.payload;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "/api/auth/register",
        {
          username: payloadUsername,
          email: payloadEmail,
          password: payloadPassword,
        },
        config
      );
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "rgb(3, 43, 113)",
        title: "You have registered",
        showConfirmButton: true,
        confirmButtonText: "Login",
      })
        .then((ok) => {
          if (ok.isConfirmed) {
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <ContainerForm>
      <form className="form-register" onSubmit={(e) => registerHandler(e)}>
        <div className="title-register">
          <p>REGISTER</p>
        </div>
        <div className="box-input-register">
          <div className="user-register input-register">
            <input
              type="text"
              placeholder="Username"
              id="name"
              value={data.username.payload}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  username: {
                    ...prevData.username,
                    payload: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="email-register input-register">
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={data.email.payload}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  email: {
                    ...prevData.email,
                    payload: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="pass-register input-register">
            <input
              type="password"
              placeholder="Password"
              id="pasword"
              required
              value={data.password.payload}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  password: {
                    ...prevData.password,
                    payload: e.target.value,
                  },
                }))
              }
            />
          </div>
          <div className="confPass-register input-register">
            <input
              type="password"
              placeholder="Confirm Password"
              id="confPassword"
              required
              value={data.confPassword.payload}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  confPassword: {
                    ...prevData.confPassword,
                    payload: e.target.value,
                  },
                }))
              }
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
    </ContainerForm>
  );
}

export default Register;
