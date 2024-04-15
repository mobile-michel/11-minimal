# Eleventy template with minimal configuration
- Eleventy 2.0.1
- LiquidJS template engine

## files & folders

- `/_includes`: layouts & includes
- `/_site`: HTML output
- `/css`: stylesheet with minimal reset
- `/`: content pages with 404 page

## Structure
- layouts: base + default with includes
- includes: copyright + nav-footer + nav-primary + nav-secondary
- HTML5 landmarks: `header, main & footer` + `aside & section` (with `if` condition)
- navigation links with `tags: primary, secondary & footer`
- not responsive layout

## Scripts
```
"start": "npx @11ty/eleventy --serve",
"build": "eleventy --pathprefix '11-minimal'",
"debug": "DEBUG=* eleventy"
```

## Dependencies
`"@11ty/eleventy": "^2.0.1"`

## eleventy.config.js
```
eleventyConfig.addWatchTarget("./css/");
eleventyConfig.addPassthroughCopy("./css");
```

## Special
- Github Pages
- dark mode with @media (prefers-color-scheme: dark)