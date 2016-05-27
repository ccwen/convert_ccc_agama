var parser_agama=require("./parser_nikaya");
var list=require("fs").readFileSync("./genxml/sn.lst","utf8").split(/\r?\n/);
var workaround=require("./workaround_sn");

var processfiles=function(outfn){
	parser_agama(outfn,list,
	{
		workaround:workaround
		,sourcepath:"../ccc_translation/SN/"
	});
}
module.exports={processfiles};