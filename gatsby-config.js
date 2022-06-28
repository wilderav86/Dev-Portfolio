module.exports = {
  siteMetadata: {
    title: `Adam Wilder Portfolio`,
    siteUrl: `https://www.adamwilder.fun`,
    subPages: [
      {
        page: "Home",
        id: "#home",
      },
      {
        page: "Projects",
        id: "#projects",
      },
      {
        page: "About",
        id: "#about",
      },
      {
        page: "Contact",
        id: "#contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-netlify`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-smoothscroll",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:400`,
          `droid sans mono`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/awIcon.svg",
        name: "Adam Wilder",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },

      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown`,
      },
    },
  ],
};
