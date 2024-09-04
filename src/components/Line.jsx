export default function Line({ color, width }) {
  return (
    <div
      className={`border border-current rounded-[80%] w-[${width}]animate-fadeIn text-${color}`}
    ></div>
  );
}
