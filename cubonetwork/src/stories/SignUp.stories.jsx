import React from "react";

import { storiesOf } from "@storybook/react";
import SignUp from "../components/SignUpForm";
import FormInput from "../components/FormInput";

storiesOf("Sign Up", module)
  .add("Form Input", () => (
    <FormInput
      title="Nome"
      dataType="text"
      change={e => console.log(e.target.value)}
    />
  ))
  .add("Sign Up Form", () => <SignUp />);
