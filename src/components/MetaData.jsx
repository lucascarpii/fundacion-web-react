// MetaDinamic.jsx
import { useEffect } from 'react';


function MetaData({
  title,
  description,
  image,
  url,
  siteName = 'Fundación Neuquén Oeste',
  type = 'website',
  imageAlt = 'Fundación Neuquén Oeste',
}) {
  useEffect(() => {
    // Helper para actualizar o crear meta
    const upsertMeta = (attrKey, attrValue, content) => {
      let selector = `meta[${attrKey}="${attrValue}"]`;
      let tag = document.head.querySelector(selector);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute(attrKey, attrValue);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    // Título de la pestaña
    document.title = title;

    // Meta description
    upsertMeta('name', 'description', description);

    // Open Graph
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', imageAlt);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', siteName);
  }, [title, description, image, url, siteName, type, imageAlt]);

  return null; // No renderiza nada en el DOM
}



export { MetaData };
