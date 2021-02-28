require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Chanho Park - Product Designer",
  },
  plugins: [
      'gatsby-plugin-sass',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: "images",
              path: "./src/images/",
          },
          __key: "images",
      },
      {
          resolve: `gatsby-source-prismic`,
          options: {
              repositoryName: `chanho-portfolio-2021`,
              accessToken: `${process.env.API_KEY}`,
              schemas: {
                  project_card: require('./custom_types/project_card.json')
              },
              linkResolver: () => post => `/${post.uid}`,
          },
      },
  ],

};
