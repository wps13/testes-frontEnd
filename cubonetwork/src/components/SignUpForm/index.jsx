import React from "react";

import FormInput from "../FormInput";

import "./style.scss";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h1>Cadastre-se</h1>
      <p>Alguma descrição aqui</p>
      <div className="sign-up-form">
        <FormInput title="Nome" dataType="text" />
        <FormInput title="Email" dataType="email" />
        <FormInput title="Telefone" dataType="tel" />
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default SignUp;
