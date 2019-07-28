import React from "react";

import FormInput from "../FormInput";

import "./style.scss";

const SignUp = ({ inputChange, btnClick }) => {
  return (
    <div className="sign-up">
      <h1>Cadastre-se</h1>
      <p>Alguma descrição aqui</p>
      <div className="sign-up-form">
        <FormInput
          title="Nome"
          dataType="text"
          posClass="first"
          change={e => inputChange(e)}
        />
        <FormInput
          title="Email"
          dataType="email"
          posClass="second"
          change={e => inputChange(e)}
        />
        <FormInput
          title="Telefone"
          dataType="tel"
          posClass="third"
          change={e => inputChange(e)}
        />
        <button onClick={() => btnClick()}>Enviar</button>
      </div>
    </div>
  );
};

export default SignUp;
