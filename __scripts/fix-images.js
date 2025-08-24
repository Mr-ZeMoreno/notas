#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Regex para encontrar ![[imagen]] o ![Alt](ruta)
const obsidianRegex = /!\[\[([^\]]+)\]\]/g;
const markdownRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;

// Obtiene archivos staged modificados en este commit
const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
  .split('\n')
  .filter(f => f.endsWith('.md'));

function sanitizeFilename(filename: string) {
  return filename
    .replace(/\s+/g, '-')          // espacios → guiones
    .replace(/[()]/g, '')          // eliminar paréntesis
    .replace(/:/g, '-')            // reemplazar : con -
    .replace(/á/g, 'a')            // reemplazar acentos
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u');
}

for (const file of stagedFiles) {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // ![[Captura de pantalla...]]
  content = content.replace(obsidianRegex, (_, filename) => {
    const newName = sanitizeFilename(filename);
    return `![Capture](/img/${newName})`;
  });

  // ![Alt](ruta)
  content = content.replace(markdownRegex, (_, alt, url) => {
    // Solo si es local img/
    if (url.startsWith('/img/')) {
      const filename = path.basename(url);
      const newName = sanitizeFilename(filename);
      return `![${alt}](/img/${newName})`;
    }
    return _;
  });

  fs.writeFileSync(filePath, content, 'utf-8');

  // Añadir los cambios al staging para que el commit tenga la versión modificada
  execSync(`git add ${file}`);
}

console.log('✅ Imágenes y enlaces normalizados en Markdown');
