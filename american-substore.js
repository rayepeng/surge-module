function filter(proxies, targetPlatform) {
	return proxies.map(p => {
		return p.name.indexOf("美国") !== -1;
	});
}