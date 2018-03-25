// @flow
// @format
import Gravatar from 'react-gravatar'
import glamorous from 'glamorous'

const MyGlamorousGravatar = glamorous(Gravatar)(
  () => ({ email, md5, size, rating, className, protocol, style }) => ({
    email,
    md5,
    size,
    rating,
    className,
    protocol,
    style,
  })
)

export default MyGlamorousGravatar
