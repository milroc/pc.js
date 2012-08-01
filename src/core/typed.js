pc.typed_property = function(value, type) {
	if (arguments.length === 1) type = typeof value;
	return pc.criteria_property(value, function(_) { return (typeof _ === type); });
};
