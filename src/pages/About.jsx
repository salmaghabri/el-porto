import ExperienceAccordion from "../components/ExperienceAccordion";
import { SectionTitle } from "../components/SectionTitle";
import SkillsContainer from "../components/SkillsContainer";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="relative flex items-center justify-center min-h-screen w-full">
        <section>
          <div
            className={` min-h-screen flex items-center justify-center font-Cinzel`}
          >
            <h1 className={`text-5xl text-cherry`}>
              I graduated college and all I got is
            </h1>
            <div className=" w-32 h-full   flex items-center justify-center">
              <div className="bg-gradient-to-r from-cream via-lavender to-lime rounded-tl-[4rem] rounded-tr-[4rem] "></div>
            </div>
            <div className="flex flex-col text-obsidian">
              <h3>
                The skills to build this website from scratch (thanks,
                late-night coding marathons)
              </h3>
              <h3>
                A knack for surviving exams with just two days of studying (a
                real-life superpower).
              </h3>
              <h3>
                Machine learning know-how that makes me sound way smarter at
                parties.
              </h3>
            </div>
          </div>
        </section>
      </div>

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
        <SkillsContainer />
      </section>
      <section>
        <SectionTitle title="Work" id={1} />

        <ExperienceAccordion />
      </section>
    </div>
  );
}
