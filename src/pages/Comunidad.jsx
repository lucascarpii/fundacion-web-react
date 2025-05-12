import { Hero } from "../components/Comunidad/Hero";
import { Blockquote } from "../components/Comunidad/Blockquote";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export function Comunidad() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Comunidad - Fundación Neuquén Oeste | Un Presente con Conciencia</title>
        <meta
          name="description"
          content="El área de Comunidad de Fundación Neuquén Oeste impulsa un presente con conciencia, acompañando a familias, mujeres y niños a través del apoyo comunitario, talleres y charlas informativas en Neuquén."
        />
        <meta
          name="keywords"
          content="comunidad, fundación neuquén oeste, presente con conciencia, apoyo comunitario, desarrollo infantil, talleres, charlas informativas, Neuquén, valores, vínculos familiares, prevención, ayuda escolar, acompañamiento, mujeres, niños, familia, educación, inclusión social, desarrollo comunitario, fundacion, comunidad, bienestar familiar, desarrollo integral"
        />
        <meta name="author" content="Fundación Neuquén Oeste - Área Comunidad" />
        <link rel="canonical" href="https://fundacionnqnoeste.com/comunidad" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacionnqnoeste.com/comunidad" />
        <meta
          property="og:title"
          content="Comunidad en Fundación Neuquén Oeste: Impulsando un Presente con Conciencia"
        />
        <meta
          property="og:description"
          content="Conoce cómo el área de Comunidad de Fundación Neuquén Oeste trabaja por el bienestar familiar y el desarrollo integral, fortaleciendo vínculos y valores en Neuquén."
        />
        <meta property="og:image" content="https://fundacion.tamnora.com/og-comunidad.webp" />
        <meta property="og:image:alt" content="Trabajo Comunitario - Fundación Neuquén Oeste" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Hero />
      <Blockquote />
      <Footer />
    </>
  );
}