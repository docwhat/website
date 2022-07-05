//
// @format
import Color from 'color'

// Documentation: https://github.com/Qix-/color

// Color from my logo:
// Hex #B2FE40
// HSL 84, 99, 62
// https://www.colorhexa.com/B2FE40

export const heroHue = 84

// export const grey = (value) => `hsla(84,69%,10%,${(100 - value) / 100})`
export const grey = (value) =>
  Color(`hsl(${heroHue}, 09%, 100%)`).lightness(value * 100)

export const lightForeground = Color('hsl(84, 69%, 10%)').alpha(0.9)
export const lightBackground = Color('white')

export const darkForeground = Color('white')
export const darkBackground = Color('#080808')

const saturation = 99
const lightness = 62

export const heroColor = Color.hsl([heroHue, saturation, lightness])
export const lightHeroColor = heroColor
export const darkHeroColor = heroColor.darken(0.5)

const mellowHue = 234
export const mellowColor = Color.hsl([mellowHue, saturation, lightness])

const emphasisHue = 24
export const emphasisColor = Color.hsl([emphasisHue, saturation, lightness])

const deemphasisHue = 264
export const deemphasisColor = Color.hsl([deemphasisHue, saturation, lightness])
