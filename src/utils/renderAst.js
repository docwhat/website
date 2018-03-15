import React from 'react'
import rehypeReact from "rehype-react"

import Gist from 'react-gist'

// Part of gatsby-remark-component
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "gist": Gist,
  }
}).Compiler

export default renderAst
