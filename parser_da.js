var parser_agama=require("./parser_agama");
var list=require("fs").readFileSync("./genxml/da.lst","utf8").split(/\r?\n/);
var workaround=require("./workaround_da");
var processfiles=function(collections){
  parser_agama(collections,list,
  {
    pat_sid: /<title>長阿含(.*?)經</
    ,workaround:workaround
    ,sourcepath:"../ccc_translation/DA/"
    ,targetpath:"genxml/"
  });
}
module.exports={processfiles};
