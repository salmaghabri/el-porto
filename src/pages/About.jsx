import EducationTimeline from "../components/EducationTimeline";
import ExperienceAccordion from "../components/ExperienceAccordion";
import { SectionTitle } from "../components/SectionTitle";
import SkillsContainer from "../components/SkillsContainer";
import { useScroll } from "framer-motion";

import { useRef, useEffect } from "react";
import fromCollege from "../filling/fromCollege";

export default function About() {
  const container = useRef();
  const paths = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });
  const offset = 30;
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -offset + i * offset + e * 100 + "%");
      });
    });
  }, []);
  return (
    <div className="flex flex-col w-full " ref={container}>
      <section>
        <h1 className={`text-5xl text-cherry font-Cinzel w-1/3 mt-8`}>
          I graduated college and all I got is
        </h1>
        <svg
          className="w-full border-4 border-cherry "
          viewBox="0 0 411 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg "
        >
          <path
            d="M1.94135 84.9933C8.29316 71.5424 17.2652 56.6245 28.8135 47.0674C44.3557 34.2048 54.8347 46.5269 64.8336 58.5023C73.8649 69.3189 83.0287 85.4901 99.1384 85.7556C115.853 86.0311 123.055 73.9476 128.107 60.2176C132.168 49.1789 144.332 0.515197 164.794 16.2883C177.89 26.3828 180.69 51.3699 199.957 52.9754C222.528 54.8564 224.279 21.5035 237.12 9.33203C262.746 -14.9569 281.678 30.7088 283.718 50.879C286.358 76.9899 260.469 85.5723 241.027 96.6188C236.728 99.0614 214.897 106.832 219.777 114.152"
            id="curve"
          />

          <text className="text-[6px] " style={{ fill: "#d86072" }}>
            {fromCollege.map((soFunny, i) => {
              return (
                <textPath
                  key={i}
                  ref={(ref) => (paths.current[i] = ref)}
                  startOffset={i * offset + "%"}
                  href="#curve"
                >
                  {soFunny}
                </textPath>
              );
            })}
          </text>
        </svg>
      </section>

      <section>
        <SectionTitle title="Hi" id={1} />

        <p className="font-Vioda w-full max-w-full">
          I'm Salma Ghabri, an aspiring software engineer with a passion for
          problem-solving and innovation. My journey in software development has
          been shaped by diverse experiences, from building full-stack web
          applications to conducting research in computer vision. I thrive in
          challenging environments that require creative thinking and
          adaptability. Whether it's mastering new technologies or working
          within dynamic teams, I'm committed to continuous learning and
          delivering impactful solutions.
        </p>
      </section>
      <section>
        <SectionTitle title="Skills" id={3} />

        <SkillsContainer />
      </section>
      <section>
        <SectionTitle title="Education" id={3} />

        <EducationTimeline />
      </section>
      <section>
        <SectionTitle title="Work" id={1} />

        <ExperienceAccordion />
      </section>
    </div>
  );
}
