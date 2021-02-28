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
  ],
};
