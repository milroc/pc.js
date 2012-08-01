pc.default_property = function(value, defaults, only_defaults) {
	only_defaults = (typeof only_defaults === "undefined") ? false : only_defaults;
	if (typeof value === "string" && value in defaults) value = defaults[value];
	return function(_) {
		if (!arguments.length) return value;
		if (typeof _ === "string" && _ in defaults) { //figure out more efficient way
			value = defaults[_];
			return this;
		} else if (only_defaults) return null;
		value = _;
		return this;
	};
};