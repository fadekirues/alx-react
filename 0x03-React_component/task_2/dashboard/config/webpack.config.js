
const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: path.resolve(__dirname, "../src/index.js"),
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "../dist"),
//   },
//   devtool: "inline-source-map",
//   devServer: {
//     static: path.resolve(__dirname, "../dist"),
//     hot: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               outputPath: "images",
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
const HtmlWebpackPlugin = require("html-webpack-plugin");
  module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist"),
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          // type: 'asset/resource',
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    devServer: {
      static: "./dist",
      compress: true,
      open: true,
      hot: true,
      port: 8564,
    },
    devtool: "inline-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        name: "index.html",
        inject: false,
        template: "./dist/index.html",
      }),
    ],
  };