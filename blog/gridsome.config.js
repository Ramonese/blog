module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
       //baseUrl: " http://favoritethings.azurewebsites.net",
       //baseUrl: "https://wordpress.org/news/",
       //baseUrl: "https://www.tripletex.no",
        baseUrl: "https://www.visma.com/blog",
        //apiBase: 'wp-json',
        //typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 1, // How many posts to load from server per request (Optional)
        //concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
  ]
}
