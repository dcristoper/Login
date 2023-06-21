import ContainerForm from "../../Component/ContainerForm/ContainerForm";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./Register.scss";
import FormInput from "../../Component/Inputs/FormInput";
import { getDataApi } from "../../API/ApiReq";
import Form from "../../Component/Form/Form";
import Title from "../../Component/Title/Title";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errmsg:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errmsg: "It should be a valid email address!",
      label: "Email",
      pattern:
        "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}(?:.[A-Za-z]{2,})?$/",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errmsg:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      title: "Silahkan Isi dengan benar",

      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errmsg: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const registerHandler = async (e) => {
    e.preventDefault();

    const { username, email, password } = values;

    try {
      const config = {
        endpoint: "/register",
        payload: { username, email, password },
      };
      const { data } = await getDataApi(config);
      if (!data) {
        console.log("Failed");
      }
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
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <ContainerForm>
      <Form submit={registerHandler}>
        <Title txt="Register" />

        <div className="box-input-register">
          {inputs.map((el, i) => (
            <FormInput
              key={i}
              {...el}
              value={values[el.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="box-btn-register">
          <button type="submit" className="btn-register">
            Submit
          </button>
          <p>
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </ContainerForm>
  );
}

export default Register;
