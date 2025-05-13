import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { formatDate } from "../lib/tmn";
import { runCode } from "../components/hooks/useRunCode";
import { ArrowRightIcon } from "../icons/ArrowRight";
import { MetaData } from "../components/MetaData";

export function Noticia() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const idDecoded = atob(id);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);



  useEffect(() => {
    const fetchData = async () => {
      // Tu lógica para obtener articleData y relatedArticles se mantiene igual
      const response = await runCode(`-st news -wr id[${idDecoded}]`);
      const article = response.map((a) => ({
        id: a.id,
        title: a.title,
        date: formatDate(a.publish_date)?.fechaCarta,
        // Asegúrate que 'publish_date' también esté disponible si lo necesitas para article:published_time
        // publish_date_iso: a.publish_date, // Ejemplo si necesitas la fecha en formato ISO
        description: a.short_description,
        content: a.content,
        imageUrl: a.featured_image_url, // Esta URL debe ser absoluta para og:image
        category_id: a.category_id,
        idEncoded: btoa(a.news_id),
        // category_name: a.category_name, // Si puedes obtener el nombre de la categoría
      }))[0];
      setArticleData(article);

      if (article?.category_id) {
        const related = await runCode(
          `-st news -wr category_id['${article.category_id}'] AND id<>${article.id} -lt 4`
        );
        const filtered = related
          .filter((a) => a.id !== article.id)
          .map((a) => ({
            id: a.id,
            title: a.title,
            imageUrl: a.featured_image_url,
            idEncoded: btoa(a.id),
          }));
        setRelatedArticles(filtered);
      }
    };

    fetchData();
  }, [id]);

  if (!articleData) return <div className="mt-24 text-center">Cargando...</div>;

  // Construye la URL canónica completa
  const canonicalUrl = `https://fundacion.tamnora.com/noticias/${articleData.idEncoded}`;

  // Asegura que la URL de la imagen para Open Graph sea absoluta
  // Si articleData.imageUrl ya es una URL absoluta, puedes usarla directamente.
  // Si es una ruta relativa (ej: /uploads/imagen.jpg), necesitas anteponer el dominio.
  let ogImageUrl = articleData.imageUrl;
  if (articleData.imageUrl && !articleData.imageUrl.startsWith('http')) {
    ogImageUrl = `https://fundacion.tamnora.com${articleData.imageUrl.startsWith('/') ? '' : '/'}${articleData.imageUrl}`;
  }


  return (
    <>
      <MetaData
        title={articleData.title}
        description={articleData.description}
        image={ogImageUrl}
        url={canonicalUrl}
      />

      <article className="max-w-screen-xl mx-auto px-6 lg:px-0 py-8 mt-[90px] border-t grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex flex-col col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8 hover:bg-zinc-100 px-4 py-2 rounded-lg w-fit">
            <ArrowRightIcon className="rotate-180" />
            Volver atrás
          </Link>
          <h1 className="text-3xl font-bold mb-4">{articleData.title}</h1>
          <p className="text-gray-500 mb-6">{articleData.date}</p>
          <img
            src={articleData.imageUrl} // Usa la URL original para mostrar en la página
            alt={articleData.title}
            className="w-full h-auto mb-6 aspect-video object-cover"
          />
          <p className="text-lg text-gray-700 mb-4">{articleData.description}</p>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />
        </div>

        <div className="border-t lg:border-t-0 lg:border-l h-full w-full p-5">
          <h2 className="text-xl font-bold mb-4">Artículos relacionados</h2>
          {relatedArticles.length > 0 ? (
            <ul className="space-y-4">
              {relatedArticles.map((relatedArticle) => (
                <li key={relatedArticle.id}>
                  <Link
                    to={`/noticias/${relatedArticle.idEncoded}`}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={relatedArticle.imageUrl}
                      alt={relatedArticle.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-lg font-medium">{relatedArticle.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No hay artículos relacionados disponibles.
            </p>
          )}
        </div>
      </article>

      <div className="bg-isei-footer relative overflow-hidden">
        <div className="w-80 lg:w-4/12 aspect-square rounded-full bg-[#3753b0] absolute lg:-top-[30rem] lg:left-[12rem] blur-[150px] lg:blur-[250px]" />
        <Footer />
      </div>
    </>
  );
}