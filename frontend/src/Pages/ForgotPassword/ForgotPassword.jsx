import { useState } from "react";
import ContainerForm from "../../Component/Container/Form/ContainerForm";
import "./ForgotPassword.scss";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../Component/Form/Form";
import Titile from "../../Component/Title/Title";
import { useDispatch } from "react-redux";
import { postsUsers } from "../../Utils/Reducer";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleForgot = async (e) => {
    e.preventDefault();

    const config = {
      endpoint: "/forgotpassword",
      payload: { email },
    };

    const getStatus = await dispatch(postsUsers(config));
    if (getStatus?.error) {
      return Swal.fire({
        position: "center",
        icon: "error",
        iconColor: "rgb(255, 87, 87)",
        title: "Email could not be sent",
        text: "Please provide valid email that you have registered",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      }).then((ok) => {
        if (ok.isConfirmed) {
          setEmail("");
        }
      });
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Email Sent",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => navigate("/login"));
  };

  return (
    <ContainerForm>
      <Form submit={handleForgot}>
        <Titile txt="Forgot Password" />
        <div className="desc">
          <p>
            Please enter your email you used at the time registration to get the
            password reset instructions
          </p>
        </div>
        <div className="box-form-forgot">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="btn-forgot">
          <button type="submit">Send</button>
          <div className="btn-back-forgot">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Back
            </Link>
          </div>
        </div>
      </Form>
    </ContainerForm>
  );
}

export default ForgotPassword;
