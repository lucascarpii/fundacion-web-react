// delete-html-pages.js
// Elimina las carpetas generadas por generate-html-pages.js
import { existsSync, rmSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = __dirname;

// Lista de carpetas permitidas a eliminar
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

allowedPages.forEach(name => {
  const folderPath = join(outputDir, name);

  if (existsSync(folderPath)) {
    try {
      rmSync(folderPath, { recursive: true, force: true });
      console.log(`🗑️  Carpeta ${name}/ eliminada correctamente.`);
    } catch (error) {
      console.error(`❌ Error al eliminar la carpeta ${name}/:`, error);
    }
  } else {
    console.log(`ℹ️  Carpeta ${name}/ no existe. Se omite.`);
  }
});
