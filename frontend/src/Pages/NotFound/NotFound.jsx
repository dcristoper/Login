import ContainerForm from "../../Component/ContainerForm/ContainerForm";
import "./NotFound.scss";
function NotFound() {
  return (
    <ContainerForm>
      <div className="container-notFound">
        <h1>404</h1>
        <span>OOOPSS... THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND</span>
      </div>
    </ContainerForm>
  );
}

export default NotFound;
