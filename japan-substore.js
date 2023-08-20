function filter(proxies, targetPlatform) {
	return proxies.map(p => {
		return p.name.indexOf("日本") !== -1 || p.name.indexOf("JP") !== -1;
	});
}