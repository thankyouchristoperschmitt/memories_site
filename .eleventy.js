module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('fonts');

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
