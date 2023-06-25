import ContainerForm from "../../Component/Container/Form/ContainerForm";
import "./NotFound.scss";
function NotFound({ err }) {
  console.log(err);
  return (
    <ContainerForm>
      <div className="container-notFound">
        <h1>404</h1>
        <span>OOOPSS... THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND</span>
        <span>{err}</span>
      </div>
    </ContainerForm>
  );
}

export default NotFound;
