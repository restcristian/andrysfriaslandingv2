import { ScreenWorkPageSection } from "@/types";
import classNames from "classnames";
import React from "react";

import styles from "./ScreenImageWorkPageSection.module.scss";

interface Props {
  screen: ScreenWorkPageSection;
}
const ScreenImageWorkPageSection: React.FC<Props> = ({ screen }) => {
  console.log({ "la images": screen.fields.image.fields.file });
  return (
    <div className={styles.detailWork}>
      <div className={styles.screen}>
        <div
          className={classNames(styles.screenContainer, {
            [styles[`mt-${124}`]]: screen.fields.hasBorder,
          })}
        >
          <div
            className={classNames(styles.screenImgContainer, {
              [styles.border]: screen.fields.hasBorder,
            })}
            style={{ borderColor: screen.fields.borderColor }}
          >
            <img
              src={screen.fields.image.fields.file.url}
              alt={screen.fields.image.fields.file.fileName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenImageWorkPageSection;
