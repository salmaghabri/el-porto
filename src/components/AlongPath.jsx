import { useScroll, useTransform, motion } from "framer-motion";

import { useRef, useEffect } from "react";
import fromCollege from "../filling/fromCollege";
export default function AlongPath() {
  const container = useRef();
  const paths = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -20 + i * 20 + e * 60 + "%");
      });
    });
  }, []);

  return (
    <>
      <div ref={container} className="mb-16">
        <svg
          className="w-full "
          viewBox="0 60 350 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg "
        >
          <path
            fill="none"
            d="M2.01172 184.291C3.88432 162.288 6.36355 136.755 18.9736 117.969C27.2539 105.633 42.7355 96.5045 58.043 97.767C75.1551 99.1783 84.3809 113.823 91.7761 127.212C105.107 151.348 115.061 188.778 144.377 198.966C186.579 213.633 202.379 163.792 209.556 133.596C214.259 113.814 218.289 85.6191 243.003 81.9486C269.948 77.947 275.242 108.076 281.787 127.117C283.998 133.549 288.065 148.904 296.271 151.511C303.928 153.944 309.637 138.892 311.137 135.026C314.669 125.921 323.671 66.1618 344.298 83.6639C347.457 86.3441 358.528 114.29 364.881 104.819C369.791 97.4977 368.733 66.661 379.365 65.368C388.573 64.2481 393.984 81.2331 404.903 70.7996C411.149 64.8312 408.546 53.8737 408.715 46.5003C409.005 33.8182 409.649 19.932 416.719 8.86023C429.9 -11.7813 458.633 16.4442 466.843 29.729C476.609 45.5326 474.272 66.5666 481.517 83.4733C483.162 87.3117 485.646 86.5226 489.141 86.5226"
            strokeWidth="3"
            id="curve"
          />

          <text className="text-[3px] uppercase" style={{ fill: "red" }}>
            {fromCollege.map((soFunny, i) => {
              return (
                <textPath
                  key={i}
                  ref={(ref) => (paths.current[i] = ref)}
                  startOffset={i * 60 + "%"}
                  href="#curve"
                >
                  {soFunny}
                </textPath>
              );
            })}
          </text>
        </svg>
      </div>
    </>
  );
}
