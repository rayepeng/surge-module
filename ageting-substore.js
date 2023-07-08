function filter(proxies, targetPlatform) {
	return proxies.map(p => {
		return p.name.indexOf("阿根廷") !== -1;
	});
}