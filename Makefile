NODE_PATH ?= ./node_modules
JS_COMPILER = $(NODE_PATH)/uglify-js/bin/uglifyjs
JS_TESTER = $(NODE_PATH)/vows/bin/vows

all: \
	pc.v0.js \
	pc.v0.min.js \
	package.json

.INTERMEDIATE pc.v0.js: \
	src/core/core.js \
	src/core/property.js \
	src/core/criteria.js \
	src/core/typed.js \
	src/core/defaults.js \
	src/numbers/numbers.js \
	src/numbers/positive.js \
	Makefile

test: all
	@$(JS_TESTER)

%.min.js: %.js Makefile
	@rm -f $@
	$(JS_COMPILER) < $< > $@

%.js:
	@rm -f $@
	@echo '(function(exports) {' > $@
	cat $(filter %js,$^) >> $@
	@echo '})(this);' >> $@
	$chmod a-w $@

install:
	mkdir -p node_modules
	npm install

package.json: pc.v0.js src/package.js
	@rm -f $@
	node src/package.js > $@
	@chmod a-w $@

clean:
	rm -f pc*.js package.json