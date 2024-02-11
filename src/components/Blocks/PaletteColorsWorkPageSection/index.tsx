import React from "react";

import styles from "./PaletteColorsWorkSection.module.scss";

import { PaletteColorsWorkPageSection } from "@/types";
interface Props {
  paletteColors: PaletteColorsWorkPageSection;
}
const PaletteColorsWorkPageSection: React.FC<Props> = ({ paletteColors }) => {
  return (
    <div className={styles.detailWork}>
      <div
        className={styles.paletteColors}
        style={{ backgroundColor: paletteColors.fields.backgroundColor }}
      >
        <div className={styles.paletteColorsWrapper}>
          <span
            className={styles.paletteColorTitle}
            style={{ color: paletteColors?.fields.textColor }}
          >
            Palette Colors
          </span>
          <ul className={styles.palettetColorsContainer}>
            {paletteColors?.fields.colors.split(",").map((color: string) => (
              <li key={color} style={{ backgroundColor: color }}></li>
            ))}
          </ul>
          <p className={styles.paletteColorsText}>
            {paletteColors.fields?.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaletteColorsWorkPageSection;
