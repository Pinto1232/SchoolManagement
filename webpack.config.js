const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                  plugins: [
                     require('autoprefixer'),
                    ],
                  },
                },
              },
            ],
          },
        ],
      },     
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
