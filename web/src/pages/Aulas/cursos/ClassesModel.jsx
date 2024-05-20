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
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-4x1 text-gray-300 text-center">OI</h2>
          <div className="flex">
            <div className="basis-3/5 mx-40">
              <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl text-center">
                Quem somos nós?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300 text-justify">
                Nosso compromisso com a educação de qualidade é refletido neste
                projeto, que busca promover o letramento digital em regiões
                vulneráveis. Capacitamos indivíduos através de programas de
                formação de alta qualidade, conectando-os diretamente a grandes
                empresas para acesso a empregos dignos e promovendo um
                crescimento profissional significativo.
              </p>
              <div className="">
                <div className="gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-300 flex justify-center">
                  <button className="mt-4 border border-gray-700 rounded-lg px-4 hover:bg-gray-700">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
            <div className="basis-2/5 flex flex-col items-start justify-center h-full">
              <img src="..\src\assets\LOGOVETO.svg" className="h-48 w-auto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
