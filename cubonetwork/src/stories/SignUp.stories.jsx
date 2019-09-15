import React from "react";

import { storiesOf } from "@storybook/react";
import SignUp from "../components/SignUpSection";
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
