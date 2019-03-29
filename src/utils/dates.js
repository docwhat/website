// @flow
// @format

export const ymdString2Date = (dateString: string) =>
  new Date(
    ...dateString
      .split('-')
      .map(part => parseInt(part, 10))
      .map((num, idx) => num - (idx === 1 ? 1 : 0))
  )

export const getNavigatorLanguage = () =>
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language || 'en'
