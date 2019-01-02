module.exports = {
  siteMetadata: {
    title: `Justice.gov with Gatsby and Drupal 8`,
    description: `This is a proof-of-concept using Gatsby and Drupal 8 to implement www.justice.gov.`,
    author: `@brockfanning`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://local.justice8.doj.gov`,
      },
    },
  ],
}
