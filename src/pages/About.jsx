import EducationTimeline from "../components/EducationTimeline";
import ExperienceAccordion from "../components/ExperienceAccordion";
import SkillsContainer from "../components/SkillsContainer";
import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import fromCollege from "../filling/fromCollege";
import actualFromCollege from "../filling/actualFromCollege";
import Footer from "../components/Footer";

export default function About() {
  const container = useRef();
  const paths = useRef([]);
  const paths2 = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const offset = 40;
  const offset2 = 20;

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute(
          "startOffset",
          -offset + i * offset + e * offset + "%"
        );
      });
      paths2.current.forEach((path, i) => {
        path.setAttribute(
          "startOffset",
          -offset2 + i * offset2 + e * offset2 + "%"
        );
      });
    });
  }, []);

  return (
    <>
      <div
        className="flex flex-col w-full px-4 sm:px-8 lg:px-16"
        ref={container}
      >
        <section className="border-b-4 border-r-4 mt-10 sm:mt-20 border-cherry flex flex-col">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-cherry font-Cinzel w-full sm:w-2/3 lg:w-1/3 mt-4 sm:mt-8">
            I graduated college and all I got is
          </h1>
          <div className="relative w-full">
            <svg
              className="w-full"
              viewBox="0 0 620 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.82843 1.91806C161.175 42.6282 320.776 72.7675 483.077 99.8834C523.933 106.709 765.157 144.66 827.821 156.201C870.669 164.093 900.988 168.129 937.721 185.665C950.359 191.698 968.553 202.983 968.553 218.983"
                id="curve"
              />
              <text
                className="text-[4px] sm:text-[6px]"
                style={{ fill: "#d86072" }}
              >
                {fromCollege.map((soFunny, i) => (
                  <textPath
                    key={i}
                    ref={(ref) => (paths.current[i] = ref)}
                    startOffset={i * offset + "%"}
                    href="#curve"
                  >
                    {soFunny}
                  </textPath>
                ))}
              </text>
            </svg>
            <svg
              className="absolute -top-1/4 w-full"
              viewBox="0 0 711 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 36.8008C139.903 42.6597 277.933 25.9411 413.175 10.7021C469.626 4.3412 528.497 -3.01468 585.111 6.70571C611.244 11.1926 634.616 19.582 658 27.9925"
                id="curve2"
              />
              <text
                className="text-[4px] sm:text-[5px]"
                style={{ fill: "#d86072" }}
              >
                {actualFromCollege.map((notFunny, i) => (
                  <textPath
                    key={i}
                    ref={(ref) => (paths2.current[i] = ref)}
                    startOffset={i * offset2 + "%"}
                    href="#curve2"
                  >
                    {notFunny}
                  </textPath>
                ))}
              </text>
            </svg>
          </div>
        </section>

        <section className="border-b-4 border-l-4 border-cherry">
          <div className="inline-block -ml-2 sm:-ml-6 mt-4 sm:mt-6 bg-cream text-3xl sm:text-5xl text-cherry font-Cinzel animate-fadeIn">
            Hi
          </div>
          <div className="flex flex-col sm:flex-row mb-6 sm:mb-12">
            <p className="font-Vioda w-full sm:max-w-full p-6 sm:p-12 lg:p-24">
              I'm Salma Ghabri, an aspiring software engineer with a passion for
              problem-solving and innovation. My journey in software development
              has been shaped by diverse experiences, from building full-stack
              web applications to conducting research in computer vision. I
              thrive in challenging environments that require creative thinking
              and adaptability. Whether it's mastering new{" "}
              <span className="animated-link">technologies </span>or working
              within dynamic teams, I'm committed to continuous learning and
              delivering impactful solutions.
            </p>
            <div
              className="border-4 rounded-tl-full rounded-tr-full border-lavender w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-cover"
              style={{ backgroundImage: `url(assets/eni.jpg)` }}
            ></div>
          </div>
        </section>

        <section className="border-b-4 border-r-4 border-cherry">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl -mt-[4%] sm:-mt-[6%] ml-auto sm:ml-[80%] text-cherry font-Cinzel bg-cream animate-fadeIn inline-block">
            Skills
          </h1>
          <div className="flex flex-col sm:flex-row pt-6 sm:pt-12">
            <SkillsContainer />
            <p className="font-Vioda font-semibold text-lg sm:text-xl">
              This is what I am familiar with: either studied at uni or used for
              work
            </p>
          </div>
        </section>

        <section className="border-b-4 border-l-4 border-cherry">
          <div className="inline-block -rotate-90 bg-cream text-3xl sm:text-5xl text-cherry font-Cinzel animate-fadeIn -translate-x-24 sm:-translate-x-36 translate-y-20 sm:translate-y-32">
            Education
          </div>
          <EducationTimeline />
        </section>

        <section className="border-b-4 border-r-4 border-cherry">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl -mt-[4%] sm:-mt-[6%] ml-[40%] sm:ml-[50%] border-4 border-cherry px-4 border-t-transparent text-cherry font-Cinzel animate-fadeIn bg-cream inline-block">
            Work
          </h1>
          <ExperienceAccordion />
        </section>
      </div>
      <Footer />
    </>
  );
}
