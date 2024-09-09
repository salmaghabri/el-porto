import { useState } from "react";
import educationData from "../filling/educationData";
import Button from "./Button";
import Badge from "./Badge";
export default function EducationTimeline() {
  const [visibleItems, setVisibleItems] = useState(2);

  const handleExpand = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 1);
  };

  return (
    <div className="flex flex-col items-start w-full max-w-2xl mb-6 mx-4 sm:mx-auto sm:mb-9">
      {educationData.slice(0, visibleItems).map((edu, index) => (
        <div key={index} className="relative pb-6 sm:pb-8">
          <span
            className="absolute top-0 left-3 sm:left-4 -ml-px h-full w-1 bg-lime"
            aria-hidden="true"
          />
          <div className="relative flex items-start space-x-3 sm:space-x-4">
            <div>
              <span className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-lime flex items-center justify-center ring-6 sm:ring-8 ring-cream" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg text-cherry font-Cinzel font-semibold ">
                {edu.area}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-Vioda font-semibold">
                {edu.institution} | {edu.startDate} - {edu.endDate}
              </p>
              <p className="text-sm sm:text-base font-Vioda font-semibold text-obsidian">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium accusantium aliquam explicabo ipsam perferendis, esse
                accusamus omnis veritatis exercitationem eos.
              </p>
              <div className="mt-2 flex gap-2 sm:gap-3 flex-wrap ">
                {edu.highlights.map((highlight, idx) => (
                  <Badge key={idx}>{highlight}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {visibleItems < educationData.length && (
        <div className="mt-4">
          <Button onClick={handleExpand}>More</Button>
        </div>
      )}
    </div>
  );
}
