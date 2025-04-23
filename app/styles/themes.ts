import { generateTheme } from './themeGenerator';

// Tema moderno e clean
export const modernTheme = generateTheme({
  name: 'modern',
  colors: {
    primary: '#0ea5e9',
    secondary: '#a855f7',
    accent: '#f59e0b',
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Inter',
    special: 'Poppins',
  },
});

// Tema minimalista
export const minimalTheme = generateTheme({
  name: 'minimal',
  colors: {
    primary: '#18181b',
    secondary: '#404040',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    special: 'Inter',
  },
  spacing: {
    base: 3,
    scale: 1.2,
  },
});

// Tema ousado e vibrante
export const boldTheme = generateTheme({
  name: 'bold',
  colors: {
    primary: '#7c3aed',
    secondary: '#ec4899',
    accent: '#f97316',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Inter',
    special: 'Montserrat',
  },
  spacing: {
    base: 5,
    scale: 1.8,
  },
});

// Exporta todos os temas disponíveis
export const themes = {
  modern: modernTheme,
  minimal: minimalTheme,
  bold: boldTheme,
} as const;

// Tipo para os nomes dos temas disponíveis
export type ThemeName = keyof typeof themes; 