import { Hero } from "../components/Hidroponia/Hero";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export function Hidroponia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Hidroponía Neuquén Oeste - Fundación Neuquén Oeste | Cultivando Futuro</title>
        <meta
          name="description"
          content="Descubre el invernadero hidropónico de Fundación Neuquén Oeste, un laboratorio vivo impulsado por energía solar donde cultivamos conciencia, valores y futuro de manera sostenible en Neuquén."
        />
        <meta
          name="keywords"
          content="hidroponía, fundación neuquén oeste, Neuquén Oeste, energía solar, invernadero, sostenible, laboratorio vivo, cultivo, conciencia, valores, futuro, CALF, sustentabilidad, educación ambiental, comunidad, fundacion, hidroponía en Neuquén, cultivo sin suelo, agricultura urbana, tecnología sostenible, innovación, desarrollo comunitario, educación, formación integral, responsabilidad social, medio ambiente, producción sostenible"
        />
        <meta name="author" content="Fundación Neuquén Oeste - Hidroponía Neuquén Oeste" />
        <link rel="canonical" href="https://fundacionnqnoeste.com/hidroponia" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacionnqnoeste.com/hidroponia" />
        <meta
          property="og:title"
          content="Hidroponía Neuquén Oeste: Innovación Sostenible y Educación | Fundación Neuquén Oeste"
        />
        <meta
          property="og:description"
          content="Explora nuestro invernadero hidropónico con energía solar en Fundación Neuquén Oeste. Un espacio de aprendizaje colaborativo y respeto por la sustentabilidad para estudiantes y la comunidad."
        />
        <meta property="og:image" content="/og-hidroponia.png" />
        <meta property="og:image:alt" content="Hidroponía Neuquén Oeste - Invernadero con Energía Solar" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Hero />
      <Footer />
    </>
  );
}