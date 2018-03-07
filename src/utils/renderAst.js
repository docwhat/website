import React from 'react'
import Gist from 'react-gist'
import rehypeReact from "rehype-react"

// Part of gatsby-remark-component
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "gist": Gist,
  }
}).Compiler

export default renderAst
