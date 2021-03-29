module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Blog`,
    description: `Awesome Blog built with Gatsby and MDX`,
    titleTemplate: `%s | MDX Blog`,
    url: `https://gatsby-mdx-blog-course-project.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@jbilljcotter`,
  },
  plugins: [
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    //*{
     // resolve: `gatsby-source-instagram`,
      //options: {
        //username: `8556131572`,
      //},
    //},
  ],
}
