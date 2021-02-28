require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

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
          resolve: 'gatsby-source-prismic',
          options: {
             repositoryName: process.env.REPO_NAME,
             accessToken: process.env.API_Key,
             schemas: {
                 project_card: require('./schemas/project_card.json')
             }
          }
      }
  ],

};
