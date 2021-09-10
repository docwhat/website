import createShevy from 'shevyjs'

const shevyOptions = {
  baseFontSize: '20px',
  baseLineHeight: '1.5',
  fontScale: 'minorThird',
}

export const shevy = createShevy(shevyOptions)
export const { lineHeightSpacing: lhs, baseSpacing: bs } = shevy
export default shevy
