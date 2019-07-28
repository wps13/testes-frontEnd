import React from "react";

import { storiesOf } from "@storybook/react";
import SNSIcon from "../components/SNSIcon";
import Adress from "../components/Adress";
import Copyright from "../components/Copyright";
import SNSArea from "../components/SNSArea";

storiesOf("Footer", module)
  .add("SNS Icon - Youtube", () => <SNSIcon name="youtube" />)
  .add("SNS Icon - Twitter", () => <SNSIcon name="twitter" />)
  .add("SNS Icon - Facebook", () => <SNSIcon name="facebook" />)
  .add("SNS Icon - Google Plus", () => <SNSIcon name="google-plus" />)
  .add("Adress Area", () => <Adress />)
  .add("Copyright", () => <Copyright />)
  .add("SNS Area", () => <SNSArea />);
