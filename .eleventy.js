module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('css');

  // Add memories collection via files
  eleventyConfig.addCollection('memories', collection => {
    return collection
      .getFilteredByGlob(`./memories/*.md`)
      .sort((x, y) => x.data.title.localeCompare(y.data.title));
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};
