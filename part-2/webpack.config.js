const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: {
      import: ["./src/app.js", "./src/app2.js"],
      dependOn: "lodash",
      filename: "main/[name].js",
    },
    main3: {
      import: ["./src/app3.js"],
      dependOn: "lodash",
      filename: "main3/[name].js",
    },
    lodash: {
      import: "lodash",
      filename: "common/[name].js",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "多页面应用",
      template: "./src/index.html",
      inject: "body",
      filename: "main/index1.html",
      chunks: ["main", "lodash"],
      publicPath: "http://www.a.com",
    }),
    new HtmlWebpackPlugin({
      title: "多页面应用3",
      template: "./src/index3.html",
      inject: "body",
      filename: "main3/index3.html",
      chunks: ["main3", "lodash"],
      publicPath: "http://www.b.com",
    }),
  ],
  output: {
    clean: true,
  },
};
