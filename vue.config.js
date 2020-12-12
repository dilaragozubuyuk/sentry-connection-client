const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new SentryWebpackPlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,

        include: "./dist",
        ignore: ["node_modules", "vue.config.js"],
      }),
    ],
  },
};