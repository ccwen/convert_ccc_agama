var parser_agama=require("./parser_agama");
var list=require("fs").readFileSync("./genxml/sa.lst","utf8").split(/\r?\n/);
var workaround_sa=require("./workaround_sa");
var processfiles=function(outfn){
	parser_agama(outfn,list,
	{
		pat_sid: /<title>雜阿含(.*?)經</
		,workaround:workaround_sa
		,sourcepath:"../ccc_translation/SA/"
	});
}
module.exports={processfiles};