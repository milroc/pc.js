pc.typed_property = function(value, type) {
	if (arguments.length === 1) type = typeof value;
	return function(_) {
		if (!arguments.length) return value;
		if (typeof _ === type) {
			value = _;
			return this;
		}
		return null;
	};
};
