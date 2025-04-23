/**
 * Script para gerar o tema da aplicação
 * Este script utiliza o themeGenerator para criar um tema personalizado
 * e salva o resultado em um arquivo JSON
 */

import { generateTheme } from '../app/styles/themeGenerator';
import fs from 'fs';
import path from 'path';

const themeConfig = {
  name: 'default',
  colors: {
    primary: '#0066CC',
    secondary: '#2563EB',
    accent: '#10B981'
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
    special: 'Poppins'
  },
  spacing: {
    base: 4,
    scale: 1.5
  }
};

const theme = generateTheme(themeConfig);

// Salva o tema em um arquivo JSON
const themePath = path.join(__dirname, '../app/styles/theme.json');
fs.writeFileSync(themePath, JSON.stringify(theme, null, 2));

console.log('✨ Tema gerado com sucesso!');
console.log(`📝 Arquivo salvo em: ${themePath}`); 