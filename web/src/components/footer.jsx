import React from "react";
import { Typography } from "@material-tailwind/react";

export const Footer = () => {
  return (
    <div className="bg-onix text-gray-300">
      <footer className="flex w-auto flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between mx-10">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2024 Tecnus Saturn - Enactus FACAMP
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sobre Nós
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Licença
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribua
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contato
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
};
