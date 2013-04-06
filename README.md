# pc.js

pc.js  (property creator) is a JavaScript library for generating properties for a method chaining methodology similar to that on [reusable charts](http://bost.ocks.org/mike/chart).

This library is small (minified < 800 bytes). 

You should not be using this library to simply reduce lines of code in projects. pc.js was made in order to help maintain some structure and re-readability (debugging) to your code. It allows definitions, default values, and criteria to all be visible in one location in the file, while the actual code based off of these values is separated from this.

## Development

To help develop pc.js, you need to have [Node.js](http://www.nodejs.org)
and [NPM](http://www.npmjs.org) installed. Once you have done that, run the
following from the root directory of this repository to install the development
dependencies:

    make install

## Thanks

The project structure and Makefile is based on that of science.js (which is based on D3), so a big thank you
goes to [Mike Bostock](http://bost.ocks.org/mike/) for this.

Change to test for Dan