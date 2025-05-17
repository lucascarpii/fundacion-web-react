import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "../../icons/ArrowRight";
import { runCode } from "../hooks/useRunCode";
import { formatDate } from "../../lib/tmn";
import { Link } from "react-router-dom";

export const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryColors =
  {
    1: "bg-colegio",
    2: "bg-isei-blue",
    3: "bg-deporte",
    4: "bg-comunicacion",
    5: "bg-yellow-500",
    6: "bg-mediacion",
    7: "bg-lime-500",
  }

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await runCode('-sl news.id -> news_id, title, publish_date, short_description, featured_image_url, category_id, categories.id, categories.name -fr news -ij categories -o categories.id -ig news.category_id -wr is_popular[0] -ob news.id -ds;');
      const fetchedArticles = response.map((article) => ({
        id: article.news_id,
        title: article.title,
        date: formatDate(article.publish_date).fechaCarta,
        description: article.short_description,
        imageUrl: article.featured_image_url,
        categoryId: article.category_id,
        category: article.name,
        idEncoded: btoa(article.news_id),
      }));
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const getVisiblePages = () => {
    const visiblePages = 5;
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
  const section = document.getElementById("last-news");
  if (section) {
    const yOffset = -80; // ajustar según la altura de tu navbar
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}, [currentPage]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-20">
      <h2 className="text-4xl mb-6">Últimas noticias</h2>
      {articles.length === 0 ? (
        <p className="text-gray-500 text-center">No hay noticias disponibles en este momento.</p>
      ) : (
        <>
          <div id="last-news" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
              <Link to={`/noticias/${article.idEncoded}`} key={article.id} className="flex flex-col">
                <div
                  className="bg-gray-300 w-full aspect-[4/3] mb-4 relative"
                  style={{ backgroundImage: `url(${article.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <span className={`absolute text-white ${categoryColors[article.categoryId]} text-sm px-2 py-[1px] rounded-full top-4 right-4`}>{article.category}</span>
                </div>
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
                <p className="text-gray-700 mt-2">{article.description}</p>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12">
            <button
              className={`rounded-full border px-4 py-2.5 font-medium flex items-center justify-center gap-2 w-32 text-sm  ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-black'}`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ArrowRightIcon className="rotate-180 size-5" />
              Anterior
            </button>

            <div className="flex items-center justify-center space-x-2">
              {getVisiblePages().map((page, index) => (
                <button
                  key={index}
                  className={`size-8 text-sm font-medium rounded-full ${currentPage === page
                    ? "bg-lime-300"
                    : "hover:bg-gray-200"
                    }`}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className={`rounded-full border px-4 py-2.5 font-medium flex items-center justify-center gap-2 w-32 text-sm  ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-black'}`}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Siguiente
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
