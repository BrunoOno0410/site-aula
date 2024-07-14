import React from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

const stats = [
  { id: 1, name: "Profissionalmente capacitadas", value: "+ 200 pessoas" },
  { id: 2, name: "Certificados de cursos emitidos", value: "+ 1000" },
  { id: 3, name: "Contratados por empresas parceiras", value: "25 alunos" },
];

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full">
        <div className="relative isolate overflow-hidden bg-onix h-dvh">
          <img
            src="..\src\assets\tech pattern.png"
            alt="tech pattern"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          {/* <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div> */}
          <div className="flex flex-col items-center h-full">
            <h2 className="text-4xl font-bold tracking-tight text-gray-300 mt-12 sm:text-6xl text-center">
              Quem somos nós?
            </h2>
            <div className="w-full my-24 ml-12">
              <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl text-left">
                Nossos Princípios:
              </h2>
            </div>
            <div className="w-full grid grid-cols-3 grid-rows-3 gap-4 justify-items-center items-center">
              <p className="mt-4 text-xl leading-8 text-gray-300 row-span-2 pt-24 pl-60 font-bold">Conectividade</p>
              <img src="..\src\assets\LOGOVETO.svg" className="h-60 row-span-3" />
              <p className="mt-4 text-xl leading-8 text-gray-300 row-span-2 pt-24 pr-60 font-bold">Tecnologia</p>
              <p className="mt-4 text-xl leading-8 text-gray-300 pl-60 font-bold">União</p>
              <a class="mt-4 text-xl leading-8 text-gray-300 pr-60 font-bold hover:text-white" href="https://enactus.org.br/" target="_blank">Enactus</a>
            </div>
            <p className="mt-16 text-xl leading-8 text-gray-300 text-center mx-80">
            Tecnus vem da junção das palavras: Tecnologia + us (nós em inglês), ou seja tecnus significa a tecnologia que nos une. <br></br>
            Saturn vem do planeta Saturno, o qual seus anéis representam a conectividade e união
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};