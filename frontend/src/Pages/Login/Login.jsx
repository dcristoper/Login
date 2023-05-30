import "./Login.scss";
import imgVector from "../../Assets/vectorcom.jpg";
import FormLogin from "../../Components/FormLogin/FormLogin";

function Login() {
  return (
    <div className="wrapper-login">
      <div className="container-login">
        <div className="form-img">
          <img src={imgVector} alt="Vector" />
        </div>
        <div className="form-login">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
