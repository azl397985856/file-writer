function writer(fileName, content){
    var a = document.createElement('a');
	var url = window.URL.createObjectURL(new Blob([content]));
	a.href = url;
	a.download = filename;
	a.click();
	window.URL.revokeObjectURL(url);
}
module.exports = writer;