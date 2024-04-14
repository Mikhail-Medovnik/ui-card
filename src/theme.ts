import { CSSVariablesResolver, createTheme } from '@mantine/core';

export const theme = createTheme({
  other: {
    appBackground: '#0a0a0a',
    cardBackground: '#131313',
    numberColor: '#cfcfcf',
    commentColor: '#414141',
    categoryColor: '#717171',
    chartColor: '#292929',
    chartHoveredColor: '#5a5a5a',
    redTriangleColor: '#c0303a',
  },
});

export const resolver: CSSVariablesResolver = (themeOverride) => ({
  variables: {},
  light: {
    '--app-background': themeOverride.other.appBackground,
    '--card-background': themeOverride.other.cardBackground,
    '--number-color': themeOverride.other.numberColor,
    '--category-color': themeOverride.other.categoryColor,
    '--chart-color': themeOverride.other.chartColor,
    '--chart-hovered-color': themeOverride.other.chartHoveredColor,
    '--red-triangle': themeOverride.other.redTriangleColor,
  },
  dark: {},
});
