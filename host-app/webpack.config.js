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
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
    },
    modules: [
      path.resolve(__dirname, '../shared'),
      'node_modules'
    ],
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        chat: 'chat@http://localhost:3001/remoteEntry.js',
        email: 'email@http://localhost:3002/remoteEntry.js'
      },
      exposes: {
        './Button': './src/components/Button'
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
    })
  ]
};