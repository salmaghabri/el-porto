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
          <div className="card-footer flex justify-between mt-auto">
            <div
              className="flex flex-wrap gap-2
        "
            >
              {tools.map((tool, idx) => (
                <Badge key={idx} text={tool} />
              ))}
            </div>
            <div
              className="flex gap-2 items-center
        "
            >
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 40 40"
                    width="40px"
                    height="40px"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                </a>
              )}

              {links["kaggle"] && (
                <a
                  href={links.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    height="40"
                    width="40"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect fill="#fff" height="512" rx="15%" width="512" />
                    <path
                      d="m106 103c-.06.3-.3.4-.8.4h-8c-.5 0-.9-.2-1.3-.6l-13.154-16.772-3.655 3.477v13c0 .6-.3.9-.9.9h-6.152c-.6 0-.9-.3-.9-.9v-58.505c0-.6.3-.9.9-.9h6.1c.6 0 .9.3.9.9v36l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.149.713.445.119.4.1.6-.1.8l-16.796 16.249c18 21 18 22 18 22"
                      fill="#20beff"
                      transform="matrix(5.5 0 0 5.5 -220 -165)"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
