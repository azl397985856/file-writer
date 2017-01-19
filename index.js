function writer(fileName, content, encoding){
    var a = document.createElement('a');
	var url = window.URL.createObjectURL(new Blob([content], { type: "text/plain;charset=" + (encoding || 'utf-8') }));
	a.href = url;
	a.download = fileName || 'file';
	a.click();
	window.URL.revokeObjectURL(url);
}
module.exports = writer;