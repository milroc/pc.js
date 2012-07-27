pc.default_property = function(value, defaults) {
	if (typeof value === "string" && value in defaults) value = defaults[value];
	return function(_) {
		if (!arguments.length) return value;
		if (typeof _ === "string" && _ in defaults) { //figure out more efficient way
			value = defaults[_];
			return this;
		}
		value = _;
		return this;
	};
};
