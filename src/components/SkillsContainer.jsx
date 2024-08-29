// import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Define spring animation options
export const spring = {
  gentle: {
    type: "spring",
    mass: 1,
    damping: 50,
    stiffness: 100,
    velocity: 2,
  },
};

const bubbleVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: spring.gentle,
  },
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300 },
  },
};

const skillsData = {
  ml: {
    label: "Machine Learning",
    skills: ["Python", "TensorFlow", "Scikit-Learn"],
  },
  devops: {
    label: "DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
};

const SkillBubble = ({ skills }) => (
  <div className="flex flex-wrap justify-center items-center w-full h-full p-4">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs mx-2 mb-2"
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, left: -50, right: 50, bottom: 50 }}
      >
        {skill}
      </motion.div>
    ))}
  </div>
);

const SkillsContainer = () => {
  return (
    <div className="flex flex-wrap justify-center p-8">
      {Object.keys(skillsData).map((key) => {
        const { label, skills } = skillsData[key];
        return (
          <div
            key={key}
            className="relative flex flex-col items-center mx-6 mb-8"
          >
            <div className="flex items-center justify-center w-48 h-48 bg-gray-200 rounded-full relative p-4">
              <SkillBubble skills={skills} />
            </div>
            <span className="absolute top-full mt-4 text-lg font-bold">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsContainer;
