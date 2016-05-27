/*
generate xml from html
*/


var parsers={
	//sa:require("./parser_sa"),
	//ma:require("./parser_ma"),
	da:require("./parser_da")
};

for (i in parsers){
	console.log("=====processing",i);
	parsers[i].processfiles("genxml/"+i);
}