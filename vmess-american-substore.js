function filter(proxies, targetPlatform) {
	return proxies.map(p => {
		return p.type === "vmess" && p.name.indexOf("美国") !== -1;
	});
}