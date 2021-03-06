require("../pc.v0");

var vows = require("vows"),
	assert = require("assert");

var suite = vows.describe("typed_property");

suite.addBatch({
	"typed_property": {
		topic: function() {
			return pc.typed_property;
		},
		"get and set behavior works": function(typed_property) {
			function foo() {
				ret.bar = typed_property(5);
				ret.foobar = typed_property("Hello", "string");
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
		}, 
		"test typed": function(typed_property) {
			function foo() {
				ret.bar = typed_property(5);
				ret.foobar = typed_property("Hello", "string");
				function ret() {
					var bar = ret.bar(),
						foobar = ret.foobar();
					return [bar, foobar];
				}
				return ret;
			}

			var f = foo();
			assert.equal(f.bar(), 5);
			assert.strictEqual(f.foobar(), "Hello");
			assert.equal(f.foobar(function() { return "hello";}), null);
			assert.equal(f.bar("5"), null);
			assert.equal(f.bar(), 5);
			assert.strictEqual(f.foobar(), "Hello");
		}
	}
});

suite.export(module);