import "./FormLogin.scss";
function FormLogin() {
  return (
    <form>
      <div className="title-login">
        <p>Login</p>
      </div>
      <div className="box-input-login">
        <div className="box-input">
          <div className="input-login">
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-login">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="forget-password">
            <a href="#">Forgot Password ?</a>
          </div>
        </div>
        <div className="btn-login">
          <input type="submit" value="Login" />
          <input type="submit" value="Sign Up" />
        </div>
      </div>
    </form>
  );
}

export default FormLogin;
