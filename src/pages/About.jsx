import EducationTimeline from "../components/EducationTimeline";
import ExperienceAccordion from "../components/ExperienceAccordion";
import SkillsContainer from "../components/SkillsContainer";
import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Footer from "../components/Footer";

export default function About() {
  const container = useRef();
  const paths = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const offset = 70;
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute(
          "startOffset",
          -offset + i * offset + e * offset * 2 + "%"
        );
      });
    });
  }, []);
  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => {
  //     paths.current.forEach((path, i) => {
  //       path.setAttribute(
  //         "startOffset",
  //         -offset + i * offset + e * offset + "%"
  //       );
  //     });
  //   });
  // }, []);

  return (
    <>
      <div
        className="flex flex-col w-full px-4 sm:px-8 lg:px-16"
        ref={container}
      >
        <section className="hidden border-b-4 border-r-4 mt-10 sm:mt-20 border-cherry  flex-col">
          {/* <div className="flex"> */}
          {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl text-cherry font-Cinzel w-full sm:w-2/3 lg:w-1/3 mt-4 sm:mt-8">
            </h1> */}
          <svg className="w-1/2 mb-40" viewBox="0 0 250 90">
            <path
              id="curve"
              fill="none"
              stroke="none"
              d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
            />
            <text className="text-[6px] uppercase" style={{ fill: "red" }}>
              {[...Array(4)].map((_, i) => {
                return (
                  <textPath
                    key={i}
                    ref={(ref) => (paths.current[i] = ref)}
                    startOffset={i * offset + "%"}
                    href="#curve"
                  >
                    I'm about to graduate college and I'm looking for an
                    internship
                  </textPath>
                );
              })}
            </text>
          </svg>
          {/* <svg
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
                 {[...Array(4)].map((_, i) => {
                return (
                  <textPath
                    key={i}
                    ref={(ref) => (paths.current[i] = ref)}
                    startOffset={i * offset + "%"}
                    href="#curve"
                  >
                    I'm about to graduate college and I'm looking for an
                    internship
                  </textPath>
                );
              })}
              </text>
            </svg> */}
          {/* </div> */}
        </section>

        <section className="border-b-4 border-l-4 border-cherry">
          <div className="inline-block -ml-2 sm:-ml-6 mt-4 sm:mt-6 bg-cream text-3xl sm:text-5xl text-cherry font-Cinzel animate-fadeIn">
            Hi
          </div>
          <div className="flex flex-col sm:flex-row mb-6 sm:mb-12">
            <div className=" w-full sm:text-xl sm:max-w-full p-6 sm:p-12 font-semibold lg:p-24">
              <p className="">
                I'm Salma Ghabri, a software engineering student from Tunisia.
                I'm passionate about engineering and the process of building
                useful and reliable systems. My journey in software engineering
                has been shaped by diverse experiences, from building full-stack
                web applications to conducting research in computer vision. And
                so far, each step has deepened my appreciation for engineering.
              </p>
              <p className=" w-full sm:text-xl ">
                ps: I'm currently in my final semester and actively seeking an
                end-of-studies internship.
              </p>
            </div>
            <div
              className=" rounded-tl-full rounded-tr-full self-end sm:self-auto  w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-cover"
              style={{ backgroundImage: `url(assets/eni.jpg)` }}
            ></div>
          </div>
        </section>

        <section className="border-b-4 border-r-4 border-cherry">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl -mt-[4%] sm:-mt-[6%] ml-auto sm:ml-[80%] text-cherry font-Cinzel bg-cream animate-fadeIn inline-block">
            Skills
          </h1>
          <div className="flex flex-col-reverse sm:flex-row pt-6 sm:pt-12">
            <SkillsContainer />
            <p className="font-semibold text-lg sm:text-xl sm:w-1/3">
              This is what I am most familiar with: either studied at university
              or used for work. I'm well aware that technologies evolve but I’ve
              picked up the core principles that make learning new languages and
              technologies feel like second nature.
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
