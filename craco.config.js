// Webpack overwrite / craco configurations
module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			// Modify the output path for PDFs specifically
			// webpackConfig.module.rules.push({
			// 	test: /\.pdf$/, // Target only PDF files
			// 	type: 'asset/resource',
			// 	generator: {
			// 		filename: '[name][ext]', // Set your desired folder name
			// 	},
			// });

			// Remove [contenthash] after file names
			// webpackConfig.module.rules.push({
			// 	test: /\.(jpg|png|gif|webp|mp4)$/,
			// 	type: 'asset/resource',
			// 	generator: {
			// 		filename: 'static/assets/[name][ext]',
			// 	},
			// });

			// Other CRA Webpack
			return webpackConfig;
		},
	},
};
