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

			// webpackConfig.resolve.fallback = {
			// 	http: false,
			// 	http2: false,
			// 	https: false,
			// 	buffer: false,
			// 	url: false,
			// 	querystring: false,
			// 	os: false,
			// 	stream: false,
			// 	path: false,
			// 	util: false,
			// 	crypto: false,
			// 	zlib: false,
			// 	process: false,
			// 	assert: false,
			// 	fs: false,
			// 	child_process: false,
			// 	net: false,
			// 	tls: false,
			// };

			// Other CRA Webpack
			return webpackConfig;
		},
	},
};
