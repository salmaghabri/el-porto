import { motion, useTransform, useScroll } from "framer-motion";
import { useState } from "react";

import Badge from "./Badge";
import Button from "./Button";
import Line from "./Line";
const Card = ({
  name,
  description,
  tools,
  links,
  progress,
  range,
  targetScale,
  i,
}) => {
  const [visibleDescriptionCount, setVisibleDescriptionCount] = useState(1);

  const scale = useTransform(progress, range, [1, targetScale]);
  const handleShowMore = () => {
    if (visibleDescriptionCount < description.length) {
      setVisibleDescriptionCount(visibleDescriptionCount + 1);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="relative flex flex-col p-8 bg-cream shadow-lg rounded-lg w-3/4 h-3/4 ring-4 ring-cherry"
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="flex flex-col gap-5">
          <div
            className={` inline-block   bg-cream text-2xl text-cherry font-Vioda animate-fadeIn `}
          >
            {name}
            <Line color={"cherry"} width={"1/3"} />
          </div>

          <ul className="space-y-2">
            {description
              .slice(0, visibleDescriptionCount)
              .map((highlight, idx) => (
                <li key={idx} className="text-gray-700">
                  {highlight}
                </li>
              ))}
          </ul>
          {visibleDescriptionCount < description.length && (
            <Button onClick={handleShowMore} text={"show more"} />
          )}
          <Line color={"lime"} width={"3/4"} />
          <div
            className="flex flex-wrap gap-2
        "
          >
            {tools.map((tool, idx) => (
              <Badge key={idx} text={tool} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
