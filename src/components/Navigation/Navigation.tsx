import { useAppStore } from "@/store/appStore";
import React from "react";
import ToggleButton from "../Buttons/ToggleButton/ToggleButton";
import Logo from "../Icons/Logo";

import styles from "./Navigation.module.scss";
function Navigation() {
  const { textColor } = useAppStore();
  return (
    <nav className={styles.navigation}>
      <div className={styles.logoContainer} style={{ color: textColor }}>
        <Logo width="50px" />
      </div>
      <div>
        <ToggleButton />
      </div>
    </nav>
  );
}

export default Navigation;
