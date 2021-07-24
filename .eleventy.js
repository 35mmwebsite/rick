module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/slides");
    eleventyConfig.addPassthroughCopy("src/assets/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/assets/main.js");

  
  
    return {
          dir: {
            input: "src",
            output: "docs",
          },
        };
  };
  