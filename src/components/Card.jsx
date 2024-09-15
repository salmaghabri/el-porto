import { motion, useTransform } from "framer-motion";
import { useState } from "react";

import Badge from "./Badge";
import Button from "./Button";
import Line from "./Line";

const Card = ({
  name,
  description,
  tools,
  image,
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
        className="relative flex flex-col p-6 sm:p-8 bg-cream shadow-lg rounded-lg w-full h-3/4 sm:w-3/4 sm:h-3/4 ring-4 ring-cherry"
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="flex flex-col h-full ">
          <div className="flex flex-col flex-grow min-h-0  gap-3 sm:gap-5 ">
            <div className="inline-block bg-cream text-xl sm:text-2xl text-cherry font-Vioda animate-fadeIn">
              {name}
              <Line color={"cherry"} width={"1/3"} />
            </div>
            <div className="flex flex-col sm:flex-row  h-full">
              <div className=" w-full space-y-1 sm:space-y-2 overflow-y-auto    max-h-[80%] ">
                {description
                  .slice(0, visibleDescriptionCount)
                  .map((highlight, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base text-obsidian font-semibold"
                    >
                      {highlight}
                    </p>
                  ))}
                <span className="inline-block">
                  {visibleDescriptionCount < description.length && (
                    <Button onClick={handleShowMore}>Tell me more</Button>
                  )}
                </span>
              </div>

              <img
                className="  hidden  md:block md:w-1/2 md:h-4/5 max-h-[300px] object-fill "
                src={image}
                // style={{
                //   backgroundImage: `url(${image})`,
                //   backgroundPosition: "center",
                //   backgroundSize: "cover",
                // }}
              />
            </div>

            <div className="line-wrapper mt-auto mb-4 hidden xs:block sm:mb-6  ">
              <Line color={"lime"} width={"3/4"} />
            </div>
          </div>

          <div className="card-footer  min-h-0 flex justify-between mt-auto">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tools.map((tool, idx) => (
                <Badge key={idx}>{tool}</Badge>
              ))}
            </div>
            <div className="flex gap-1 sm:gap-2 items-center">
              {links.github && (
                <Badge>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </a>
                </Badge>
              )}

              {links.kaggle && (
                <Badge>
                  <a
                    href={links.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="#20beff"
                    >
                      <path d="M 10.351562 4 C 10.117563 4 10 4.1165625 10 4.3515625 L 10 27.644531 C 10 27.878531 10.116563 27.996094 10.351562 27.996094 L 12.648438 27.996094 C 12.882437 27.996094 13.001953 27.879531 13.001953 27.644531 L 13.001953 22.808594 L 14.810547 21.085938 L 20.048828 27.75 C 20.190828 27.915 20.354922 28 20.544922 28 L 23.716797 28 C 23.882797 28 23.977 27.952422 24 27.857422 L 23.933594 27.498047 L 17.023438 18.910156 L 23.650391 12.498047 C 23.773391 12.370047 23.730438 12 23.398438 12 L 20.117188 12 C 19.951187 12 19.785141 12.085953 19.619141 12.251953 L 13 18.974609 L 13 4.3515625 C 13 4.1165625 12.883437 4 12.648438 4 L 10.351562 4 z"></path>
                    </svg>
                  </a>
                </Badge>
              )}
              {links.garden && (
                <Badge>
                  <a
                    href={links.garden}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[24px] h-[24px] "> 🌱 </div>
                  </a>
                </Badge>
              )}
              {links.read && (
                <Badge tooltip={"read more"}>
                  <a
                    href={links.read}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[24px] h-[24px] "> 🔍 </div>
                  </a>
                </Badge>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
