import "./ContainerForm.scss";
function ContainerForm({ children }) {
  return (
    <div className="wrapper-main">
      <div className="container-main">
        <div className="img-vector mid"></div>
        <div className="box-form-login-register">{children}</div>
      </div>
    </div>
  );
}

export default ContainerForm;
