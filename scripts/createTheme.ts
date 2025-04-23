import fs from 'fs';
import path from 'path';
import { generateTheme } from '../app/styles/themeGenerator';

// Função para criar um novo tema
function createNewTheme(themeName: string, config: any) {
  const theme = generateTheme({
    name: themeName,
    ...config,
  });

  // Caminho para o arquivo de temas
  const themesPath = path.join(process.cwd(), 'app/styles/themes.ts');

  // Lê o conteúdo atual do arquivo
  let content = fs.readFileSync(themesPath, 'utf8');

  // Adiciona o novo tema antes do objeto themes
  const newThemeContent = `
// Tema ${themeName}
export const ${themeName}Theme = generateTheme({
  name: '${themeName}',
  colors: {
    primary: '${config.colors.primary}',
    secondary: '${config.colors.secondary}',
    ${config.colors.accent ? `accent: '${config.colors.accent}',` : ''}
  },
  fonts: {
    heading: '${config.fonts?.heading || 'Montserrat'}',
    body: '${config.fonts?.body || 'Inter'}',
    special: '${config.fonts?.special || 'Poppins'}',
  },
  spacing: {
    base: ${config.spacing?.base || 4},
    scale: ${config.spacing?.scale || 1.5},
  },
});

`;

  // Encontra a posição onde adicionar o novo tema
  const themesExportIndex = content.indexOf('export const themes = {');
  content = content.slice(0, themesExportIndex) + newThemeContent + content.slice(themesExportIndex);

  // Atualiza o objeto themes
  const themesRegex = /export const themes = {([^}]*)}/;
  content = content.replace(
    themesRegex,
    `export const themes = {
  ${themeName.toLowerCase()}: ${themeName}Theme,
  $1}`
  );

  // Salva o arquivo atualizado
  fs.writeFileSync(themesPath, content);

  console.log(`✅ Tema "${themeName}" criado com sucesso!`);
}

// Exemplo de uso:
// createNewTheme('Nature', {
//   colors: {
//     primary: '#2e7d32',
//     secondary: '#1b5e20',
//     accent: '#81c784',
//   },
//   fonts: {
//     heading: 'Poppins',
//     body: 'Inter',
//     special: 'Montserrat',
//   },
//   spacing: {
//     base: 4,
//     scale: 1.5,
//   },
// });

export { createNewTheme }; 