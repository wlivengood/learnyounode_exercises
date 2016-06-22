var fs = require('fs');
var path = process.argv[2];
function countNewLines() {
	return fs.readFileSync(path).toString().split("\n").length - 1;
}
console.log(countNewLines(path));