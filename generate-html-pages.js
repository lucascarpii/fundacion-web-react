// generate-html-pages.js
// Genera archivos HTML para cada archivo JSX en el directorio "src/pages"
import { readdirSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pageMeta } from './src/pages/meta.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pagesDir = join(__dirname, 'src/pages');
const outputDir = join(__dirname);

// Lista de páginas permitidas
const allowedPages = [
  'colegio',
  'comunicacion',
  'comunidad',
  'deporte',
  'hidroponia',
  'home',
  'isei',
  'mediacion',
  'noticia',
  'sobrenosotros'
];

const htmlTemplate = (meta, jsxFileName) => `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${meta.image}" />
    <meta property="og:url" content="${meta.url}" />
    <link rel="stylesheet" href="/src/index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const name = parse(file).name.toLowerCase();

    // ✅ Filtro aplicado aquí
    if (!allowedPages.includes(name)) {
      console.log(`⏭️  ${name}.jsx no está en la lista permitida. Se omite.`);
      return;
    }

    const meta = pageMeta[name];
    if (!meta) {
      console.warn(`⚠️  No se encontraron metadatos para ${name}. Se omite la generación.`);
      return;
    }

    const folderPath = join(outputDir, name);
    const htmlFilePath = join(folderPath, 'index.html');

    if (!existsSync(folderPath)) {
      mkdirSync(folderPath, { recursive: true });
    }

    const html = htmlTemplate(meta, file);
    writeFileSync(htmlFilePath, html);
    console.log(`✅ ${name}/index.html generado con SEO`);
  }
});
