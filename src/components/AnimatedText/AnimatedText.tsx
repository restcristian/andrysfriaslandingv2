"use client";
import React, { useEffect, useState } from "react";
import styles from "./AnimatedText.module.scss";

function AnimatedText() {
  const [text, setText] = useState("");
  const skills = ["UI/UX", "apps", "branding", "editorial", "email", "stuff"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const skill = skills[currentSkillIndex];
    const intervalId = setInterval(() => {
      setText(skill.substring(0, text.length + 1));
    }, 100);
    return () => clearInterval(intervalId);
  }, [currentSkillIndex, skills, text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentSkillIndex((currentSkillIndex + 1) % skills.length);
      setText("");
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [currentSkillIndex, skills]);

  return <span className={styles.animatedText}>{text}</span>;
}

export default AnimatedText;
