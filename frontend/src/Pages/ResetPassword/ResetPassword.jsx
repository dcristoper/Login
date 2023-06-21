import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import ContainerForm from "../../Component/ContainerForm/ContainerForm";
import Form from "../../Component/Form/Form";
import "./ResetPassword.scss";
import { getDataApi } from "../../API/ApiReq";
import axios from "axios";
import NotFound from "../NotFound/NotFound";
function ResetPassword() {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const validTokenReset = async () => {
      const config = {
        "Content-Type": "application/json",
      };
      try {
        const data = await axios.get(
          `/api/auth/resetpassword/${resetToken}`,
          config
        );
        setSuccess(true);
        console.log(data);
      } catch (error) {
        console.log(`ini error catch: ${error.response.data.msg}`);
        setSuccess(false);
        navigate("*");
      }
    };
    validTokenReset();
  }, [resetToken, navigate]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const config = {
        method: "PUT",
        endpoint: `/resetpassword/${resetToken}`,
        payload: { password },
      };
      const { data } = await getDataApi(config);
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.data,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => navigate("/login"));
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!, please re-enter your email to get new reset password page",
      }).then(() => navigate("/forgotpassword"));
    }
  };

  const handleFocus = (e) => {
    setFocused(true);
  };

  return success ? (
    <ContainerForm>
      <Form submit={handleResetPassword}>
        <div className="title-reset">
          <h1>Reset Password</h1>
        </div>
        <div className="box-input-pass-reset input-reset">
          <input
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleFocus}
            focused={focused.toString()}
            value={password}
            name="pass"
            required
            type="password"
            placeholder="New Password"
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          />
          <span className="error-reset">
            Password should be 6-20 characters and include at least 1 letter, 1
            number and 1 special character!
          </span>
        </div>
        <div className="input-reset">
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleFocus}
            pattern={password}
            name="conf"
            focused={focused.toString()}
            value={confirmPassword}
            required
          />
          <span className="error-confirm">Passwords don't match!</span>
        </div>
        <div className="box-btn-reset">
          <button>Submit</button>
        </div>
      </Form>
    </ContainerForm>
  ) : (
    <NotFound />
  );
}

export default ResetPassword;
