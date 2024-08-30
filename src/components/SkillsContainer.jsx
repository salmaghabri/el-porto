import { motion } from "framer-motion";
import skillsData from "../filling/skillsData";

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
    transition: { type: "spring", stiffness: 150 },
  },
};

const SkillBubble = ({ skills }) => (
  <div className="flex flex-wrap justify-center items-center w-full h-full p-4">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className="w-12 h-12 flex items-center justify-center bg-obsidian text-cream rounded-full text-xs mx-2 mb-2 z-30"
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        drag
        dragConstraints={{ top: 0, left: -50, right: 50, bottom: 30 }}
      >
        {skill}
      </motion.div>
    ))}
  </div>
);

export default function SkillsContainer() {
  return (
    <div className="flex flex-wrap justify-center p-8">
      {Object.keys(skillsData).map((key) => {
        const { label, skills } = skillsData[key];
        return (
          <div
            key={key}
            className="relative flex flex-col items-center mx-6 mb-8"
          >
            <div className="flex items-center justify-center w-48 h-48 bg-lavender rounded-full relative p-4">
              <SkillBubble skills={skills} />
              <svg
                viewBox="0 0 120 120"
                className="absolute -rotate-90  top-[-15%] left-0 w-full h-full z-10"
              >
                <path
                  id={label}
                  d="
                    M 60, 60
                    m -50, 0
                    a 50,50 0 1,1 100,0
                    a 50,50 0 1,1 -100,0
                    "
                  fill="transparent"
                />
                <text>
                  <textPath
                    href={`#${label}`}
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {label}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
