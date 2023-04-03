import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/logo.svg'
    }
  }],
  siteMetadata: {
    title:   `dCustody`,
    siteUrl: `https://dcustody.xyz`
  }
}

export default config
