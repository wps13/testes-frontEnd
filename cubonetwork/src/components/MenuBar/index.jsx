import React from "react";

import MenuItem from "../MenuItem";

import "./style.scss";

const MenuBar = () => {
  return (
    <div className="menubar-header">
      <MenuItem title="Home" />
      <MenuItem title="Menu 1" />
      <MenuItem title="Menu 2" />
      <MenuItem title="Menu 3" />
    </div>
  );
};

export default MenuBar;
