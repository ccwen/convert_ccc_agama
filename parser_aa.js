var parser_agama=require("./parser_agama");
var list=require("fs").readFileSync("./genxml/aa.lst","utf8").split(/\r?\n/);
var workaround=require("./workaround_aa");
var processfiles=function(outfn){
  parser_agama(outfn,list,
  {
    pat_sid: /佛光本(\d+)經/
    ,workaround:workaround
    ,sourcepath:"../ccc_translation/AA/"
  });
}
module.exports={processfiles};
