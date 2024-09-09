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
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 150 },
  },
  drop: {
    y: [0, 100, 0],
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 200,
    },
  },
};

const SkillBubble = ({ skills }) => (
  <div className="relative w-full h-full flex flex-wrap justify-center items-center">
    {skills.map((skill, index) => (
      <motion.img
        key={index}
        className="bubble w-6 h-6 sm:w-6 sm:h-10 md:w-8 md:h-12 lg:w-10 lg:h-16 flex items-center justify-center rounded-full mx-2 mb-2 z-30 object-contain"
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        src={`assets/techno/${skill.toLowerCase()}.svg`}
        alt={skill}
        drag
        dragConstraints={{ top: 0, left: -50, right: 50, bottom: 30 }}
      />
    ))}
  </div>
);

export default function SkillsContainer() {
  return (
    <div className="relative w-full min-h-screen flex flex-wrap justify-center gap-8 py-8">
      {Object.keys(skillsData).map((key, index) => {
        const { label, skills } = skillsData[key];
        return (
          <motion.div
            key={key}
            className="relative flex flex-col items-center w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60"
            transition={{
              type: "spring",
              stiffness: 20,
              damping: 10,
              delay: index * 0.2,
            }}
            drag
            dragConstraints={{ top: 20, left: 25, right: 25, bottom: 20 }}
          >
            <div className="bg-cream relative flex flex-col items-center w-full h-full border-t-4 border-r-4 border-cherry rounded-full p-3">
              <h1 className="font-Cinzel text-cherry font-bold text-xs sm:text-sm md:text-lg border-1 border-cherry p-1 border-b-cream   lg:-mt-[20%] md:-mt-[18%]  mb-2">
                {label}
              </h1>
              <SkillBubble skills={skills} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
