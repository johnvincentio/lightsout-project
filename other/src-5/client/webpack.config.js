//

const path = require('path');
const webpack = require('webpack');

// const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyWebpackPluginOptions = 'warning'; // info, debug, warning

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const transforms = require('./transforms');

// const APP_FOLDER = path.resolve(__dirname, './src');
const SCSS_FOLDER = path.resolve(__dirname, './scss');
// const FONTS_FOLDER = path.resolve(__dirname, './scss/fonts');
const ICONS_FOLDER = path.resolve(__dirname, './icons');

const DIST_FOLDER = path.resolve(__dirname, './dist');
// const DIST_FOLDER_STYLE = path.resolve(DIST_FOLDER, './css');

const INCLUDE_SCSS_FOLDER = path.resolve(__dirname, './src');

const HTMLPlugin = new HtmlWebpackPlugin({
	template: './templates/index.hbs',
	file: './index.html',
	hash: false,
	chunksSortMode: 'none',
	// inlineSource: 'manifest~.+\\.js',
	HOME_URL: transforms.HOME_URL,
	TITLE: transforms.TITLE,
	DESCRIPTION: transforms.DESCRIPTION,
	KEYWORDS: transforms.KEYWORDS,
	AUTHOR: transforms.AUTHOR,
	AUTHOR_IMAGE: transforms.AUTHOR_IMAGE,
	TWITTER_USERNAME: transforms.TWITTER_USERNAME,
	GOOGLE_PROFILE: transforms.GOOGLE_PROFILE,
	GOOGLE_SITE_VERIFICATION: transforms.GOOGLE_SITE_VERIFICATION,
	GOOGLE_ANALYTICS_UA: transforms.GOOGLE_ANALYTICS_UA,
	GOOGLE_ANALYTICS_URL: transforms.GOOGLE_ANALYTICS_URL,
	FACEBOOK_APP_ID: transforms.FACEBOOK_APP_ID
});

const extractSCSSBundle = new MiniCssExtractPlugin({
	filename: '[name].[contenthash].css',
	chunkFilename: '[id].[contenthash].css'
});

// console.log('webpack; node-env ', process.env.NODE_ENV);
const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
// console.log('webpack; PRODUCTION_MODE ', PRODUCTION_MODE);

const config = {};

config.entry = ['./src/index.jsx', './scss/styles.scss'];

config.optimization = {
	splitChunks: {
		cacheGroups: {
			commons: {
				test: /[\\/]node_modules[\\/]/,
				name: 'vendor',
				chunks: 'initial'
			}
		}
	},
	runtimeChunk: {
		name: 'manifest'
	},
	minimizer: [
		new UglifyJsPlugin({
			sourceMap: true,
			uglifyOptions: {
				ecma: 8,
				mangle: false,
				keep_classnames: true,
				keep_fnames: true
			}
		})
	]
};

// config.plugins = [CleanPLugin, AnalyzerPlugin, HTMLPlugin];

config.plugins = [
	// new CleanWebpackPlugin([DIST_FOLDER]),

	// list all React app required env variables
	new webpack.EnvironmentPlugin(['NODE_ENV', 'GOOGLE_APP_ID']),

	HTMLPlugin,
	// new InlineSourcePlugin(),

	// create css bundle
	extractSCSSBundle,
	// new MiniCssExtractPlugin(),

	// copy images
	new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }], {
		debug: copyWebpackPluginOptions
	}),

	// copy static assets
	new CopyWebpackPlugin([{ from: 'static/sitemap.xml', to: '.' }], {
		debug: copyWebpackPluginOptions
	}),
	new CopyWebpackPlugin([{ from: 'static/google9104b904281bf3a3.html', to: '.' }], {
		debug: copyWebpackPluginOptions
	}),
	new CopyWebpackPlugin([{ from: 'static/robots.txt', to: '.' }], {
		debug: copyWebpackPluginOptions
	}),
	new CopyWebpackPlugin([{ from: 'static/favicon_package', to: '.' }], {
		debug: copyWebpackPluginOptions
	}),

	// copy modal
	new CopyWebpackPlugin([{ from: 'static/modal.html', to: '.' }], {
		debug: copyWebpackPluginOptions
	}),

	// new CopyWebpackPlugin([{ from: 'scss/fonts', to: 'assets/fonts' }], { debug: 'info' })
];

config.module = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.(sass|scss)$/,
			include: INCLUDE_SCSS_FOLDER,
			exclude: [SCSS_FOLDER, /node_modules/],
			use: ['style-loader', 'css-loader', 'sass-loader']
		},
		{
			test: /\.(sass|scss)$/,
			include: SCSS_FOLDER,
			exclude: [INCLUDE_SCSS_FOLDER, /node_modules/],
			use: [
				{
					loader: MiniCssExtractPlugin.loader
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						modules: true,
						localIdentName: '[local]___[hash:base64:5]'
					}
				},
				{
					loader: 'sass-loader'
				}
			]
		},
		{
			test: /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
			// include: [FONTS_FOLDER, ICONS_FOLDER],
			include: [ICONS_FOLDER],
			loader: 'file-loader?name=assets/[name].[ext]'
		}
	]
};

config.resolve = {
	extensions: ['.js', '.jsx']
};

if (PRODUCTION_MODE) {
	config.output = {
		path: DIST_FOLDER,
		publicPath: '/',
		chunkFilename: '[name].[chunkhash].bundle.js',
		filename: '[name].[chunkhash].bundle.js'
	};
	config.mode = 'production';
	config.devtool = 'cheap-module-source-map';
}

if (!PRODUCTION_MODE) {
	config.output = {
		path: DIST_FOLDER,
		publicPath: '/',
		chunkFilename: '[name].bundle.js',
		filename: '[name].bundle.js'
	};

	config.mode = 'development';
	config.devtool = 'inline-source-map';

	config.devServer = {
		contentBase: DIST_FOLDER,
		compress: false,
		// inline: true,
		port: 8002,
		clientLogLevel: 'info',
		historyApiFallback: true,
		proxy: {
			'/api/**': {
				target: 'http://localhost:3001',
				changeOrigin: true,
				secure: false
			}
		}
	};
}

module.exports = config;

/*
module.exports = {
  plugins: [
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 100,
      maxSize: 200,
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        }
      }
    }
  }
}
*/
