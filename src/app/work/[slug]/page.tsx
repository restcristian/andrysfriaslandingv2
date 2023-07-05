import { detailedProjects } from "@/utils/mockedDetailedProjects";
import React from "react";
import styles from "./detailWork.module.scss";

async function getData(slug: string) {
  const currentProject = detailedProjects.find(
    (project) => project.slug === slug
  );
  return currentProject;
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function WorkPage({ params: { slug } }: Props) {
  const project = await getData(slug);
  console.log("res", project);
  return (
    <div className={styles.detailWork}>
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <img src={project?.bannerImageUrl} alt="image" />
        </div>
        <span className={styles.bannerText}>{project?.slug}</span>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionContainer}>
          <span className={styles.descriptionTitle}>
            {project?.description.title}
          </span>
          <p className={styles.descriptionText}>{project?.description.text}</p>
          <div className={styles.descriptionTable}>
            <div className={styles.tableRow}>
              <div className={styles.tableHeader}>Role</div>
              <div className={styles.tableHeader}>Client</div>
              <div className={styles.tableHeader}>Year</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>{project?.description.role}</div>
              <div className={styles.tableCol}>
                {project?.description.client}
              </div>
              <div className={styles.tableCol}>{project?.description.year}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.screen}>
        <div className={styles.screenContainer}>
          <div className={styles.screenImgContainer}>
            <img src={project?.screen.imageUrl} />
          </div>
        </div>
      </div>
      <div className={styles.paletteColors}>
        <span className={styles.paletteColorTitle}>Palette Colors</span>
        <ul className={styles.palettetColorsContainer}>
          {project?.paletteColors.colors.map((color) => (
            <li key={color} style={{ backgroundColor: color }}></li>
          ))}
        </ul>
        <p className={styles.paletteColorsText}>
          {project?.paletteColors.text}
        </p>
      </div>
      <div className={styles.frame}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameSquare}>
            <div className={styles.frameImageContainer}>
              <img src={project?.frame.image} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.special}>
          <span className={styles.specialTitle}>{project?.special.title}</span>
          <p className={styles.specialText}>{project?.special.text}</p>
        </div>
      </div>
      <div
        className={styles.secondScreen}
        style={{ backgroundColor: project?.secondScreen.backgroundColor }}
      >
        <div className={styles.secondScreenWrapper}>
          <div className={styles.secondScreenImageContainer}>
            <img src={project?.secondScreen.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
