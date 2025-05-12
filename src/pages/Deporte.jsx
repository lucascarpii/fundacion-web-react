import { Header } from "../components/Header";
import { Hero } from "../components/Deporte/Hero";
import { Blockquote } from "../components/Deporte/Blockquote";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export function Deporte() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Deporte - Fundación Neuquén Oeste | Transformando Comunidades</title>
        <meta
          name="description"
          content="Descubre cómo el área de Deporte de Fundación Neuquén Oeste transforma comunidades a través de actividades deportivas que fomentan el crecimiento, la vida sana y los vínculos sociales en Neuquén."
        />
        <meta
          name="keywords"
          content="deporte, fundación neuquén oeste, transformación social, actividades deportivas, fútbol, voley, handball, judo, taekwondo, Neuquén, vida sana, compañerismo, desarrollo comunitario, valores, inclusión, deporte social, fundacion, deporte inclusivo, educación física, formación integral, trabajo en equipo, salud, bienestar, comunidad, fundacion neuquen oeste"
        />
        <meta name="author" content="Fundación Neuquén Oeste - Área Deporte" />
        <link rel="canonical" href="https://fundacionnqnoeste.com/deporte" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacionnqnoeste.com/deporte" />
        <meta
          property="og:title"
          content="Deporte en Fundación Neuquén Oeste: Transformando Vidas y Comunidades"
        />
        <meta
          property="og:description"
          content="Explora las iniciativas deportivas de Fundación Neuquén Oeste. Fomentamos el desarrollo integral, el compañerismo y fortalecemos los lazos comunitarios en Neuquén."
        />
        <meta property="og:image" content="https://fundacion.tamnora.com/og-deporte.webp" />
        <meta property="og:image:alt" content="Actividades Deportivas - Fundación Neuquén Oeste" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Header theme="light" />
      <Hero />
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