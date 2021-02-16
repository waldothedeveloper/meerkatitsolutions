module.exports = {
  siteMetadata: {
    title: `Meerkat IT Solutions`,
    description: `We make IT happen for any business that's ready to grow smart, and fast`,
    author: `@waldothedeveloper`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: true,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Meerkat-LOGO.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter"],
        },
      },
    },
    "gatsby-plugin-tailwindcss",
    `gatsby-plugin-postcss`,
  ],
}
