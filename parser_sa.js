var parser_agama=require("./parser_agama");
var list=require("fs").readFileSync("./genxml/sa.lst","utf8").split(/\r?\n/);
var workaround=require("./workaround_sa");
var processfiles=function(collections){
	parser_agama(collections,list,
	{
		pat_sid: /<title>雜阿含(.*?)經</
		,workaround:workaround
		,sourcepath:"../ccc_translation/SA/"
		,targetpath:"genxml/"
	});
}
module.exports={processfiles};