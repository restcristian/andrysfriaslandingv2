"use client";
import Page from "@/components/Page/Page";
import React, { useState } from "react";
import styles from "./work.module.scss";
import peopleFusionImage from "@/assets/images/people_fusion_works@2x.cc16cbed.png";
import pantherSuiteImage from "@/assets/images/panther@2x.8db94f47.png";
import haidyImage from "@/assets/images/haidy@2x.59ef8fc0.png";
import SicaImage from "@/assets/images/Sica@2x.f4877532.png";

import { Project } from "./types";
import { ProjectSlide } from "./ProjectSlide";
import { useMyScroll } from "@/hooks";

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
  {
    title: "PantherSuite",
    type: "Website",
    description:
      "Panther Suite is a project that contains a library of concerts near you. The idea is to make easy the way you find for every concert. This project is still in development to optimize the search.",
    imageUrl: pantherSuiteImage.src,
    role: "UI / UX Designer",
    client: "Personal",
    year: 2017,
    url: "#",
  },
  {
    title: "Haidy Cruz",
    type: "E-commerce",
    description:
      "Haidy Cruz is a personal trainer and nutritional guide from Dominican Republic, known as the Queen of fitness with several awards in competitions.",
    imageUrl: haidyImage.src,
    role: "UI / UX Designer",
    client: "Haidy Cruz",
    year: 2019,
    url: "#",
  },
  {
    title: "SICA",
    type: "Branding",
    description:
      "The Central American Integration System (SICA) is an international organization that has been leading the economic and political side of Central American states since 1993.",
    imageUrl: SicaImage.src,
    role: "Branding Designer",
    client: "DR Goverment",
    year: 2017,
    url: "#",
  },
];

export default function Work() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(null);
  const { direction } = useMyScroll();

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % projects.length);
  };

  const previousSlide = () => {
    setActiveSlideIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const onSlideNext = () => {
    setActiveSlideIndex(-1);
  };

  const onSlideExit = () => {};

  return (
    <Page>
        <div className={styles.workCounter}>
          <div className={styles.workNumbers}>
            <span className={styles.workCurrent}>1</span>
            <span className={styles.workPipe}>|</span>
            <span className={styles.workTotal}>{projects.length}</span>
          </div>
          <div className={styles.workCounterLabel}>Projects</div>
        </div>
      <div className={styles.work}>
        {projects.map((project, index) => (
          <ProjectSlide
            project={project}
            key={project.title}
            isActive={index === activeSlideIndex}
            onSlideExit={onSlideExit}
          />
        ))}
      </div>
      <button
        onClick={previousSlide}
        style={{ zIndex: 600, position: "relative" }}
      >
        previous
      </button>
      <button onClick={nextSlide} style={{ zIndex: 600, position: "relative" }}>
        next
      </button>
    </Page>
  );
}
