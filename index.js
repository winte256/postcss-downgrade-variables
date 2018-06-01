const postcss = require('postcss');

const replaceToDefaultColor = (css, colors = {}) =>
  css.replace(/var\(([\s\S]+?)\)/g, (match, p1) => colors[p1] || match);
const variablesColors = {};

module.exports = postcss.plugin('postcss-downgrade-variables', () => (css) => {
  css.walkRules((rule) => {
    rule.walkDecls((decl) => {
      variablesColors[decl.prop] = decl.value;
    });
  });

  css.walkDecls((decl) => {
    if (/var\(--/.test(decl.value)) {
      const value = replaceToDefaultColor(decl.value, variablesColors);
      const already = decl.parent.some((i) => i.type === 'decl'
        && i.prop === decl.prop
        && i.value === value);
      if (already) return;

      decl.cloneBefore({ value });
    }
  });
});
