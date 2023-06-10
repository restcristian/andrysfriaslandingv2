import { useAppStore } from "@/store/appStore";
import React from "react";
import styles from "./ToggleButton.module.scss";

function ToggleButton() {
  const { textColor } = useAppStore();
  return (
    <button className={styles.toggleButton} style={{ color: textColor }}>
      <span>toggle button</span>
    </button>
  );
}

export default ToggleButton;
