import { useState } from "react";
import educationData from "../filling/educationData";
export default function EducationTimeline() {
  const [visibleItems, setVisibleItems] = useState(2);

  const handleExpand = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 1);
  };

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto">
      {educationData.slice(0, visibleItems).map((edu, index) => (
        <div key={index} className="relative pb-8">
          <span
            className="absolute top-0 left-4 -ml-px h-full w-0.5 bg-lavender"
            aria-hidden="true"
          />
          <div className="relative flex items-start space-x-4">
            <div>
              <span className="h-8 w-8 rounded-full bg-lime flex items-center justify-center ring-8 ring-cream" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-medium text-obsidian">{edu.area}</h3>
              <p className="text-sm text-gray-500">
                {edu.institution} | {edu.startDate} - {edu.endDate}
              </p>
              <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {visibleItems < educationData.length && (
        <button
          onClick={handleExpand}
          className="mt-4 text-lime hover:text-blue-800 font-semibold"
        >
          Show More
        </button>
      )}
    </div>
  );
}
