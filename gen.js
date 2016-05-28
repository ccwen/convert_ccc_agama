/*
generate xml from html
*/


var parsers={
	//sa:require("./parser_sa"),
	//ma:require("./parser_ma"),
	//da:require("./parser_da"),
	//aa:require("./parser_aa"),
//	sn:require("./parser_sn")
	an:require("./parser_an")
};

for (i in parsers){
	console.log("=====processing",i);
	parsers[i].processfiles(i);
}