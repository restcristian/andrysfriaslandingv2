import { detailedProjects } from "@/utils/mockedDetailedProjects";
import classNames from "classnames";
import React from "react";
import styles from "./detailWork.module.scss";
import {
  fetchWorkPageBySlug,
  getWorkPageRenderTree,
} from "@/services/contentful";
import BannerWorkPageSection from "@/components/Blocks/BannerWorkPageSection";
import { WorkPageSection } from "@/types";
import { DescriptionWorkPageSection } from "@/components/Blocks/DescriptionWorkPageSection";
import ScreenImageWorkPageSection from "@/components/Blocks/ScreenImageWorkPageSection";
import PaletteColorsWorkPageSection from "@/components/Blocks/PaletteColorsWorkPageSection";
import FrameSquareWorkPageSection from "@/components/Blocks/FrameSquareWorkPageSection";
import FrameTextWorkPageSection from "@/components/Blocks/FrameTextWorkPageSection";

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

  const workPage = await fetchWorkPageBySlug(slug);
  const tree = getWorkPageRenderTree(workPage);

  const renderTree = () => {
    const t = {
      [BannerWorkPageSection.name.toUpperCase()]: (props: WorkPageSection) => (
        <BannerWorkPageSection banner={props} />
      ),
      [DescriptionWorkPageSection.name.toUpperCase()]: (
        props: WorkPageSection
      ) => <DescriptionWorkPageSection description={props} />,
      ["SCREENWORKPAGESECTION"]: (props: WorkPageSection) => (
        <ScreenImageWorkPageSection screen={props} />
      ),
      ["PALETTECOLORSWORKPAGESECTION"]: (props: WorkPageSection) => (
        <PaletteColorsWorkPageSection paletteColors={props} />
      ),
      ["SQUAREFRAMEWORKPAGESECTION"]: (props: WorkPageSection) => (
        <FrameSquareWorkPageSection frame={props} />
      ),
      ["FRAMETEXTWORKPAGE"]: (props: WorkPageSection) => (
        <FrameTextWorkPageSection frameText={props} />
      ),
    };
    const nodes = [];
    for (const [key, value] of Object.entries(tree)) {
      const typeNameKey = key.split("-")[0];
      const component = t[typeNameKey.toUpperCase()]?.(value);
      if (component) {
        nodes.push(component);
      }
      console.log(`${key}: ${value}`);
    }
    return nodes;
  };

  return (
    <div className={styles.detailWork}>
      {renderTree()}
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
      {/*  */}
      <div
        className={classNames(styles.frame, styles.thirdScreen)}
        style={{ color: project?.thirdScreen.textColor }}
      >
        <div className={styles.special}>
          <div className={classNames(styles.thirdScreenImageContainer)}>
            <img
              src={project?.thirdScreen.image}
              className={classNames({
                [styles[`minus-mt-${100}`]]:
                  project?.thirdScreen.hasImageOffset,
              })}
            />
          </div>
          <span className={styles.specialTitle}>
            {project?.thirdScreen.title}
          </span>
          <p className={styles.specialText}>{project?.thirdScreen.text}</p>
        </div>
      </div>
      {/*  */}
      <div className={styles.nextProject}>
        <img src={project?.nextProject.image} />
        <div
          className={styles.nextProjectInfo}
          style={{ color: project?.nextProject.textColor }}
        >
          <a
            className={styles.nextProjectLink}
            href={`${project?.nextProject.slug}`}
          >
            <span>
              <span>Next Project</span>
            </span>
            <div className={styles.nextProjectTitle}>
              <span>{project?.nextProject.title}</span>
            </div>
          </a>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
