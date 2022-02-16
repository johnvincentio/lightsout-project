//

const path = require('path');
const webpack = require('webpack');

const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const { GenerateSW } = require('workbox-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

const transforms = require('./transforms');

/*
 * Define folders
 */

const SCSS_FOLDER = path.resolve(__dirname, './scss');
const FONTS_FOLDER = path.resolve(__dirname, './src/fonts');
const DIST_FOLDER = path.resolve(__dirname, './dist');

/*
 * Define home url
 */
const { HOME_URL } = process.env;
console.log('HOME_URL ', HOME_URL);

/*
 * Define production mode
 */

console.log('webpack; node-env ', process.env.NODE_ENV);
const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
console.log('webpack; PRODUCTION_MODE ', PRODUCTION_MODE);

/*
 * Define plugins
 */

const HTMLPlugin = new HtmlWebpackPlugin({
	template: './templates/index.hbs',
	filename: './index.html',
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

let extractCSSOptions = { filename: '[name].css' };
if (PRODUCTION_MODE) {
	extractCSSOptions = {
		filename: '[name].[contenthash].css',
		chunkFilename: '[id].[contenthash].css'
	};
}

const extractCSSBundle = new MiniCssExtractPlugin(extractCSSOptions);

/*
 * Define entry points
 */

const config = {};

config.entry = ['./src/index.jsx', './scss/styles.scss'];

config.resolve = {
	extensions: ['.js', '.jsx']
};

/*
 * Define optimization
 */

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
		new TerserPlugin({
			// sourceMap: true
			terserOptions: {
				// ecma: 8,
				mangle: false,
				keep_classnames: true,
				keep_fnames: true
			}
		})
	]
};

/*
 * Define rules
 */

config.module = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.(sass|scss)$/,
			include: [SCSS_FOLDER],
			exclude: [/node_modules/],
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
		},
		{
			test: /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
			include: [FONTS_FOLDER],
			exclude: /node_modules/,
			type: 'asset/resource'
		}
	]
};

/*
 * Define plugins
 */

const plugins = [
	new webpack.EnvironmentPlugin(['HOME_URL', 'NODE_ENV']),

	HTMLPlugin,

	extractCSSBundle, // allow import scss and css

	new CopyWebpackPlugin({
		// copy assets
		patterns: [
			{ from: 'static/sitemap.xml', to: '.' },
			{ from: 'static/robots.txt', to: '.' },
			{ from: 'static/google9104b904281bf3a3.html', to: '.' },
			{ from: 'static/favicon_package', to: '.' }
		]
	})
];

if (PRODUCTION_MODE) {
	config.plugins = [
		...plugins,
		new WebpackManifestPlugin({
			fileName: 'asset-manifest.json' // Not to confuse with manifest.json
		}),
		new GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		})
	];
}

if (!PRODUCTION_MODE) {
	config.plugins = [...plugins];
}

if (PRODUCTION_MODE) {
	config.output = {
		path: DIST_FOLDER,
		publicPath: `${HOME_URL}/`,
		chunkFilename: '[name].[chunkhash].bundle.js',
		filename: '[name].[chunkhash].bundle.js'
	};
	config.mode = 'production';
	config.devtool = 'cheap-module-source-map';
}

if (!PRODUCTION_MODE) {
	config.output = {
		path: DIST_FOLDER,
		publicPath: `${HOME_URL}/`,
		chunkFilename: '[name].bundle.js',
		filename: '[name].bundle.js'
	};

	config.mode = 'development';
	config.devtool = 'inline-source-map';

	config.devServer = {
		compress: false,
		port: 9432,
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
