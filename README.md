# Eleventy template with minimal configuration

- Eleventy 2.0.1
- LiquidJS template engine

## files & folders

- content pages: inside main folder
- 404 page
- includes & layouts: `_includes`
- stylesheet: `css` with minimal reset
- output: `_site`

## Navigation links

- primary navigation in header: add frontmatter `tags: primary`
- secondary navigation in aside: add frontmatter `tags: secondary`
- footer navigation in footer: add frontmatter `tags: footer`
- primary & footer navigation: add frontmatter `tags: [primary, footer]`

## eleventy.config.js

- `eleventyConfig.addWatchTarget("./css/");`  
  `eleventyConfig.addPassthroughCopy("./css");`

## GitHub Pages

- GitHub workflow script to deploy to GitHub Pages
- script in package.json `--pathprefix '11-minimal'`
- you need to add a filter to any links: `| url`