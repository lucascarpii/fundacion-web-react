import { Hero } from "../components/Colegio/Hero";
import { Footer } from "../components/Footer";
import { NivelPrimario } from "../components/Colegio/NivelPrimario";
import { NivelSecundario } from "../components/Colegio/NivelSecundario";
import { SecundarioAdultos } from "../components/Colegio/SecundarioAdultos";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

export function Colegio() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Colegio | Niveles Inicial, Primario y Secundario</title>

        <meta
          name="description"
          content="Descubre la propuesta educativa de Fundación Neuquén Oeste. Ofrecemos Nivel Inicial, Primario y Secundario para niños, jóvenes y adultos. ¡Creciendo juntos por un futuro mejor!"
        />
        <meta
          name="keywords"
          content="colegio, fundación neuquén oeste, fundacion, fundación, educación, nivel inicial, nivel primario, nivel secundario, secundaria adultos, educación integral, creciendo juntos, colegio en neuquén, educación en neuquén, educación inclusiva, educación de calidad, formación integral, valores, compromiso social, comunidad educativa, aprendizaje significativo, desarrollo personal"
        />

        <meta name="author" content="Fundación Neuquén Oeste" />
        <link rel="canonical" href="https://fundacion.tamnora.com/colegio" />

        {/* Open Graph / Facebook - Para compartir en redes sociales */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacion.tamnora.com/colegio" />
        <meta
          property="og:title"
          content="Fundación Neuquén Oeste | Creciendo Juntos por un Futuro Mejor"
        />
        <meta
          property="og:description"
          content="Conoce nuestra innovadora propuesta educativa para Nivel Inicial, Primario y Secundario (jóvenes y adultos) en Fundación Neuquén Oeste."
        />

        <meta property="og:image" content="https://fundacion.tamnora.com/og-colegio.webp" />
        <meta property="og:image:alt" content="Fundación Neuquén Oeste - Colegio" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Hero />
      <NivelPrimario />
      <NivelSecundario />
      <SecundarioAdultos />
      <Footer />
    </>
  )
}