/*If this is your input file:

name,age,city
Rene,35,Vancouver
Thomas,29,Portland
Lexi,28,Seattle

Then you should be able to convert it to the following JSON:

[{ "name": "Rene", "age": "35", "city": "Vancouver" },
{ "name": "Thomas", "age": "29", "city": "Portland" },
{ "name": "Lexi", "age": "28", "city": "Seattle" }]
With this command:

$ node csv-to-json.js input.csv output.js*/

var fs = require('fs');

var inputText = fs.readFileSync(process.argv[2], 'utf-8');

var inputArrayByLine = inputText.split(/\n/g);
console.log("inputArrayByLine: ", inputArrayByLine);

var columnHeads = inputText.slice(0, inputText.search(/\n/)).split(',');
console.log("columnHeads: ", columnHeads);

var totalRows = inputText.match(/\n/g).length + 1;
console.log("totalRows: ", totalRows);

var totalColumns = columnHeads.length;
console.log("totalColumns: ", totalColumns);


var output = [];

// var Row = function(params) {
// 	for(var i in params) {
// 		this.i = params.i
// 	}
// }

for(var y = 1; y < totalRows; y++) {
	var line = inputArrayByLine[y].split(',');
	var row = {};
	for(var x = 0; x < totalColumns; x++) {
		row[columnHeads[x]] = line[x];
	}
	output.push(row);
}

console.log(output);

return output;