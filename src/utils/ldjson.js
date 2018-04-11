/* @flow */
/* @format */
/* eslint-disable import/prefer-default-export */

import avatarPic from '../components/avatar.png'
import {
  authorName,
  authorSameAs,
  authorUrl,
  siteDescription,
  siteKeywords,
  siteTitle,
  siteUrl,
} from '../utils/constants'

export const authorJsonLD = {
  '@type': `Person`,
  name: authorName,
  sameAs: authorSameAs,
  image: {
    '@type': `ImageObject`,
    contentUrl: avatarPic,
    url: authorUrl,
  },
}

export const blogJsonLD = {
  '@type': `Blog`,
  name: siteTitle,
  keywords: siteKeywords,
  description: siteDescription,
  url: siteUrl,
  author: authorJsonLD,
  publisher: {
    '@type': `Organization`,
    name: siteTitle,
    logo: avatarPic,
  },
}
