(function(exports) {
pc = exports.pc = {version: "0.1.0"}; // semver
pc.property = function(value) {
	return function(_) {
		if(!arguments.length) return value;
		value = _;
		return this;
	};
};
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
})(this);
