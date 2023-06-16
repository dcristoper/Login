import { useState } from "react";
import "./FormInput.scss";
function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errmsg, onChange, id, title, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="asd">
      <input
        {...inputProps}
        title={`${title}`}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <div className="err">
        <span>{errmsg}</span>
      </div>
    </div>
  );
}

export default FormInput;
