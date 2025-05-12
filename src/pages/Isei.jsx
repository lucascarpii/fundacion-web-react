import { Footer } from "../components/Footer";
import { Hero } from "../components/Isei/Hero";
import { Blockquote } from "../components/Isei/Blockquote";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export function Isei() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>ISEI - Instituto Superior de Estudios Interdisciplinarios | Fundación Neuquén Oeste</title>
        <meta
          name="description"
          content="Descubre ISEI, el Instituto Superior de Estudios Interdisciplinarios de Fundación Neuquén Oeste. Formamos agentes de transformación social a través de una educación que construye conocimientos y promueve el diálogo y respeto."
        />
        <meta
          name="keywords"
          content="isei, instituto superior, estudios interdisciplinarios, transformación social, neuquén, fundación neuquén oeste, educación superior, campus virtual, deporte social, comunidad restaurativa, mediación, formación, capacitación, educación inclusiva, diálogo, respeto, conocimiento, compromiso social, fundacion"
        />
        <meta name="author" content="ISEI - Instituto Superior de Estudios Interdisciplinarios (Fundación Neuquén Oeste)" />
        <link rel="canonical" href="https://fundacionnqnoeste.com/isei" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacionnqnoeste.com/isei" />
        <meta
          property="og:title"
          content="ISEI | Formamos Agentes de Transformación Social en Neuquén"
        />
        <meta
          property="og:description"
          content="Conoce el ISEI de Fundación Neuquén Oeste y nuestra propuesta para una educación superior comprometida con la transformación social y la comunidad."
        />
        <meta property="og:image" content="https://fundacion.tamnora.com/og-isei.webp" />
        <meta property="og:image:alt" content="ISEI - Instituto Superior de Estudios Interdisciplinarios" />
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