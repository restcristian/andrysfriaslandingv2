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
import CenterImageWorkPageSection from "@/components/Blocks/CenterImageWorkPageSection";
import NextProjectWorkPageSection from "@/components/Blocks/NextProjectWorkPageSection";

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
      ["CENTERIMAGEWORKPAGESECTION"]: (props: WorkPageSection) => (
        <CenterImageWorkPageSection screen={props} />
      ),
      ["NEXTPROJECTWORKPAGESECTION"]: (props: WorkPageSection) => (
        <NextProjectWorkPageSection nextProject={props} />
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

  if (!workPage) return <div>no workpage found</div>;
  return (
    <div className={styles.detailWork}>
      {renderTree()}
      {/*  */}
    </div>
  );
}
