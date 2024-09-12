import { useState } from "react";
import experiences from "../filling/experiences";

export default function ExperienceAccordion() {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      // If index is already open, close it by removing it from the array
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // If index is not open, add it to the array
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-10 p-4">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`${
            !openIndices.includes(index) ? "border-b-2 border-b-cherry " : ""
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`font-Vioda w-full flex justify-between items-center p-4 pb-2 text-cherry focus:outline-none  ${
              openIndices.includes(index)
                ? "border-4 border-b-0 border-cherry "
                : "rotate-0"
            }`}
          >
            <div className="flex flex-col items-start justify-start">
              <div className="text-lg font-semibold">{experience.role}</div>
              <div className="text-sm font-Cinzel text-obsidian opacity-55">
                @ {experience.company}
              </div>
            </div>
            <div
              className={`transform transition-transform duration-200 ${
                openIndices.includes(index) ? "rotate-[135deg]" : "rotate-0"
              }`}
            >
              <p className="text-3xl text-lime font-Cinzel font-bold">+</p>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out  p-4 border-4 border-cherry  border-t-0 font-Vioda font-semibold text-3xl ${
              openIndices.includes(index)
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-obsidian text-end">{experience.dates}</p>

            <ul className="custom-list list-outside  mt-2">
              {experience.description.map((desc, i) => (
                <li key={i} className="text-sm text-obsidian custom-list-item">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
