// Webpack overwrite / craco configurations
module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.module.rules.push({
				// Remove [contenthash] after file names
				test: /\.(pdf|jpg|png|gif|webp|mp4)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/media/[name][ext]',
				},
			});

			// Other CRA Webpack
			return webpackConfig;
		},
	},
};
