/**
 * Gerador de tema customizado
 * Este arquivo contém as funções necessárias para gerar um tema personalizado
 * com cores, fontes e espaçamentos definidos
 */

interface ThemeConfig {
  name: string;
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    accent: ColorScale;
  };
  fonts: {
    heading: string;
    body: string;
    special: string;
  };
  spacing: {
    [key: string]: string;
  };
}

interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export function generateTheme(config: ThemeConfig): ThemeConfig {
  // Validação básica
  if (!config.name) throw new Error('Nome do tema é obrigatório');
  if (!config.colors) throw new Error('Cores são obrigatórias');
  if (!config.fonts) throw new Error('Fontes são obrigatórias');
  if (!config.spacing) throw new Error('Espaçamentos são obrigatórios');

  // Retorna o tema validado
  return {
    name: config.name,
    colors: {
      primary: config.colors.primary,
      secondary: config.colors.secondary,
      accent: config.colors.accent
    },
    fonts: {
      heading: config.fonts.heading,
      body: config.fonts.body,
      special: config.fonts.special
    },
    spacing: config.spacing
  };
} 