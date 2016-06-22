var fs = require('fs');

function countFiles(path, ext, callback) {
	var getExt = function(name) {
		var ext = name.match(/(.+\.)([a-zA-Z]{2,4})/);
		if (ext)
			return ext[2];
	}

	var fileList = [];

	var directory = fs.readdir(path, function(err, list) {
		if (err) {return callback(err);}
		else {
			for (var i = 0; i < list.length; i++) {
				if (getExt(list[i]) == ext) {
					fileList.push(list[i]);
				}
			}
			return callback(null, fileList);
		}
	});
}

module.exports = countFiles;