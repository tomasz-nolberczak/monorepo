const withTM = require("next-transpile-modules")(["@pizza-hero/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
