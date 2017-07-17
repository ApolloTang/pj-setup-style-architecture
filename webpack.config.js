const pathResolve = require('path').resolve;

const webpack = require('webpack');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

// -- configuration -- //
const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = 9200;
const sourceMapType = getSourceMapType('b');

const absolutePath_sourceFolder = pathResolve('src');
const absolutePath_buildFolder = pathResolve('dist');
const absolutePath_nodeModules = pathResolve('node_modules');

const config_fn = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);

  if ( env && env.dev && env.debug ) {
      console.log('absolutePath_sourceFolder: ', absolutePath_sourceFolder);
      console.log('absolutePath_sourceFolder: ', absolutePath_sourceFolder);
      console.log('absolutePath_buildFolder: ', absolutePath_buildFolder);
      console.log('absolutePath_nodeModules: ', absolutePath_nodeModules);
  }

  const config = {
    devServer: {
      historyApiFallback: true,
      host: webpackDevServer_host,
      port: webpackDevServer_port
    },
    performance: {
        hints: ( env && env.dev && env.debug ) ? 'warning' : false   // Turn off hint to reduce cluttter on output
    },
    context: absolutePath_sourceFolder,
    entry: {
      vendor: [
        './vendor/third-party-code.js'
      ],
      // common: [
      //   './util/helper.js'
      // ],
      main: './main.js'
    },
    output: {
      pathinfo: ifNotProd(),                 // Show modules name and path info as in bundles
      publicPath: '/',
      path: absolutePath_buildFolder,        // Webpack bundles are to this folder
      filename: ifProd(
          'bundle.[name].[chunkhash].js',    // [name] are the key in entry; [chunkhash] are the
          'bundle.[name].[hash]js'
      )
    },
    resolve: {
      modules: [
        absolutePath_sourceFolder,
        absolutePath_nodeModules
      ],
      extensions: ['.js', '.less', '.css']
    },
    module: {
      loaders: removeEmpty(
        [
          {
            test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,           // [12]
            loader: 'file-loader?name=./imgs/[name].[hash].[ext]',  // [13][21][23]
            exclude: pathResolve('src/common/fonts')                // [40]
          },
          {
            test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,  // [38]
            loader: 'file-loader?&name=fonts/[name].[ext]'                               // [39]
          },
          ifProd(
            {
              test: /\.(less|css)$/,                               // [41]
              use: ExtractTextPlugin.extract({                  // [19]
                fallback: 'style-loader',
                use: 'css-loader!less-loader'                 // [37][42]
              }),
              include: absolutePath_sourceFolder
            },
            {
              test: /\.(less|css$)/,                               // [30][41]
              loader: 'style-loader!css-loader!less-loader',       // [37][42]
              include: absolutePath_sourceFolder
            }
          ),
          {
            test: /\.jsx?$/,                                           //[34]
            loaders: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      )
    },
    plugins: removeEmpty(
      [
        ifProd(
          new webpack.DefinePlugin({
            target: JSON.stringify('production'),
          }),
          new webpack.DefinePlugin({
            target: JSON.stringify('development'),
          })
        ),
        new HtmlWebpackPlugin({
          template: './index.template.html',
          favicon: './common/images/favicon.ico'
        }),
        new ProgressBarPlugin(),
        ifProd(
          new webpack.optimize.CommonsChunkPlugin({
            name: [
              'vendor', 'common',
              'manifest'
            ]
          }),
          new webpack.optimize.CommonsChunkPlugin({
            name: [
              'vendor', 'common'
            ]
          })
        ),
        ifProd(
          new ExtractTextPlugin('styles.[name].[chunkhash].css')       // [19][22][30]
        ),
        ifProd(
          new InlineManifestWebpackPlugin()
        )
      ]
    ),
    // devtool:  'eval', // Shows uncompiled webpack source code during development mode (use this when debug webpack)
    devtool:  'eval-source-map', // Shows original code during development mode (use this when debug application)
    // devtool:  'cheap-module-eval-source-map', // Won't pause in debugger, and show no code (don't use this)
  }

  // ------------------------------
  //
    // const config = {
    //     devServer: {
    //         historyApiFallback: true,
    //         host: webpackDevServer_host,
    //         port: webpackDevServer_port
    //     },
    //     // performance: {
    //     //     hints: (info === 'true') ? 'warning' : false                    // [11]
    //     // },
    //     context: absolutePath_sourceFolder,                                 // [2]
    //     entry: {                                                            // [9]
    //         vendor: [
    //             './vendor/third-party-code.js'
    //         ],
    //         // common: [
    //             // './util/helper.js'
    //         // ],
    //         main: './main.js'
    //     },
    //     output: {
    //         pathinfo: ifNotProd(),                                          // [35]
    //         publicPath: '/',
    //         path: absolutePath_buildFolder,                                 // [4]
    //         filename: ifProd(
    //             'bundle.[name].[chunkhash].js',                             // [9][22]
    //             'bundle.[name].[hash]js'                                    // [28]
    //         )
    //     },
    //     resolve: {
    //         modules: [                                                      // [16]
    //             absolutePath_sourceFolder,
    //             absolutePath_nodeModules
    //         ],
    //         extensions: ['.js', '.less', '.css']                            // [17][43]
    //     },
    //     module: {
    //         loaders: removeEmpty([                                          // [29]
    //             {
    //                 test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,           // [12]
    //                 loader: 'file-loader?name=./imgs/[name].[hash].[ext]',  // [13][21][23]
    //                 exclude: pathResolve('src/common/fonts')                // [40]
    //             },
    //             {
    //                 test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,  // [38]
    //                 loader: 'file-loader?&name=fonts/[name].[ext]'                               // [39]
    //             },
    //             ifProd(
    //                 {
    //                     test: /\.(less|css)$/,                               // [41]
    //                     use: ExtractTextPlugin.extract({                  // [19]
    //                         fallback: 'style-loader',
    //                         use: 'css-loader!less-loader'                 // [37][42]
    //                     }),
    //                     include: absolutePath_sourceFolder
    //                 },
    //                 {
    //                     test: /\.(less|css$)/,                               // [30][41]
    //                     loader: 'style-loader!css-loader!less-loader',       // [37][42]
    //                     include: absolutePath_sourceFolder
    //                 }
    //             ),
    //             {
    //                 test: /\.jsx?$/,                                           //[34]
    //                 loaders: 'babel-loader',
    //                 exclude: /node_modules/
    //             }
    //         ])
    //     },
    //     plugins: removeEmpty([                                               // [29]
    //         new HtmlWebpackPlugin({
    //             template: './index.template.html',
    //             favicon: './common/images/favicon.ico'                       // [15]
    //         }),
    //         new ProgressBarPlugin(),                                         // [7]
    //         ifProd(
    //             new webpack.optimize.CommonsChunkPlugin({
    //                 name: [                                                  // [10]
    //                     'vendor', 'common',
    //                     'manifest'                                           // [25]
    //                 ]
    //             }),
    //             new webpack.optimize.CommonsChunkPlugin({
    //                 name: [                                                  // [31]
    //                     'vendor', 'common'
    //                 ]
    //             })
    //         ),
    //         ifProd(
    //             new ExtractTextPlugin('styles.[name].[chunkhash].css')       // [19][22][30]
    //         ),
    //         ifProd(
    //             new InlineManifestWebpackPlugin()                            // [31]
    //         )
    //     ]),
    //     devtool: ifProd( sourceMapType.prod, sourceMapType.dev )             // [32]
    // };

  if ( env && env.debug ) {
    console.log('webpack.config: ', config)                              // [8]
  }
  return config;
};


function getSourceMapType (type) {
  const types = {
    'a': {
      // Shows uncompiled webpack source code during development mode (use this when debug webpack)
      prod: 'source-map',     // production enviroment: source map in separate file
      dev:  'eval'            // non production env:    inline source map
    },
    'b': {
      // Shows original code during development mode (use this when debug application)
      prod: 'source-map',     // production enviroment: source map in separate file
      dev:  'eval-source-map' // non production env:    inline source map
    },
    'c': {
      // Won't pause in debugger, and show no code (don't use this)
      prod: 'cheap-module-eval-source-map',     // production enviroment: source map in separate file
      dev:  'cheap-module-eval-source-map'      // non production env:    inline source map
    }
  };
  return types[type];
}

module.exports = config_fn;

