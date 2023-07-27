function filter(proxies, targetPlatform) {
	return proxies.map(p => {
		// 判断是否有美国或者US
		return (p.name.indexOf("美国") !== -1) || (p.name.indexOf("US") !== -1);
	});
}