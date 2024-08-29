import { useState } from "react";
import experiences from "../filling/experiences";

export default function ExperienceAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-10 p-4  ">
      {experiences.map((experience, index) => (
        <div key={index} className="border-b-2 border-b-lavender">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-obsidian hover:bg-obsidian hover:text-lavender  focus:outline-none"
          >
            <div className="flex flex-col items-start justify-start">
              <div className="text-lg font-medium">{experience.role}</div>
              <div className="text-sm font-Cinzel opacity-55">
                @ {experience.company}
              </div>
            </div>
            <div
              className={`transform transition-transform duration-200 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <svg
                className="w-6 h-6 text-cream"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>
          {activeIndex === index && (
            <div className="mt-2 p-4   ">
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
