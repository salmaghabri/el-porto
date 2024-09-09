import { useState } from "react";
import experiences from "../filling/experiences";

export default function ExperienceAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-10 p-4">
      {experiences.map((experience, index) => (
        <div key={index} className="border-b-2 border-b-lime">
          <button
            onClick={() => toggleAccordion(index)}
            className="font-Vioda rounded-tr-md rounded-tl-md w-full flex justify-between items-center p-4 text-cherry focus:outline-none"
          >
            <div className="flex flex-col items-start justify-start">
              <div className="text-lg font-semibold">{experience.role}</div>
              <div className="text-sm font-Cinzel text-obsidian opacity-55">
                @ {experience.company}
              </div>
            </div>
            <div
              className={`transform transition-transform duration-200 ${
                activeIndex === index ? "rotate-[135deg]" : "rotate-0"
              }`}
            >
              <p className="text-3xl text-lime font-Cinzel font-bold">+</p>
            </div>
          </button>
          {activeIndex === index && (
            <div className="mt-2 p-4">
              <p className="text-sm text-obsidian">
                <strong>Dates:</strong> {experience.dates}
              </p>
              <p className="text-sm text-obsidian">
                <strong>Location:</strong> {experience.location}
              </p>
              <ul className="list-disc list-inside mt-2">
                {experience.description.map((desc, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
