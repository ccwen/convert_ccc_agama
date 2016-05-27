var parser_agama=require("./parser_agama");
var list=require("fs").readFileSync("./genxml/da.lst","utf8").split(/\r?\n/);
var workaround_da=require("./workaround_da");
var processfiles=function(outfn){
  parser_agama(outfn,list,
  {
    pat_sid: /<title>長阿含(.*?)經</
    ,workaround:workaround_da
    ,sourcepath:"../ccc_translation/DA/"
  });
}
module.exports={processfiles};
