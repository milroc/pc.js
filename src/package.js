require("../pc.v0");


require("util").puts(JSON.stringify({
	"name": "pc",
	"version": pc.version,
	"description": "property creation for reusable d3.js code.",
	"keywords": ["d3", "visualization"],
	"homepage": "http://milroc.github.com/pc/",
	"author": {"name": "Miles McCrocklin", "url": "http://www.milesmccrocklin.com" },
	"repository": {"type": "git", "url": "http://github.com/milroc/pc.git"},
	"devDependencies": {
		"uglify-js": "1.2.6",
    	"vows": "0.6.0"
	}
}, null, 2));