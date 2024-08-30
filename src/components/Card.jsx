import { motion, useTransform, useScroll } from "framer-motion";
const Card = ({ name, highlights, progress, range, targetScale, i }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="relative flex flex-col p-8 bg-white shadow-lg rounded-lg w-1/2 h-1/2 ring-4 ring-lime"
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="text-gray-700">
              {highlight}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Card;
