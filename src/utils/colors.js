// @flow
// @format
import Color from 'color'

// Documentation: https://github.com/Qix-/color

// Color from my logo:
// Hex #B2FE40
// HSL 84, 99, 62
// https://www.colorhexa.com/B2FE40

const saturation = 99
const lightness = 62

const heroHue = 84
export const heroColor = Color.hsl([heroHue, saturation, lightness])

const mellowHue = 234
export const mellowColor = Color.hsl([mellowHue, saturation, lightness])

const emphasisHue = 24
export const emphasisColor = Color.hsl([emphasisHue, saturation, lightness])

const deemphasisHue = 264
export const deemphasisColor = Color.hsl([deemphasisHue, saturation, lightness])

export const lightBackground = Color.rgb(255, 255, 255)

export const grey = (value: number) => `hsla(0,0%,0%,${(100 - value) / 100})`
