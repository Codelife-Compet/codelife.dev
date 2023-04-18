import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@codelife-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'
export const {
  styled,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    minHeight: 'space',
    minWidth: 'space',
    maxWidth: 'space',
    maxHeight: 'space',
    width: 'space',
  },
  media: {
    phoneOnly: '(max-width:599px)',
    tabletPortrait: '(min-width:600px)',
    tabletLandscape: '(min-width:900px)',
    desktop: '(min-width:1200px)',
    largeDesktop: '(min-width:1800px)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  theme: {
    colors: {
      ...colors,
      background: colors['canva-bg-support'],
      paper: colors['canva-bg'],
    },
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
export const darkTheme = createTheme('dark-theme', {
  colors: {
    background: colors['codelife-black-900'],
    surface: colors['codelife-black-800'],
    paper: colors['codelife-black-700'],
    'text-default': `${colors['codelife-black-100']}`,
    'text-additional': `${colors['codelife-gray-100']}`,
    'text-disabled': `${colors['codelife-gray-100']}54`,
  },
  fontWeights: {
    thin: 50,
    light: 250,
    regular: 350,
    medium: 450,
    bold: 650,
    extrabold: 850,
  },
})
export const GlobalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  'body, html': {
    height: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  '#__next': {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    backgroundColor: '$background',
    color: '$text-default',
    fontFamily: '$body',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
    '-webkit-font-smoothing': 'antialiased',
  },
})
