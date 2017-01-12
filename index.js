function writer(fileName, content, encoding){
    var a = document.createElement('a');
	var url = window.URL.createObjectURL(new Blob([content], { type: "text/plain;charset=" + encoding }));
	a.href = url;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(url);
}
module.exports = writer;