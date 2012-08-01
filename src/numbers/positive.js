pc.numbers.positive = function(value, zero_set) {
    zero_set = (typeof zero_set === "undefined") ? true : zero_set; 
    // set to true because of convenience for a developer not due to zero being a positive number
    return pc.criteria_property(value, function(_) { return (typeof _ === "number" && ((zero_set && _ >= 0) || _ > 0)); });
};
