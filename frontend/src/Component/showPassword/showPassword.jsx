import "./showPassword.scss";
function ShowPassword({ show, setShow }) {
  return (
    <div className="showPass" onClick={() => setShow(!show)}>
      {show ? (
        <span className="material-symbols-outlined">visibility</span>
      ) : (
        <span className="material-symbols-outlined">visibility_off</span>
      )}
    </div>
  );
}

export default ShowPassword;
