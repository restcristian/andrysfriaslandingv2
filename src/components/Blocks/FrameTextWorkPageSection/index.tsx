import { FrameTextWorkPageSection } from "@/types";
import React from "react";
import styles from "./FrameTextWorkPageSection.module.scss";

interface Props {
  frameText: FrameTextWorkPageSection;
}
const FrameTextWorkPageSection: React.FC<Props> = ({ frameText }) => {
  if (!frameText) return null;
  return (
    <div
      className={styles.detailWork}
      style={{ backgroundColor: frameText.fields?.backgroundColor }}
    >
      <div
        className={styles.frame}
        style={{ color: frameText?.fields?.textColor }}
      >
        <div className={styles.special}>
          <span className={styles.specialTitle}>{frameText?.fields.title}</span>
          <p className={styles.specialText}>{frameText?.fields.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameTextWorkPageSection;
