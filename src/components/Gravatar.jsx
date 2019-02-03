// @flow
// @format
import glamorous from 'glamorous'
import Gravatar from 'react-gravatar'

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
