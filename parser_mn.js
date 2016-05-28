/*TODO
	build samyutta/seq to sid mapping
*/
var parser_agama=require("./parser_nikaya");
var list=require("fs").readFileSync("./genxml/mn.lst","utf8").split(/\r?\n/);

var processfiles=function(collections){
	parser_agama(collections,list,
	{	
		pat_sid:/<title>中部(.+?)經<\/title>/
		,sourcepath:"../ccc_translation/MN/"
		,targetpath:"genxml/"
	});
}
module.exports={processfiles};