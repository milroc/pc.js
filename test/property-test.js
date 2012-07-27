require("../pc.v0");

var vows = require("vows"),
	assert = require("assert");

var suite = vows.describe("property");

suite.addBatch({
	"property": {
		topic: function() {
			return pc.property;
		},
		"get and set behavior works": function(property) {
			function foo() {
				ret.bar = property(5);
				function ret() {
					var bar = ret.bar();
					return bar;
				}
				return ret;
			}
			var foobar = foo();
			var barfoo = foo().bar(20);

			assert.equal(foobar.bar(), 5);
			assert.equal(foobar(), 5);
			assert.equal(barfoo.bar(), 20);
			assert.equal(barfoo(), 20);
			foobar.bar(10);
			assert.equal(foobar.bar(), 10);
			assert.equal(foobar(), 10);
		}
	}
});

suite.export(module);