var getfield=function(content,regex){
	var field;
	field=content.match(regex);
	if (field && field[1]) field=field[1];
	return field||"";	
}
/* sa0015.htm has overlap link */
/* 有<a onMouseover="note(this,39);">異<a onMouseover="note(this,31);">比丘</a></a> */

var workarounds=[
		[/<a onMouseover="note\(this,39\);">異<a onMouseover="note\(this,31\);">比丘<\/a><\/a>/g
		,'<a onMouseover="note(this,39);">異</a><a onMouseover="note(this,31);">比丘</a>']
,
	[/<a onMouseover="local\(this,1\);">餘五<a onMouseover="note\(this,31\);">比丘<\/a><\/a>/g
	,'<a onMouseover="local(this,1);">餘五比丘</a>'
	]
]
var workaround=function(content){
	for (var i=0;i<workarounds.length;i++) {
		content=content.replace(workarounds[i][0],workarounds[i][1]);
	}
	return content;
}

var parseNote=function(content){
	var links=[];
	content=content.replace(/<a onMouseover="(.*?)\(this,(\d+)\);">(.*?)<\/a>/g,function(m,type,noteid,text,idx){
		links.push([idx,text.length,noteid,type]);
		return text;
	});
	return {content,links};
}
var parseNoteDef=function(content){
	var out={};
	content.replace(/<span id="note(\d+)">(.*?)<\/span>/g,function(m,m1,m2){
		var notedef=parseNote(m2);
		if (notedef.links.length) out[m1+"_notes"]=notedef.links
		out[m1]=notedef.content;
	});
	return out;
}
var parseGA=function(content) {//別譯雜阿含
	var gapos=content.indexOf('<span class="sutra_name">別譯');
	if (gapos>0){
		return {agama:content.substr(0,gapos),ga:content.substr(gapos)};
	} else {
		return {agama:content,ga:""};
	}
}
var getAgama=function(content){
	content=content.replace(/\r?\n/g,"\n");
	var text=getfield(content,/<div class="agama">([\S\s]*?)<div class="nikaya">/);

	if (!text) {
		text=getfield(content,/<br><u>([\S\s]*?)<font color="#00605B">\n<div id="south">/);
	}

	var {agama,ga}=parseGA(text);

	agama=agama.replace("\n<br>\n</div>\n","");

	var firstbr=agama.indexOf("<br>　　");
	agama=agama.substr(firstbr+6).replace(/\n<br>　　/g,"\n");
	agama=agama.replace(/<br>/g,"");
	agama=agama.replace(/<\/div>/g,"");
	agama=workaround(agama.trim());

	var SA=parseNote(agama);

	if (ga) {
		var firstbr=ga.indexOf("<br>　　");
		sid=ga.match(/<span class="sutra_name">別譯雜阿含(.*?)經</);
		if (sid) sid=sid[1];
		ga=ga.substr(firstbr+6).replace(/\n<br>　　/g,"\n");
		ga=ga.replace(/<br>/g,"");
		ga=ga.replace(/<\/div>/g,"");
		ga=ga.trim();

		var GA=parseNote(ga);
		return {text:SA.content,links:SA.links,text_ga:GA.content,links_ga:GA.links,sid_ga:sid};
	} else {
		return {text:SA.content,links:SA.links};		
	}
}
var getNikaya=function(content){

}

var parseCorresponse=function(corresponse){
	corresponse=corresponse.replace(/南傳:無/,"");
	corresponse=corresponse.replace(/無/,"");
	
	var out=[];
	corresponse.replace(/(\d+)相應(.*?)經/g,function(m,m1,m2){
		var sutras=m2.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("sn"+m1+"."+sutras[i]);		
		}
	});

	corresponse.replace(/增支部(.*?)集(.*?)經/g,function(m,m1,m2){
		var sutras=m2.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("an"+m1+"."+sutras[i]);
		}
	});

	corresponse.replace(/中部(.*?)經/g,function(m,m1){
		var sutras=m1.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("mn"+sutras[i]);
		}
	});

	corresponse.replace(/長部(.*?)經/g,function(m,m1){
		var sutras=m1.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("dn"+sutras[i]);
		}
	});


	if (!out.length && corresponse) {
		console.log("warning , some sutra might not be parsed",corresponse);
		out.push(corresponse);
	}
	return out;
}

module.exports={getfield,parseNote,parseCorresponse,parseNoteDef,getAgama,getNikaya};