#!/usr/bin/env node
/**
 * CLI para gerenciamento de temas
 * Este script permite gerenciar temas da aplicação através de um menu interativo
 * 
 * Uso:
 * npm run theme
 */

import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para carregar os temas disponíveis
async function loadThemes() {
  try {
    const themesPath = path.join(process.cwd(), 'app/styles/themes.ts');
    const themesContent = await fs.readFile(themesPath, 'utf-8');
    
    // Extrai os nomes dos temas do arquivo
    const themeMatches = themesContent.match(/export const (\w+)Theme/g);
    if (!themeMatches) return [];
    
    return themeMatches.map(match => {
      const name = match.replace('export const ', '').replace('Theme', '');
      return {
        name,
        value: name.toLowerCase(),
        short: name
      };
    });
  } catch (error) {
    console.error(chalk.red('\nErro ao carregar temas:'), error);
    return [];
  }
}

// Função para validar cor hex
function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

// Função para atualizar o tema padrão
async function updateDefaultTheme(themeName: string) {
  try {
    const configPath = path.join(process.cwd(), 'app/config/theme.ts');
    let content = `// Arquivo gerado automaticamente pelo theme-cli
import { ${themeName}Theme } from '../styles/themes';

export const defaultTheme = ${themeName}Theme;
`;
    
    await fs.writeFile(configPath, content, 'utf-8');
    return true;
  } catch (error) {
    console.error(chalk.red('\nErro ao atualizar tema padrão:'), error);
    return false;
  }
}

// Função para listar temas
async function listThemes() {
  const themes = await loadThemes();
  if (themes.length === 0) {
    console.log(chalk.yellow('\nNenhum tema encontrado.'));
    return;
  }

  console.log(chalk.blue('\nTemas disponíveis:'));
  themes.forEach(theme => {
    console.log(chalk.green(`• ${theme.name}`));
  });
  console.log();
}

// Função para usar um tema
async function useTheme() {
  const themes = await loadThemes();
  
  if (themes.length === 0) {
    console.log(chalk.yellow('\nNenhum tema disponível para selecionar.'));
    return;
  }

  const answer = await inquirer.prompt([{
    type: 'list',
    name: 'theme',
    message: 'Escolha um tema:',
    choices: themes,
    pageSize: 10
  }]);
  
  const theme = themes.find(t => t.value === answer.theme);
  if (!theme) return;

  console.log(chalk.blue(`\nAlterando para o tema '${theme.name}'...`));
  
  if (await updateDefaultTheme(theme.name)) {
    console.log(chalk.green('✓ Tema alterado com sucesso!'));
    console.log(chalk.blue('Reinicie o servidor para aplicar as alterações.\n'));
  }
}

// Função para criar um novo tema
async function createTheme() {
  const nameAnswer = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Nome do novo tema:',
    validate: (input) => {
      if (!/^[A-Za-z][A-Za-z0-9]*$/.test(input)) {
        return 'Nome do tema deve começar com uma letra e conter apenas letras e números.';
      }
      return true;
    }
  }]);

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'primary',
      message: 'Cor primária (hex):',
      default: '#0ea5e9',
      validate: (input) => isValidHexColor(input) || 'Por favor, insira uma cor hex válida (ex: #ff0000)'
    },
    {
      type: 'input',
      name: 'secondary',
      message: 'Cor secundária (hex):',
      default: '#64748b',
      validate: (input) => isValidHexColor(input) || 'Por favor, insira uma cor hex válida (ex: #ff0000)'
    },
    {
      type: 'input',
      name: 'accent',
      message: 'Cor de destaque (hex):',
      default: '#d946ef',
      validate: (input) => isValidHexColor(input) || 'Por favor, insira uma cor hex válida (ex: #ff0000)'
    },
    {
      type: 'list',
      name: 'useAsDefault',
      message: 'Deseja usar este tema como padrão?',
      choices: [
        { name: 'Sim', value: true },
        { name: 'Não', value: false }
      ]
    }
  ]);

  try {
    // Gera o novo tema
    const themePath = path.join(process.cwd(), 'app/styles/themes.ts');
    const themeContent = await fs.readFile(themePath, 'utf-8');
    
    const newTheme = `
// Tema ${nameAnswer.name}
export const ${nameAnswer.name}Theme = generateTheme({
  name: '${nameAnswer.name}',
  colors: {
    primary: '${answers.primary}',
    secondary: '${answers.secondary}',
    accent: '${answers.accent}',
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
    special: 'Poppins',
  },
});

`;

    // Adiciona o novo tema ao arquivo
    const updatedContent = themeContent.replace(
      'export const themes = {',
      `${newTheme}export const themes = {
  ${nameAnswer.name.toLowerCase()}: ${nameAnswer.name}Theme,`
    );

    await fs.writeFile(themePath, updatedContent);
    console.log(chalk.green(`\n✓ Tema '${nameAnswer.name}' criado com sucesso!`));

    // Define como tema padrão se solicitado
    if (answers.useAsDefault) {
      if (await updateDefaultTheme(nameAnswer.name)) {
        console.log(chalk.green('✓ Tema definido como padrão!'));
      }
    }

    console.log(chalk.blue('\nReinicie o servidor para aplicar as alterações.\n'));
  } catch (error) {
    console.error(chalk.red('\nErro ao criar tema:'), error);
  }
}

// Menu principal
async function mainMenu() {
  console.log(chalk.blue.bold('\n🎨 Gerenciador de Temas\n'));

  while (true) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          { name: '📋 Listar temas disponíveis', value: 'list' },
          { name: '🔄 Mudar tema', value: 'use' },
          { name: '✨ Criar novo tema', value: 'create' },
          { name: '❌ Sair', value: 'exit' }
        ],
        pageSize: 10
      }
    ]);

    switch (answer.action) {
      case 'list':
        await listThemes();
        break;
      case 'use':
        await useTheme();
        break;
      case 'create':
        await createTheme();
        break;
      case 'exit':
        console.log(chalk.blue('\nAté logo! 👋\n'));
        process.exit(0);
    }

    // Pausa antes de mostrar o menu novamente
    if (answer.action !== 'exit') {
      await inquirer.prompt([{
        type: 'input',
        name: 'continue',
        message: 'Pressione ENTER para continuar...'
      }]);
    }
  }
}

// Inicia o menu
mainMenu().catch(error => {
  console.error(chalk.red('\nErro inesperado:'), error);
  process.exit(1);
}); 