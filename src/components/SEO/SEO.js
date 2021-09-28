import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Lisa Meister Portfolio</title>
      <meta
        name="description"
        content="Portfolio page of Lisa Meister, Frontend Developer. Includes an overview about skills and frequently used technology. Features selected personal web development projects."
      />
      <link rel="canonical" href="www.lisameister.com" />
    </Helmet>
  )
}

export default SEO
