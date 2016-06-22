var myModule = require('./myModule');
var filePath = process.argv[2];
var extension = process.argv[3];

function callback(err, list) {
	if (err) {throw err;}
	for (i=0; i<list.length; i++)
		console.log(list[i]);
}

myModule(filePath, extension, callback);