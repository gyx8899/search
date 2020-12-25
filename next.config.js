const remarkCapitalize = require('remark-capitalize');

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    mdPlugins: [remarkCapitalize],
    hastPlugins: [],
  },
});
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([[withSass], [withImages], [withMDX]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
