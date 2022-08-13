module.exports = function (config, env, helpers) {
	// TODO: clean up later, just removes the async loader
	if (env.isProd && !env.isServer) {
		config.module.rules.pop();
	}
};
