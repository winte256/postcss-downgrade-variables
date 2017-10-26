const postcss = require('postcss');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const plugin = require('../');

module.exports.run = (input, output, opts = {}) =>
  postcss([plugin(opts)]).process(input)
    .then((result) => {
      expect(result.css).toEqual(output);
      expect(result.warnings().length).toBe(0);
    });

module.exports.getData = (nameData) =>
  readFileSync(resolve(__dirname, 'data', `${nameData}.css`), 'utf8');
