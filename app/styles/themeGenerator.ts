type ColorShade = {
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
};

type ThemeColors = {
  primary: ColorShade;
  secondary: ColorShade;
  accent?: ColorShade;
  neutral: ColorShade;
};

type ThemeConfig = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
  };
  fonts?: {
    heading?: string;
    body?: string;
    special?: string;
  };
  spacing?: {
    base?: number;
    scale?: number;
  };
};

// Função auxiliar para gerar tons de uma cor
function generateColorShades(baseColor: string): ColorShade {
  // Implementação simplificada - em produção você usaria uma biblioteca como 'color'
  const lighten = (hex: string, percent: number) => {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
  };

  const darken = (hex: string, percent: number) => {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return '#' + (
      0x1000000 +
      (R > 0 ? (R > 255 ? 255 : R) : 0) * 0x10000 +
      (G > 0 ? (G > 255 ? 255 : G) : 0) * 0x100 +
      (B > 0 ? (B > 255 ? 255 : B) : 0)
    ).toString(16).slice(1);
  };

  return {
    50: lighten(baseColor, 40),
    100: lighten(baseColor, 30),
    200: lighten(baseColor, 20),
    300: lighten(baseColor, 10),
    400: baseColor,
    500: darken(baseColor, 10),
    600: darken(baseColor, 20),
    700: darken(baseColor, 30),
    800: darken(baseColor, 40),
    900: darken(baseColor, 50),
  };
}

export function generateTheme(config: ThemeConfig) {
  const colors: ThemeColors = {
    primary: generateColorShades(config.colors.primary),
    secondary: generateColorShades(config.colors.secondary),
    neutral: generateColorShades('#171717'),
  };

  if (config.colors.accent) {
    colors.accent = generateColorShades(config.colors.accent);
  }

  return {
    name: config.name,
    colors,
    fonts: {
      heading: config.fonts?.heading || 'Montserrat',
      body: config.fonts?.body || 'Inter',
      special: config.fonts?.special || 'Poppins',
    },
    spacing: {
      base: config.spacing?.base || 4,
      scale: config.spacing?.scale || 1.5,
    },
  };
} 