import { Hero } from "../components/Home/Hero";
import { Areas } from "../components/Home/Areas";
import { LatestArticles } from "../components/Home/LatestArticles";
import { PopularArticles } from "../components/Home/PopularArticles";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Home/Banner";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";
import { RadioPlayer } from "../components/RadioPlayer";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData 
        title="Fundación Neuquén Oeste | Transformamos desde el Servicio, Cultivando Comunidad"
        description="Fundación Neuquén Oeste: Conoce nuestras áreas de trabajo en Comunicación, Deporte, Educación (Instituto Superior y Colegio), Comunidad y Mediación. Transformamos desde el servicio, cultivando comunidad en Neuquén."
        image="https://fundacion.tamnora.com/og-fundacion-principal.webp"
        url="https://fundacion.tamnora.com/"
       />

      <Hero />
      <RadioPlayer />
      <div id="areas" className="relative">
        <Banner />
        <Areas />
      </div>
      <PopularArticles />
      <LatestArticles />
      <div className="bg-isei-footer relative overflow-hidden">
        <div className="w-80 lg:w-4/12 aspect-square rounded-full bg-[#3753b0] absolute lg:-top-[30rem] lg:left-[12rem] blur-[150px] lg:blur-[250px]">
        </div>
        <Footer />
      </div>
    </>
  );
} 