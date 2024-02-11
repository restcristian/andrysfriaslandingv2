import React from "react";
import styles from "./FrameSquareWorkPageSection.module.scss";
import { SquareFrameWorkPageSection } from "@/types";

interface Props {
  frame: SquareFrameWorkPageSection;
}
const FrameSquareWorkPageSection: React.FC<Props> = ({ frame }) => {
  return (
    <div className={styles.detailWork}>
      <div className={styles.frame}>
        <div className={styles.frameWrapper}>
          <div
            className={styles.frameSquare}
            style={{
              backgroundColor: frame.fields?.borderColor,
              marginTop: `${frame.fields.isOverlapping ? "-90px" : "0"} `,
            }}
          >
            <div className={styles.frameImageContainer}>
              <img
                src={frame.fields.image.fields.file.url}
                alt={frame.fields.image.fields.file.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameSquareWorkPageSection;
