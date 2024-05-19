import React from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

const stats = [
  { id: 1, name: "Profissionalmente capacitadas", value: "+ 200 pessoas" },
  { id: 2, name: "Certificados de cursos emitidos", value: "+ 1000" },
  { id: 3, name: "Contratados por empresas parceiras", value: "25 alunos" },
];

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div
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
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Quem somos nós?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Nosso compromisso com a educação de qualidade é refletido neste
                projeto, que busca promover o letramento digital em regiões
                vulneráveis. Capacitamos indivíduos através de programas de
                formação de alta qualidade, conectando-os diretamente a grandes
                empresas para acesso a empregos dignos e promovendo um
                crescimento profissional significativo.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <div className="flex items-center">
                  <h1>Oi</h1>
                </div>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                <h1>Teste</h1>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
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
        <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-800 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img
              className="mx-auto h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
              alt=""
            />
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  "Eu estava procurando uma maneira fácil de melhorar minhas
                  habilidades digitais quando encontrei o site de letramento
                  digital. Fiquei impressionada com a variedade de recursos
                  disponíveis e como eles eram fáceis de entender. Os tutoriais
                  passo a passo realmente me ajudaram a ganhar confiança ao usar
                  o computador e a internet. Agora, estou mais confortável
                  navegando online, enviando e-mails e até mesmo participando de
                  cursos online. Recomendo este site para qualquer pessoa que
                  queira melhorar suas habilidades digitais de forma acessível e
                  eficaz."
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white">Judith Black</div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-white">CEO of Workcation</div>
                </div>
              </figcaption>
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
