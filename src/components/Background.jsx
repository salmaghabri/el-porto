export default function Background() {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 -z-10 flex justify-center items-center"
      id="background"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,225,186,1) 0%, rgba(79,62,55,1) 100%);",
        overflow: "hidden",
      }}
    >
      <div className="w-full h-full opacity-[40%] blur-xl ">
        <img
          alt="Background Image"
          src="/assets/laven.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
