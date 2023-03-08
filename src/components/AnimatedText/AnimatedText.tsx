"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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

  return (
    <span
      style={{
        padding: "0 24px",
        width: "150px",
        textAlign: "center",
        display: "inline-block",
      }}
    >
      <motion.span>{text}</motion.span>
    </span>
  );
}

export default AnimatedText;
