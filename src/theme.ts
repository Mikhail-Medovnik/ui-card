import { CSSVariablesResolver, createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',

  other: {
    appBackground: '#0a0a0a',
    cardBackground: '#111111',
    numberColor: '#bababa',
    commentColor: '#414141',
    titleColor: '#727272',
    chartColor: '#292929',
    chartHoveredColor: 'linear-gradient(180deg, rgba(124, 124, 124, 1), rgba(124, 124, 124, 0))',
    redTriangleColor: '#c0303a',
    redDifference: '#e93645',
    redDifferenceBg: 'rgba(233, 54, 69, 0.03)',
    redDifferenceBorder: 'rgba(233, 54, 69, 0.05)',
    redDifferenceShadow: '0px -5px 50px -17px rgb(233,54,69)',
  },
});

export const resolver: CSSVariablesResolver = (themeOverride) => ({
  variables: {},
  light: {
    '--app-background': themeOverride.other.appBackground,
    '--card-background': themeOverride.other.cardBackground,
    '--number-color': themeOverride.other.numberColor,
    '--title-color': themeOverride.other.titleColor,
    '--comment-color': themeOverride.other.commentColor,
    '--chart-color': themeOverride.other.chartColor,
    '--chart-hovered-color': themeOverride.other.chartHoveredColor,
    '--red-triangle': themeOverride.other.redTriangleColor,
    '--red-difference': themeOverride.other.redDifference,
    '--red-difference-bg': themeOverride.other.redDifferenceBg,
    '--red-difference-shadow': themeOverride.other.redDifferenceShadow,
    '--red-difference-border': themeOverride.other.redDifferenceBorder,
  },
  dark: {},
});
