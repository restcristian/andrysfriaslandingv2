import styles from "./work.module.scss";
import classnames from "classnames";
import Link from "next/link";
import { Project } from "./types";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  project: Project;
  isActive: boolean;
  onSlideExit: () => void;
}

export const ProjectSlide: React.FC<Props> = ({
  project,
  isActive,
  onSlideExit,
}) => {
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
    <AnimatePresence onExitComplete={onSlideExit}>
      {isActive && (
        <motion.div
          className={classnames([
            styles.slide,
            {
              [styles.isActive]: isActive,
            },
          ])}
        >
          <motion.div
            className={classnames([styles.slideColumn, styles.columnPic])}
            initial={{
              opacity: 0,
              translateX: -30,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.7,
                delay: 0.7,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              translateX: -30,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <img src={imageUrl} />
          </motion.div>
          <motion.div
            className={classnames([
              styles.slideColumn,
              styles.columnInformation,
            ])}
            initial={{
              opacity: 0,
              translateX: 30,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: 0.7,
                delay: 0.7,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              translateX: 30,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <div className={classnames([styles.workType])}>
              <span>{type}</span>
            </div>
            <div className={classnames([styles.workTitle])}>
              <span>{title}</span>
            </div>

            <p className={classnames([styles.workDescription])}>
              {description}
            </p>

            <div className={classnames([styles.workTable])}>
              <div className={classnames([styles.workTableRow])}>
                <div className={classnames([styles.workTableHeader])}>Role</div>
                <div className={classnames([styles.workTableHeader])}>
                  Client
                </div>
                <div className={classnames([styles.workTableHeader])}>Year</div>
              </div>
              <div className={classnames([styles.workTableRow])}>
                <div className={classnames([styles.workTableHeader])}>
                  {role}
                </div>
                <div className={classnames([styles.workTableHeader])}>
                  {client}
                </div>
                <div className={classnames([styles.workTableHeader])}>
                  {year}
                </div>
              </div>
            </div>
            <div className={classnames([styles.viewMore])}>
              <Link href={url}>View more</Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
