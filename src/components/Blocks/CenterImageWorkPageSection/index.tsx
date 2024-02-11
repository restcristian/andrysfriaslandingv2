import React from "react";
import styles from "./CenterImageWorkPageSection.module.scss";
import { CenterImageWorkPageSection } from "@/types";

interface Props {
  screen: CenterImageWorkPageSection;
}
const CenterImageWorkPageSection: React.FC<Props> = ({ screen }) => {
  if (!screen) return null;
  return (
    <div className={styles.detailWork}>
      <div
        className={styles.secondScreen}
        style={{ backgroundColor: screen.fields?.backgroundColor }}
      >
        <div className={styles.secondScreenWrapper}>
          <div className={styles.secondScreenImageContainer}>
            <img
              src={screen.fields.image.fields.file.url}
              alt={screen.fields.image.fields.file.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterImageWorkPageSection;
