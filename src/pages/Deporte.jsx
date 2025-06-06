import { Header } from "../components/Header";
import { Hero } from "../components/Deporte/Hero";
import { Blockquote } from "../components/Deporte/Blockquote";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";

export function Deporte() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Deporte - Fundación Neuquén Oeste | Transformando Comunidades"
        description="Descubre cómo el área de Deporte de Fundación Neuquén Oeste transforma comunidades a través de actividades deportivas que fomentan el crecimiento, la vida sana y los vínculos sociales en Neuquén."
        image="https://fundacionnqnoeste.com/image/og-deporte.webp"
        url="https://fundacionnqnoeste.com/deporte"
      />
      
      <Header theme="light" />
      <Hero />
       <section className="-mt-40 lg:-mt-44 flex items-center justify-center relative mb-5">
        <img class="w-full h-full min-h-96 object-cover object-center mask-fade-y-25 " src="/image/secundario_externo.webp" alt="" />
      </section>
      <Blockquote />
      <div className="bg-isei-footer relative overflow-hidden">
        <div
          className="w-80 lg:w-4/12 aspect-square rounded-full bg-[#3753b0] absolute lg:-top-[30rem] lg:left-[12rem] blur-[150px] lg:blur-[250px]"
        >
        </div>
        <Footer />
      </div>
    </>
  );
} 