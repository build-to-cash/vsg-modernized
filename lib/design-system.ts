export const theme = {
  colors: {
    background: '#131313',
    surface: '#131313',
    'surface-container-lowest': '#0e0e0e',
    'surface-container-low': '#1c1b1b',
    'surface-container': '#20201f',
    'surface-container-high': '#2a2a2a',
    'surface-variant': '#353535',
    'surface-bright': '#393939',
    primary: '#4E0707',
    'primary-container': '#4E0707',
    secondary: '#E9C349',
    'secondary-container': '#af8d11',
    tertiary: '#b1c5ff',
    'tertiary-container': '#002159',
    error: '#ffb4ab',
    'error-container': '#93000a',
    onSurface: '#e5e2e1',
    'on-surface-variant': '#dbc0bd',
    accent: '#E9C349',
    outline: '#a38b88',
    'outline-variant': '#554240',
  },
  fonts: {
    headline: 'Noto Serif',
    body: 'Manrope',
  },
  shadows: {
    ambient: '0px 20px 40px rgba(0, 0, 0, 0.4)',
    glow: '0px 0px 20px rgba(233, 195, 73, 0.3)',
  },
} as const;

export type Theme = typeof theme;