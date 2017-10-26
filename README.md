# PostCSS Downgrade Variables [![Build Status][ci-img]][ci]

[PostCSS] plugin for downgrage css variables.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/winte256/postcss-downgrade-variables.svg
[ci]:      https://travis-ci.org/winte256/postcss-downgrade-variables

```css
:root {
  --primary-background: #fff;
  --green-color: #0f0;
}
.class {
  background: var(--primary-background);
  background-image: linear-gradient(to top, var(--green-color), var(--primary-background));
}
```

```css
:root {
  --primary-background: #fff;
  --green-color: #0f0;
}
.class {
  background: #fff;
  background: var(--primary-background);
  background-image: linear-gradient(to top, #0f0, #fff);
  background-image: linear-gradient(to top, var(--green-color), var(--primary-background));
}
```

## Usage

```js
postcss([ require('postcss-downgrade-variables') ])
```

See [PostCSS] docs for examples for your environment.
