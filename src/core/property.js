pc.property = function(value) {
	return function(_) {
		if(!arguments.length) return value;
		value = _;
		return this;
	};
};
