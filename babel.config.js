module.exports = {
	plugins: [
		'@babel/plugin-proposal-class-properties',
	],
	env: {
		development: {
			presets: [
				'@babel/preset-env',
				'@babel/preset-react',
			],
			plugins: ['@babel/plugin-transform-runtime'],
		},
		test: {
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							node: 'current',
						},
					},
				],
				'@babel/preset-react',
			],
		},
		production: {
			presets: [
				[
					'@babel/preset-env',
					{
						modules: false,
						loose: true,
					},
				],
				'@babel/preset-react',
			],
			plugins: ['@babel/plugin-transform-runtime'],
		},
	},
};
