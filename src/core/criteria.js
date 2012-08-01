pc.criteria_property = function(value, criteria) {
	return function(_) {
		if (!arguments.length) return value;
		if (criteria(_)) {
			value = _;
			return this;
		}
		return null;
	};
};