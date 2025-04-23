#!/usr/bin/env node

const { createNewTheme } = require('./createTheme');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function createThemeInteractive() {
  try {
    const themeName = await askQuestion('Nome do tema (ex: Nature): ');
    const primaryColor = await askQuestion('Cor primária (hex, ex: #2e7d32): ');
    const secondaryColor = await askQuestion('Cor secundária (hex, ex: #1b5e20): ');
    const hasAccent = (await askQuestion('Adicionar cor de destaque? (s/n): ')).toLowerCase() === 's';
    
    let accentColor;
    if (hasAccent) {
      accentColor = await askQuestion('Cor de destaque (hex, ex: #81c784): ');
    }

    const heading = await askQuestion('Fonte para títulos (Enter para usar Montserrat): ');
    const body = await askQuestion('Fonte para textos (Enter para usar Inter): ');
    const special = await askQuestion('Fonte especial (Enter para usar Poppins): ');

    const config = {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
        ...(hasAccent && { accent: accentColor }),
      },
      fonts: {
        heading: heading || 'Montserrat',
        body: body || 'Inter',
        special: special || 'Poppins',
      },
    };

    createNewTheme(themeName, config);
    console.log('\nTema criado com sucesso! 🎨');
  } catch (error) {
    console.error('Erro ao criar tema:', error);
  } finally {
    rl.close();
  }
}

createThemeInteractive(); 