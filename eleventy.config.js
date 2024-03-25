module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addPassthroughCopy("./css");
};
