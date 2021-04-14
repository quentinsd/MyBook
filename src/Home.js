import React from "react";

function Home() {
  return (
    <div>
      <video
        id="videoBG"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        className="fixed left-1/2 top-1/2 min-h-full min-w-full w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="./video/portfolio2.mp4" type="video/mp4" />
      </video>
      <svg x="0" y="0" width="100vw" height="100vh" className="absolute z-0">
        <defs>
          <pattern
            id="diagonalHatch"
            patternUnits="userSpaceOnUse"
            width="3"
            height="5"
            patternTransform="rotate(-45 2 2)"
          >
            <path d="M -1,2 l 6,0" stroke="black" stroke-width="1" />
          </pattern>
        </defs>
        <rect
          x="1"
          y="1"
          width="100vw"
          height="100vh"
          stroke="black"
          stroke-width="0"
          fill="url(#diagonalHatch)"
        />
      </svg>
    </div>
  );
}

export default Home;
