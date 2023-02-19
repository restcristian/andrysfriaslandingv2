import React from "react";
import ToggleButton from "../Buttons/ToggleButton/ToggleButton";
import Logo from "../Icons/Logo";

import styles from './Navigation.module.scss';
function Navigation() {
  return (
    <nav className = {styles.navigation}>
      <Logo width="50px" />
      <div>
          <ToggleButton />
      </div>
    </nav>
  );
}

export default Navigation;
