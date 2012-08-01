require("../../pc.v0");

var vows = require("vows"),
    assert = require("assert");

var suite = vows.describe("positive_property");

suite.addBatch({
    "positive_property": {
        topic: function() {
            return pc.numbers.positive;
        },
        "get and set behavior works": function(positive_property) {
            function foo() {
                ret.bar = positive_property(5);
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
        "test positive": function(positive_property) {
            function foo() {
                ret.bar = positive_property(5);
                ret.foobar = positive_property(10, false);
                function ret() {
                    var bar = ret.bar(),
                        foobar = ret.foobar();
                    return [bar, foobar];
                }
                return ret;
            }

            var f = foo();
            assert.equal(f.bar(), 5);
            assert.equal(f.foobar(), 10);
            assert.equal(f.foobar(function() { return "hello";}), null);
            assert.equal(f.bar("5"), null);
            assert.equal(f.bar(), 5);
            assert.equal(f.foobar(), 10);
            assert.equal(f.foobar(0), null);
            assert.equal(f.foobar(), 10);
        }
    }
});

suite.export(module);