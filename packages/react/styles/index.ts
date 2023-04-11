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
    width: 'space',
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
})
export const GlobalStyles = globalCss({
  body: {
    backgroundColor: '$background',
    color: '$text-default',
    fontFamily: '$body',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})
// The initializer to use in _app.tsx
GlobalStyles()
