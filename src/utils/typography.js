import Typography from 'typography'
// import BlogTheme from 'typography-theme-wordpress-2016'
import BlogTheme from 'typography-theme-github'

BlogTheme.overrideThemeStyles = () => ({
  // 'a.gatsby-resp-image-link': {
  //   boxShadow: 'none',
  // },
})

const typography = new Typography(BlogTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
