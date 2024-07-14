import React from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
// import { Carousel } from "@material-tailwind/react";
import { Carousel } from "../../components/Carousel";
import { Link } from "react-router-dom";

const stats = [
  { id: 1, name: "Vidas impactadas", value: "+ 390 alunos" },
  { id: 2, name: "Certificados emitidos", value: "+ 200" },
  { id: 3, name: "Comunidades atendidas", value: "4" },
];

export const LandingPage = () => {
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
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex">
              <div className="basis-3/5 mx-40">
                <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl text-center">
                  Quem somos nós?
                </h2>
                <p className="mt-4 text-2xl leading-8 text-gray-300 text-justify">
                  Nosso compromisso com a educação de qualidade é refletido
                  neste projeto, que busca promover o letramento digital em
                  regiões vulneráveis. Capacitamos indivíduos através de
                  programas de formação de alta qualidade, conectando-os
                  diretamente a grandes empresas para acesso a empregos dignos e
                  promovendo um crescimento profissional significativo.
                </p>
                <div>
                  <div className="gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-300 flex justify-center">
                    <Link
                      to="/aboutUs"
                      className="mt-4 text-xl border border-gray-700 rounded-lg px-4 hover:bg-gray-700"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="basis-2/5 flex flex-col items-start justify-center h-full">
                <img src="..\src\assets\LOGOVETO.svg" className="h-48 w-auto" />
              </div>
            </div>
            <div className="flex-col w-full mt-32">
              <div className="justify-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl text-center">
                  Quais cursos oferecemos?
                </h2>
              </div>
              <div className="flex mt-16">
                <div className="basis-1/4 ml-16">
                  <p className="text-2xl leading-8 text-gray-300 text-left">
                    Cursos básicos e profissionalizantes de tecnologia e
                    empreendedorismo
                  </p>
                  <div className="text-gray-300">
                    <button className="mt-4 text-xl border border-gray-700 rounded-lg px-4 hover:bg-gray-700">
                      Ver mais detalhes
                    </button>
                  </div>
                </div>
                <Carousel/>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <section className="relative isolate overflow-hidden bg-onix px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-onix shadow-xl shadow-indigo-600/10 ring-1 ring-gray-900 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-300 sm:text-2xl sm:leading-9">
                <p>
                  Desde o segundo semestre de 2023, o Projeto Tecnus Saturn passou 
                  por um período de reformulação, sendo repensado para melhor atender 
                  nossos alunos. Durante essa fase, tivemos pouco contato com novas 
                  e antigas comunidades.

                  Atualmente, com o projeto renovado, estamos entusiasmados em 
                  anunciar nossa parceria com a comunidade do Núcleo Recanto e a 
                  OSC Alecrim em Flor. As aulas terão início no segundo semestre de 
                  2024 e estamos ansiosos para impactar ainda mais vidas com nossas 
                  novas aulas de tecnologia.

                  Nosso objetivo é proporcionar conhecimentos tecnológicos que 
                  capacitem nossos alunos, promovendo inclusão digital e oportunidades 
                  de desenvolvimento pessoal e profissional.
                </p>
              </blockquote>
            </figure>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

//TODO - Criar script no yarn (rodar tailwind junto de vite)
// npx tailwindcss -i ./input.css -o ./output.css --watch
