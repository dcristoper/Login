import "./Form.scss";

function Form({ children, submit }) {
  return (
    <form className="form" onSubmit={submit}>
      {children}
    </form>
  );
}
export default Form;
