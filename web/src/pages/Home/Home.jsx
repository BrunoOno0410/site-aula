import React from "react";
import { Navbar } from "../../components/navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="bg-red-400">Bem-vindo ao Site do TECNUS!</h1>
        <p>Aprenda a ler e escrever de forma divertida e interativa.</p>
        <button>Inscreva-se Agora</button>
      </div>
    </>
  );
};

//TODO - Criar script no yarn (rodar tailwind junto de vite)
// npx tailwindcss -i ./input.css -o ./output.css --watch
