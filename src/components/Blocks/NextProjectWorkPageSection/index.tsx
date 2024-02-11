import React, { useRef } from "react";
import styles from "./NextProjectWork.module.scss";

import { NextProjectWorkPageSection } from "@/types";

interface Props {
  nextProject: NextProjectWorkPageSection;
}

const NextProjectWorkPageSection: React.FC<Props> = ({ nextProject }) => {
  if (!nextProject) return null;
  return (
    <div
      className={styles.detailWork}
      style={{ background: nextProject.fields.backgroundColor }}
    >
      <div className={styles.nextProject}>
        <img
          src={nextProject.fields?.nextProjectImage.fields.file.url}
          alt={nextProject.fields?.nextProjectImage.fields.file.title}
        />
        <div
          className={styles.nextProjectInfo}
          style={{ color: nextProject.fields?.textColor }}
        >
          <a
            className={styles.nextProjectLink}
            href={`${nextProject?.fields.nextProjectSlug}`}
          >
            <span>
              <span>Next Project</span>
            </span>
            <div className={styles.nextProjectTitle}>
              <span>{nextProject?.fields.slug}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextProjectWorkPageSection;
