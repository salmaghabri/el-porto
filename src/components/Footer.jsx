export default function Footer() {
  return (
    <div
      className="relative h-[200px] bg-obsidian "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[200px] w-full">
        <div className="flex flex-col gap-4  text-cream items-center justify-center">
          <div className="connect flex flex-col">
            <h1>Drop me a line</h1>
            <div className="flex gap-2  ">
              <svg
                // fill=" #fff6ee"
                className="fill-cream transition-colors duration-300 hover:fill-lime "
                viewBox="0 0 92 92"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m22.6354 66.1963h8.4828v-20.6008l-12.1182-9.0887v26.0541c0 2.0116 1.6299 3.6354 3.6354 3.6354z" />
                  <path d="m60.2012 66.1963h8.4827c2.0116 0 3.6354-1.6299 3.6354-3.6354v-26.0541l-12.1181 9.0887" />
                  <path d="m60.2012 29.8421v15.7536l12.1181-9.0887v-4.8472c0-4.4959-5.132-7.0589-8.725-4.3626" />
                  <path d="m31.1172 45.5954v-15.7536l14.5418 10.9063 14.5418-10.9063v15.7536l-14.5418 10.9064" />
                  <path d="m19 31.6598v4.8472l12.1182 9.0887v-15.7536l-3.3931-2.5449c-3.5991-2.6963-8.7251-.1333-8.7251 4.3626z" />
                </g>
              </svg>
              <svg
                className="fill-cream transition-colors duration-300 hover:fill-lime "
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>

              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-cream transition-colors duration-300 hover:fill-lime "
              >
                <path d="m31.937 6.093c-1.177.516-2.437.871-3.765 1.032 1.355-.813 2.391-2.099 2.885-3.631-1.271.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 .521.063 1.021.172 1.495-5.453-.255-10.287-2.875-13.52-6.833-.568.964-.891 2.084-.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-.031-2.083-.328-2.968-.817v.079c0 3.181 2.26 5.833 5.26 6.437-.547.145-1.131.229-1.724.229-.421 0-.823-.041-1.224-.115.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-.521 0-1.041-.025-1.563-.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-.276 0-.557-.021-.839 1.287-.917 2.401-2.079 3.281-3.396z" />
              </svg>
            </div>
          </div>
          <div className="border border-current rounded-[80%] w-3/4 animate-fadeIn text-lime"></div>
          <h1>Designed and Created by Salma</h1>
          <h1>Website built with React, tailwind and framer motion</h1>
        </div>
      </div>
    </div>
  );
}
