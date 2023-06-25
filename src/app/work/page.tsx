"use client";
import Page from "@/components/Page/Page";
import React, { useState, useEffect } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import styles from "./work.module.scss";
import { motion, useAnimate } from "framer-motion";
import peopleFusionImage from "@/assets/images/people_fusion_works@2x.cc16cbed.png";
import pantherSuiteImage from "@/assets/images/panther@2x.8db94f47.png";
import haidyImage from "@/assets/images/haidy@2x.59ef8fc0.png";
import SicaImage from "@/assets/images/Sica@2x.f4877532.png";
import { Project } from "./types";
import { ProjectSlide } from "./ProjectSlide";
import { useAppStore } from "@/store/appStore";

const projects: Project[] = [
  {
    title: "Fusion TV",
    type: "Email Marketing!",
    description:
      "Fusion is a channel from the Univision network focused to hispanic americans. In this project the goal was achieving an email to deliver the most latest and relevant content for the audience.",
    imageUrl: peopleFusionImage.src,
    role: "Designer",
    client: "Univision",
    year: 2017,
    url: "/work/fusion-tv",
    backgroundColor: "#6653a6",
    textColor: "white",
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
    url: "/work/panthersuite",
    backgroundColor: "#fff",
    textColor: "black",
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
    url: "/work/haidy-cruz",
    backgroundColor: "#f0494c",
    textColor: "white",
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
    url: "/work/sica",
    backgroundColor: "#edf2f9",
    textColor: "black",
  },
];

export default function Work() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [scope, animate] = useAnimate();
  const { textColor } = useAppStore();
  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % projects.length);
  };

  const previousSlide = () => {
    setActiveSlideIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const enterAnimation = async () => {
    console.log(scope.current);
    scope.current.innerHTML = activeSlideIndex + 1;
    await animate(scope.current, {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    });
  };
  const exitAnimation = async () => {
    await animate(scope.current, { opacity: 0, translateY: -5 });
  };

  // TODO: Fix bug on keyboard navigation.
  useEffect(() => {
    const onKeyUpHandler = (e: KeyboardEvent) => {
      if (!isAnimating) {
        if (e.code === "ArrowLeft" || e.keyCode === 37) {
          previousSlide();
          return;
        }
        if (e.code === "ArrowRight" || e.keyCode === 39) {
          nextSlide();
          return;
        }
      }
    };
    document.addEventListener("keyup", onKeyUpHandler);
    return () => {
      window.removeEventListener("keyup", onKeyUpHandler);
    };
  }, [isAnimating]);

  useEffect(() => {
    if (!isAnimating) {
      enterAnimation();
    } else {
      exitAnimation();
    }
  }, [isAnimating]);


  return (
    <Page>
      <div className={styles.workCounter} style={{ color: textColor }}>
        <div className={styles.workNumbers}>
          <motion.span
            className={styles.workCurrent}
            ref={scope}
            initial={{
              opacity: 0,
              translateY: -5,
            }}
          />

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
            onSlideExit={() => setIsAnimating(false)}
            onSlideEnterComplete={() => setIsAnimating(false)}
            onSlideEnter={() => setIsAnimating(true)}
          />
        ))}
      </div>
      {/* TODO: fix navigation counter bug */}
      <div className={styles.workArrowsContainer}>
        <button onClick={previousSlide}>
          <GrFormPreviousLink size={30} color={textColor} />
        </button>
        <button onClick={nextSlide}>
          <GrFormNextLink size={30} color={textColor} />
        </button>
      </div>
    </Page>
  );
}
