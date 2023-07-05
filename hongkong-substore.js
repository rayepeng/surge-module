function filter(proxies, targetPlatform) {
	return proxies.map(p => {
		return p.name.indexOf("香港") !== -1;
	});
}