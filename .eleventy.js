module.exports = function(config) {
  // A useful way to reference to the contect we are runing eleventy in

  // make the seed target act like prod
  // env = env == "seed" ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "_site",
      data: `_data/dev`
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
