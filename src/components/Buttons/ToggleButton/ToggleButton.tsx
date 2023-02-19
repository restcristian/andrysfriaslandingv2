import React from "react";
import styles from "./ToggleButton.module.scss";

function ToggleButton() {
  return (
    <button className = {styles.toggleButton}>
      <span>toggle button</span>
    </button>
  );
}

export default ToggleButton;
