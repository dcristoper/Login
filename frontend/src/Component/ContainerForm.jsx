import "./ContainerForm.scss";
function ContainerForm({ children }) {
  return (
    <div className="wrapper-main">
      <div className="container-main">{children}</div>
    </div>
  );
}

export default ContainerForm;
