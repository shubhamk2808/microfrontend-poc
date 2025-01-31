const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'email',
      filename: 'remoteEntry.js',
      exposes: {
        './EmailApp': './src/App'
      },
      remotes: {
        components: 'host@http://localhost:3000/remoteEntry.js'
      },
      shared: {
        ...deps,
        react: { 
          singleton: true, 
          requiredVersion: deps.react,
          eager: true
        },
        'react-dom': { 
          singleton: true, 
          requiredVersion: deps['react-dom'],
          eager: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
};