import React from 'react'
import { PropTypes } from 'prop-types'
import type { PageProps } from 'gatsby'

import '@fontsource/roboto-mono'

import '../styles/app.scss'

const Layout: React.FC<PageProps> = ({ children }) => (
  <React.Fragment>
    <div className="container is-widescreen has-appear-effect is-family-monospace">
      <div className="columns is-centered">
        <div className="column is-10-desktop is-12-tablet">
          {children}
        </div>
      </div>
    </div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
