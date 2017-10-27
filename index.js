const postcss = require('postcss');

const replaceToDefaultColor = (css, colors = {}) =>
  css.replace(/var\(([\s\S]+?)\)/g, (match, p1) => colors[p1] || match);
const variablesColors = {};

module.exports = postcss.plugin('postcss-downgrade-variables', (options = {}) => (css) => {
  css.walkRules(':root', (rule) => {
    rule.walkDecls((decl) => {
      variablesColors[decl.prop] = decl.value;
    });
  });

  css.walkDecls((decl) => {
    if (/var\(--/.test(decl.value)) {
      decl.cloneBefore({ value: replaceToDefaultColor(decl.value, variablesColors) });
    }
  });
});
