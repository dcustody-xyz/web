import React from 'react'
import { PropTypes } from 'prop-types'
import type { PageProps } from 'gatsby'

import '@fontsource/roboto-mono'

import '../styles/app.scss'

const Layout: React.FC<PageProps> = ({ children }) => (
  <React.Fragment>
    <div className="container has-background-dark has-text-light">
      {children}
    </div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
