import React from "react";

import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";

export const ClassesModel = () => {
  return (
    <div>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-onix h-dvh">
        <img
          src="..\src\assets\tech pattern.png"
          alt="tech pattern"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="flex flex-col justify-start items-center h-full">
          <iframe
            width="1080"
            height="620"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=jg-9uBnsUGtVk5MO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
