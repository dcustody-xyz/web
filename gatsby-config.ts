import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name:             'dCustody',
        short_name:       'dCustody',
        start_url:        '/',
        background_color: '#000000',
        theme_color:      '#000000',
        display:          'standalone',
        icon:             'src/images/logo.svg'
      }
    },
    // Important: this must be after the manifest plugin
    'gatsby-plugin-offline'
  ],
  siteMetadata: {
    title:   `dCustody`,
    siteUrl: `https://dcustody.xyz`
  }
}

export default config
