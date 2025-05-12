import { useEffect } from "react";
import { Hero } from "../components/About/Hero";
import { Pilares } from "../components/About/Pilares";
import { Valores } from "../components/About/Valores";
import { Footer } from "../components/Footer2";
import { Helmet } from "react-helmet";


export function SobreNosotros() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Fundación Neuquén Oeste | Un Gran Ideal Construye un Mundo Mejor</title>
        <meta
          name="description"
          content="Conoce la Fundación Neuquén Oeste, nuestros principios, visión, misión y valores. Desde 1998 trabajando por un mundo mejor a través de la educación y el compromiso comunitario en Neuquén."
        />
        <meta
          name="keywords"
          content="fundación neuquén oeste, sobre nosotros, historia, misión, visión, valores, Neuquén, educación, desarrollo comunitario, colegio, principios, acompañamiento, respeto, compasión, empatía, igualdad, solidaridad, comunidad, fundacion, compromiso social, educación integral, desarrollo sostenible, responsabilidad social, inclusión, bienestar social, trabajo comunitario, formación integral, crecimiento personal, desarrollo humano, conciencia social, educación en valores, desarrollo personal, compromiso educativo, formación continua, educación para la paz, educación inclusiva, desarrollo social, educación de calidad"
        />
        <meta name="author" content="Fundación Neuquén Oeste" />
        <link rel="canonical" href="https://fundacionnqnoeste.com/sobre-nosotros" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacionnqnoeste.com/sobre-nosotros" />
        <meta
          property="og:title"
          content="Fundación Neuquén Oeste: Conoce Nuestro Ideal y Compromiso Comunitario"
        />
        <meta
          property="og:description"
          content="Descubre la historia, los principios y el trabajo de Fundación Neuquén Oeste. Comprometidos con la educación y el desarrollo de la comunidad en Neuquén desde 1998."
        />
        <meta property="og:image" content="https://fundacion.tamnora.com/og-sobre-nosotros.webp" />
        <meta property="og:image:alt" content="Fundación Neuquén Oeste - Un gran ideal construye un mundo mejor" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Hero />
      <div className="bg-isei-footer overflow-hidden">
        <Pilares />
        <Valores />
        <Footer />
      </div>
    </>
  );
}