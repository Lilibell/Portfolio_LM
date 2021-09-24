import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "@fontsource/berkshire-swash"
import "@fontsource/jost/500.css"
import "@fontsource/cabin"
import "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
