import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => <div>{children}</div>

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout