import styles from "./work.module.scss";
import classnames from "classnames";
import Link from "next/link";
import { Project } from "./types";

export const ProjectSlide: React.FC<{ project: Project }> = ({ project }) => {
  const {
    year,
    client,
    imageUrl,
    description,
    type,
    title,
    role,
    url,
  } = project;
  return (
    <div className={styles.slide}>
      <div className={classnames([styles.slideColumn, styles.columnPic])}>
        <img src={imageUrl} />
      </div>
      <div
        className={classnames([styles.slideColumn, styles.columnInformation])}
      >
        <div className={classnames([styles.workType])}>
          <span>{type}</span>
        </div>
        <div className={classnames([styles.workTitle])}>
          <span>{title}</span>
        </div>

        <p className={classnames([styles.workDescription])}>{description}</p>

        <div className={classnames([styles.workTable])}>
          <div className={classnames([styles.workTableRow])}>
            <div className={classnames([styles.workTableHeader])}>Role</div>
            <div className={classnames([styles.workTableHeader])}>Client</div>
            <div className={classnames([styles.workTableHeader])}>Year</div>
          </div>
          <div className={classnames([styles.workTableRow])}>
            <div className={classnames([styles.workTableHeader])}>{role}</div>
            <div className={classnames([styles.workTableHeader])}>{client}</div>
            <div className={classnames([styles.workTableHeader])}>{year}</div>
          </div>
        </div>
        <div className={classnames([styles.viewMore])}>
          <Link href={url}>View more</Link>
        </div>
      </div>
    </div>
  );
};
