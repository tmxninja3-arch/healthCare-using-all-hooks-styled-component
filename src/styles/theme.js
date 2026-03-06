/**
 * theme.js
 * --------
 * Defines lightTheme and darkTheme objects consumed by
 * styled-components ThemeProvider.  Every colour token used
 * across the application lives here so a single change
 * propagates everywhere.
 */

export const lightTheme = {
  /* surface colours */
  background: '#f0f2f5',
  card: '#ffffff',

  /* text colours */
  text: '#1a1a2e',
  textSecondary: '#6c757d',

  /* brand / accent */
  primary: '#4361ee',
  primaryHover: '#3a56d4',
  primaryLight: 'rgba(67, 97, 238, 0.10)',

  /* semantic colours */
  danger: '#ef233c',
  dangerHover: '#d90429',
  dangerLight: 'rgba(239, 35, 60, 0.10)',

  success: '#06d6a0',
  successLight: 'rgba(6, 214, 160, 0.10)',

  warning: '#ff9f1c',
  warningLight: 'rgba(255, 159, 28, 0.10)',

  info: '#4cc9f0',
  infoLight: 'rgba(76, 201, 240, 0.10)',

  /* borders & inputs */
  border: '#dee2e6',
  inputBg: '#ffffff',
  inputBorder: '#ced4da',
  inputFocus: '#4361ee',

  /* shadows */
  shadow: '0 2px 8px rgba(0,0,0,0.08)',
  shadowHover: '0 4px 16px rgba(0,0,0,0.12)',

  /* header */
  headerBg: 'linear-gradient(135deg, #4361ee, #3a0ca3)',
  headerText: '#ffffff',

  /* toggle button */
  toggleBg: 'rgba(255,255,255,0.20)',
  toggleHover: 'rgba(255,255,255,0.30)',
};

export const darkTheme = {
  background: '#0d1117',
  card: '#161b22',

  text: '#c9d1d9',
  textSecondary: '#8b949e',

  primary: '#58a6ff',
  primaryHover: '#79b8ff',
  primaryLight: 'rgba(88, 166, 255, 0.10)',

  danger: '#f85149',
  dangerHover: '#ff6b6b',
  dangerLight: 'rgba(248, 81, 73, 0.10)',

  success: '#3fb950',
  successLight: 'rgba(63, 185, 80, 0.10)',

  warning: '#e3b341',
  warningLight: 'rgba(227, 179, 65, 0.10)',

  info: '#79c0ff',
  infoLight: 'rgba(121, 192, 255, 0.10)',

  border: '#30363d',
  inputBg: '#0d1117',
  inputBorder: '#30363d',
  inputFocus: '#58a6ff',

  shadow: '0 2px 8px rgba(0,0,0,0.30)',
  shadowHover: '0 4px 16px rgba(0,0,0,0.40)',

  headerBg: 'linear-gradient(135deg, #161b22, #1f2937)',
  headerText: '#c9d1d9',

  toggleBg: 'rgba(255,255,255,0.10)',
  toggleHover: 'rgba(255,255,255,0.15)',
};