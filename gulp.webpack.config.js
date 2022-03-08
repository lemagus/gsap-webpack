const path = require('path');

module.exports = {
  mode: "production",
  watch: true,
  entry: {
    polyfill: 'babel-polyfill',
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
      rules: [
        {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
      ],
  }
};