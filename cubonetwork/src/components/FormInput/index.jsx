import React from "react";

import "./style.scss";

const FormInput = ({ title, change, dataType }) => {
  return (
    <div className="form-input">
      <input placeholder={title} onChange={e => change(e)} type={dataType} />
    </div>
  );
};

export default FormInput;
