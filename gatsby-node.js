// const path = require("path");

// const newsData = require("./src/data/news.json");

// const eventsData = require("./src/data/events.json");

// const blogsData = require("./src/data/blog.json");

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;

//   console.log("News Data:", newsData);
//   console.log("Events Data:", eventsData);
//   console.log("Blogs Data:", blogsData);
  
//   newsData.forEach((news) => {
//     createPage({
//       path: `/news${news.readmore}`,
//       component: path.resolve("./src/pages/pages-template/NewsTemplate.jsx"),
//       context: {
//         newsReadmore: news.readmore,
//       },
//     });
//   });

//   eventsData.forEach((events) => {
//     createPage({
//       path: `/events${events.readmore}`,
//       component: path.resolve("./src/pages/pages-template/EventsTemplate.jsx"),
//       context: {
//         eventsReadmore: events.readmore,
//       },
//     });
//   });
  
//   blogsData.forEach((blogs) => {
//     createPage({
//       path: `/blogs${blogs.readmore}`,
//       component: path.resolve("./src/pages/pages-template/BlogsTemplate.jsx"),
//       context: {
//         blogsReadmore: blogs.readmore,
//       },
//     });
//   });
// };
