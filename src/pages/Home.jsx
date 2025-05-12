import { Hero } from "../components/Home/Hero";
import { Areas } from "../components/Home/Areas";
import { LatestArticles } from "../components/Home/LatestArticles";
import { PopularArticles } from "../components/Home/PopularArticles";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Home/Banner";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fundación Neuquén Oeste | Transformamos desde el Servicio, Cultivando Comunidad</title>
        <meta
          name="description"
          content="Fundación Neuquén Oeste: Conoce nuestras áreas de trabajo en Comunicación, Deporte, Educación (Instituto Superior y Colegio), Comunidad y Mediación. Transformamos desde el servicio, cultivando comunidad en Neuquén."
        />
        <meta
          name="keywords"
          content="fundación neuquén oeste, Neuquén, servicio, comunidad, educación, deporte, comunicación, mediación, instituto superior, colegio, desarrollo social, transformación social, áreas de trabajo, colegio, mediación comunitaria, prácticas restaurativas, inclusión social, formación, capacitación, diálogo, respeto, valores, bienestar familiar, desarrollo integral, fundacion neuquen oeste, fundacion, fundacion neuquen, fundacion neuquen oeste, fundacion neuquen oeste argentina, fundacion neuquen oeste mediacion, fundacion neuquen oeste comunicacion, fundacion neuquen oeste deporte, fundacion neuquen oeste educacion, fundacion neuquen oeste comunidad, fundacion neuquen oeste isei, fundacion neuquen oeste colegio, fundacion neuquen oeste mediación, fundación neuquén oeste mediación comunitaria"
        />
        <meta name="author" content="Fundación Neuquén Oeste" />
        <link rel="canonical" href="https://fundacionnqnoeste.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacionnqnoeste.com/" />
        <meta
          property="og:title"
          content="Fundación Neuquén Oeste: Servicio y Comunidad en Neuquén"
        />
        <meta
          property="og:description"
          content="Explora las iniciativas y áreas de trabajo de Fundación Neuquén Oeste. Comprometidos con la transformación social, la educación y el cultivo de la comunidad en Neuquén."
        />
        <meta property="og:image" content="https://fundacion.tamnora.com/og-fundacion-principal.webp" />
        <meta property="og:image:alt" content="Fundación Neuquén Oeste - Transformamos desde el servicio, cultivando comunidad" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Hero />
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