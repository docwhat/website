// @flow
// @format
// import gray from 'gray-percentage'
// import Typography from 'typography'

// // Details:
// // https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/src/index.js

// export const quoteCommaList = (fontList: Array<string>): string =>
//   fontList.map(s => (s.match(/\s/) ? `"${s}"` : s)).join(', ')

// export const monospaceFontFamily = [
//   'SFMono-Regular',
//   'Menlo',
//   'Monaco',
//   'Consolas',
//   'Liberation Mono',
//   'Courier New',
//   'monospace',
// ]

// export const systemFontFamily = [
//   '-apple-system',
//   'BlinkMacSystemFont',
//   'Segoe UI',
//   'Roboto',
//   'Helvetica Neue',
//   'Arial',
//   'sans-serif',
//   'Apple Color Emoji',
//   'Segoe UI Emoji',
//   'Segoe UI Symbol',
// ]

// const myTypography = new Typography({
//   title: `docwhat2018`,
//   baseFontSize: `21px`,
//   baseLineHeight: `1.5`,
//   googleFonts: [],
//   bodyFontFamily: systemFontFamily,
//   scaleRatio: 2,
//   bodyColor: gray(20),
//   headerWeight: 700,
//   bodyWeight: 400,
//   boldWeight: 700,
//   [> Github has all block elements use 1/2 rhythm not a full rhythm. <]
//   blockMarginBottom: 1 / 2,
//   overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
//     return {
//       'code,pre,tt': {
//         fontFamily: quoteCommaList(monospaceFontFamily),
//         lineHeight: `1.5`,
//       },
//     }
//   },
// })

// // Hot reload myTypography in development.
// if (process.env.NODE_ENV !== `production`) {
//   myTypography.injectStyles()
// }

// export const { rhythm, scale, options } = myTypography
// export default myTypography
