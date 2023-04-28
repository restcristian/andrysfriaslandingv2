import Page from "@/components/Page/Page";
import React from "react";
import styles from "./work.module.scss";
import peopleFusionImage from "@/assets/images/people_fusion_works@2x.cc16cbed.png";
import { Project } from "./types";
import { ProjectSlide } from "./ProjectSlide";

const projects: Project[] = [
  {
    title: "Fusion TV",
    type: "Email Marketing",
    description:
      "Fusion is a channel from the Univision network focused to hispanic americans. In this project the goal was achieving an email to deliver the most latest and relevant content for the audience.",
    imageUrl: peopleFusionImage.src,
    role: "Designer",
    client: "Univision",
    year: 2017,
    url: "#",
  },
];

export default function Work() {
  return (
    <Page>
      <div className={styles.work}>
        {projects.map((project) => (
          <ProjectSlide project={project} key={project.title} />
        ))}
      </div>
    </Page>
  );
}
