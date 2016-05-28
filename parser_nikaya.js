
var fs=require("fs");

//list.length=10;
var out={};
var options={};

var {reset,getcorrections,
	getAgama,getNikaya,getfield,parseNote,parseNoteDef,parseCorresponse}=require("./parser");

var processfile=function(fn){
	var source=options.sourcepath+fn;
	if (!fs.existsSync(source))  {
		if (fn[0]!==";")console.log("not exists",source);
		return;
	}
	var content=fs.readFileSync(source,"utf8").replace(/\r?\n/g,"\n");

	var sid        =getfield(content,options.pat_sid);
	if (!sid) {
		var m=fn.match(/(\d+)/);
		if (m) sid=parseInt(m[1]);
		if (isNaN(sid)) {
			console.log("cannot get sid from content, use filename",fn,sid);
			sid=fn;
		}		
	}
	
  var notes=parseNoteDef(content);
  var text_with_links=getNikaya(content,sid,fn,options.workaround);
  var links=text_with_links.links;


  if (!text_with_links.text) {
  	console.log("empty sutra",sid)
  }
  if (text_with_links.ref.length<2) {
  	// empty ref : no  <span class="sutra_name">
  	// one ref   : no correspondance sutra
  	//more than one: has ref sutra
  	delete text_with_links.ref;
  } else {
  	text_with_links.ref.shift();//remove the first one, as it is same as sid
  }

  out[sid]=text_with_links;
  out[sid].notes=notes;

}

var processfiles=function(collections,lst,opts){
	lst=lst||list;
	options=opts||{};
	options.workaround=options.workaround||require("./workarounds")[collections];
	reset();
	lst.forEach(processfile);
	fs.writeFileSync(options.targetpath+collections+".json",JSON.stringify(out,""," "),"utf8");
	fs.writeFileSync(options.targetpath+collections+"-corr.json",JSON.stringify(getcorrections(),""," "),"utf8");
}

module.exports=processfiles;