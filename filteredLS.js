var fs = require('fs');
var filePath = process.argv[2];
var extension = process.argv[3];
function getExt(name) {
	ext = name.match(/(.+\.)([a-zA-Z]{2,4})/);
	if (ext)
		return ext[2];
}

function countFiles(path, ext) {
	var fileList = [];
	var directory = fs.readdir(path, function(err, list) {
		for (var i = 0; i < list.length; i++) {
			if (getExt(list[i]) == extension) {
				fileList.push(list[i]);
			}
		}
		for (i = 0; i < fileList.length; i++)
			console.log(fileList[i]);
	});
}
countFiles(filePath, extension);