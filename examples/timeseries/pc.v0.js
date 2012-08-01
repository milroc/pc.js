(function(exports) {
pc = exports.pc = {version: "0.2.0"}; // semver
pc.property = function(value) {
	return function(_) {
		if(!arguments.length) return value;
		value = _;
		return this;
	};
};
pc.criteria_property = function(value, criteria) {
	return function(_) {
		if (!arguments.length) return value;
		if (criteria(_)) {
			value = _;
			return this;
		}
		return null;
	};
};pc.typed_property = function(value, type) {
	if (arguments.length === 1) type = typeof value;
	return pc.criteria_property(value, function(_) { return (typeof _ === type); });
};
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
};pc.numbers = {};pc.numbers.positive = function(value, zero_set) {
    zero_set = (typeof zero_set === "undefined") ? true : zero_set; 
    // set to true because of convenience for a developer not due to zero being a positive number
    return pc.criteria_property(value, function(_) { return (typeof _ === "number" && ((zero_set && _ >= 0) || _ > 0)); });
};
})(this);
