var fs=require("fs");
var list=fs.readFileSync("./genxml/sa.lst","utf8").split(/\r?\n/);
//list.length=10;
var out={};
var {getAgama,getNikaya,getfield,parseNote,parseNoteDef,parseCorresponse}=require("./parser");

var processfile=function(fn){
	var content=fs.readFileSync("../ccc_translation/SA/"+fn,"utf8").replace(/\r?\n/g,"\n");

	var subject    =getfield(content,/<span class="subject">關涉主題：(.*?)</);
	if (!subject)	 subject=getfield(content,/關涉主題：(.*)/);

	var sid        =getfield(content,/<title>雜阿含(.*?)經</);
	var corr       =getfield(content,/<span class="nikaya">南傳:(.*?)</);
	if (!corr)     corr=getfield(content,/<font color="#525000">南傳:(.*)</);

	var corresponse=parseCorresponse(corr);
	
  var notes=parseNoteDef(content);
  var text_with_links=getAgama(content);
  var links=text_with_links.links;
  var at=text_with_links.text.indexOf("<a");
  if (at>-1){
  	console.log("error link in ",sid,text_with_links.text.substr(at-2,30));
  }

  if (!text_with_links.text) {
  	//console.log("empty sutra",sid)
  }

}

var processfiles=function(lst){
	lst=lst||list;
	lst.forEach(processfile);
}


module.exports={processfiles};