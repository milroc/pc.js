require("../pc.v0");

var vows = require("vows"),
	assert = require("assert");

var suite = vows.describe("default_property");

suite.addBatch({
	"default_property": {
		topic: function() {
			return pc.default_property;
		},
		"get and set behavior works": function(default_property) {
			function foo() {
				ret.bar = default_property(5);
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
		"test defaults": function(default_property) {
			function foo() {
				ret.bar = default_property("one", {
					"one": function() { return 1; },
					"two": function() { return 2; },
					"three": function() { return 3; } 
				});
				function ret() {
					var bar = ret.bar();
					return bar();
				}
				return ret;
			}

			var f = foo();

			assert.strictEqual(typeof f.bar(), "function");
			assert.equal((f.bar())(), 1);
			assert.equal(f(), 1);
			f.bar(function() { return 4; });
			assert.equal((f.bar())(), 4);
			assert.equal(f(), 4);
			f.bar("two");
			assert.equal((f.bar())(), 2);
			assert.equal(f(), 2);
		},
		"test default only behavior": function(default_property) {
			function foo() {
				ret.bar = default_property("one", {
					"one": function() { return 1; },
					"two": function() { return 2; },
					"three": function() { return 3; } 
				}, true);
				function ret() {
					var bar = ret.bar();
					return bar();
				}
				return ret;
			}

			var f = foo();

			assert.strictEqual(typeof f.bar(), "function");
			assert.equal((f.bar())(), 1);
			assert.equal(f(), 1);
			f.bar(function() { return 4; });
			assert.equal((f.bar())(), 1);
			assert.equal(f(), 1);
			f.bar("two");
			assert.equal((f.bar())(), 2);
			assert.equal(f(), 2);
		} 
	}
});

suite.export(module);