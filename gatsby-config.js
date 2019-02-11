var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}


module.exports = {
  siteMetadata: {
    title: '7th Heaven',
    author: "Net on the Web",
    description: "7th Heaven",
    siteUrl: 'https://7thheaven.fr/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      }, 
      resolve:`gatsby-source-filesystem`,
      options: {
        name:`data`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    netlifyCmsPaths,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://netlify.us20.list-manage.com/subscribe/post?u=a74b39c6f7d945f8a24b49e30&amp;id=2c6d149f45", // see instructions section below
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Neue Helvetica`,
          `Montserrat`,
          `Caveat Brush`,
          `Stalemate`,
          `Dancing Script`,
          `Lato`,
          `Archivo Black`
        ]
      }
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin:1.0725rem auto `,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `7th Heaven`,
        short_name: `7th Heaven`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#88C7DC`,
        display: `minimal-ui`,
        icon: `src/assets/favicon-96x96.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
}

