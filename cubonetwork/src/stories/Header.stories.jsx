import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from '@storybook/addon-links';

import MenuItem from "../components/MenuItem";
import Logo from "../components/Logo";
import MenuBar from "../components/MenuBar";

storiesOf("Header", module)
  .add("Menu Item", () => <MenuItem title="Menu 1" />)
  .add("Menu Item actived", () => (
    <MenuItem title="Menu 2" onClick={action("clicked")} />
  ))
  .add("Logo", () => <Logo />)
  .add("Menu bar", () => <MenuBar />);
s;
