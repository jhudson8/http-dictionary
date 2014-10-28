module.exports = {
    entry: [
      // "bootstrap-sass-webpack!./bootstrap.webpack.config.js",
      "./js/entry.js"
    ],
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.js$/, loader: "jsx-loader", query: { insertPragma: 'React.DOM' } },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    }
};
