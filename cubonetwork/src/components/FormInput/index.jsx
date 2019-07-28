import React from "react";

import "./style.scss";

const FormInput = ({ title, change, dataType, posClass }) => {
  return (
    <div className={"form-input " + posClass}>
      <input
        onChange={e => {
          e.persist();
          change(e);
        }}
        type={dataType}
        className={"form-input " + dataType}
        name={title}
      />
      <span className="placeholder">{title}</span>
    </div>
  );
};

export default FormInput;
