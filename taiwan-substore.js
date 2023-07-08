function filter(proxies, targetPlatform) {
	return proxies.map(p => {
		return p.name.indexOf("台湾") !== -1;
	});
}