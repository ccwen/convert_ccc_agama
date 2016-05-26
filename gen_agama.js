/*
generate xml from html
*/


var parsers={sa:require("./parser_sa")};
for (i in parsers){
	console.log("processing",i);
	parsers[i].processfiles();
}