import { useState } from "react";
import axios from "axios";
import ContainerForm from "../../Component/ContainerForm/ContainerForm";
import "./ForgotPassword.scss";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleForgot = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("/api/auth/forgotpassword", { email }, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerForm>
      <form className="form-forgot" onSubmit={(e) => handleForgot(e)}>
        <div className="title-forgot">
          <h2>Forgot Password </h2>
          <p>
            Please enter your email you used at the time registration to get the
            password reset instructions{" "}
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
        </div>
      </form>
    </ContainerForm>
  );
}

export default ForgotPassword;
