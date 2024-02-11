import React from "react";
import styles from "./DescriptionWorkPage.module.scss";
import { DescriptionWorkPageSection as DescriptionWorkPageSectionType } from "@/types";

interface Props {
  description: DescriptionWorkPageSectionType;
}
export const DescriptionWorkPageSection: React.FC<Props> = ({
  description,
}) => {
  return (
    <div className={styles.detailWork}>
      <div
        className={styles.description}
        style={{
          backgroundColor: description?.fields.backgroundColor,
          color: description?.fields.textColor,
        }}
      >
        <div className={styles.descriptionContainer}>
          <span className={styles.descriptionTitle}>
            {description?.fields.slug}
          </span>
          <p className={styles.descriptionText}>{description?.fields.text}</p>
          <div className={styles.descriptionTable}>
            <div className={styles.tableRow}>
              <div className={styles.tableHeader}>Role</div>
              <div className={styles.tableHeader}>Client</div>
              <div className={styles.tableHeader}>Year</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>{description?.fields.role}</div>
              <div className={styles.tableCol}>
                {description?.fields.client}
              </div>
              <div className={styles.tableCol}>{description?.fields.year}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
