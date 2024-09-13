import { useRef } from "react";
import { useScroll } from "framer-motion";
import { projects } from "../filling/projects";
import Card from "../components/Card";
import Footer from "../components/Footer";
export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main
        ref={container}
        className="relative px-6  lg:px-16 lg:pt-12 md:px-8 md:pt-4 sm:px-4    pb-20 sm:pb-16 sm:pt-6"
      >
        {projects.map((project, i) => {
          const targetScale = 1.154465 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              {...project}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
