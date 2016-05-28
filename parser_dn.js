/*TODO
	build samyutta/seq to sid mapping
*/
var parser_agama=require("./parser_nikaya");
var list=require("fs").readFileSync("./genxml/dn.lst","utf8").split(/\r?\n/);

var processfiles=function(collections){
	parser_agama(collections,list,
	{	
		pat_sid:/<title>長部(.+?)經<\/title>/
		,sourcepath:"../ccc_translation/DN/"
		,targetpath:"genxml/"
	});
}
module.exports={processfiles};