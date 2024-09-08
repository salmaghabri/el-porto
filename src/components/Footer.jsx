import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("salmaghabri@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      className="relative h-[200px] bg-obsidian "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[200px] w-full pt-4">
        <div className="flex flex-col gap-4  text-cream items-center justify-center">
          <div className="connect flex flex-col gap-4 ">
            <h1 className="font-bold font-Vioda text-xl ">Drop me a line</h1>
            <div className="flex gap-2">
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={handleCopy}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                  className="fill-cream transition-colors duration-300 hover:fill-lime cursor-pointer"
                >
                  <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                </svg>

                {copied && (
                  <div className="absolute -bottom-[120%] -left-1/2 bg-cherry  text-lime text-xs w-[6rem] px-3 py-1 rounded-md ">
                    Email copied!
                  </div>
                )}
              </div>

              <svg
                className="fill-cream transition-colors duration-300 hover:fill-lime"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>

              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-cream transition-colors duration-300 hover:fill-lime"
              >
                <path d="m31.937 6.093c-1.177.516-2.437.871-3.765 1.032 1.355-.813 2.391-2.099 2.885-3.631-1.271.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 .521.063 1.021.172 1.495-5.453-.255-10.287-2.875-13.52-6.833-.568.964-.891 2.084-.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-.031-2.083-.328-2.968-.817v.079c0 3.181 2.26 5.833 5.26 6.437-.547.145-1.131.229-1.724.229-.421 0-.823-.041-1.224-.115.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-.521 0-1.041-.025-1.563-.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-.276 0-.557-.021-.839 1.287-.917 2.401-2.079 3.281-3.396z" />
              </svg>
            </div>
          </div>
          <div className="border border-current rounded-[80%] w-3/4  text-cherry"></div>
          <div className="text-center  font-Vioda font-semibold">
            <h1 className=" text-lime ">
              Website built by Salma with React, Tailwind and Framer motion
            </h1>
            <h1 className="font-medium text-lime opacity-45">
              Last update Sept 2024
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
