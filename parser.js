var getfield=function(content,regex){
	var field;
	field=content.match(regex);
	if (field && field[1]) field=field[1];
	return field||"";	
}
/* sa0015.htm has overlap link */
/* 有<a onMouseover="note(this,39);">異<a onMouseover="note(this,31);">比丘</a></a> */
var cleanups=require("./cleanups");
var docleanups=function(content) {
	for (var i=0;i<cleanups.length;i++) {
		content=content.replace(cleanups[i][0],cleanups[i][1]);
	}
	return content;
}

var doworkaround=function(content,workaround){
	for (var i=0;i<workaround.length;i++) {
		content=content.replace(workaround[i][0],workaround[i][1]);
	}
	return content;
}

var parseNote=function(content){
	var links=[];
	content=content.replace(/<a onMouseover="([a-z]{4,5})\(this,(.+?)\);">(.*?)<\/a>/g,function(m,type,noteid,text,idx){
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
var parseSutta=function(content){
	var out={},lastname="",lastidx=0;
	content.replace(/<span class="sutra_name">(.*?)<\/span>/g,function(m,name,idx){
		if (lastname) out[lastname]=content.substr(lastidx,idx);
		lastidx=idx;
		lastname=name;
	});

	out[lastname]=content.substring(lastidx);
	return out;
}

var parseSuttaName=function(cnames,sid){
	var names=[];

	for (var i=0;i<cnames.length;i++) {
		var cname=cnames[i]
		var m=cname.match(/別譯雜阿含(\d+)/);
		if (m) {names.push("ga"+m[1]);continue}

		var m=cname.match(/雜阿含(\d+)/);
		if (m) {names.push("sa"+m[1]);continue}

		var m=cname.match(/中阿含(\d+)/);
		if (m) {names.push("ma"+m[1]);continue}

		var m=cname.match(/長阿含(\d+)/);
		if (m) {names.push("da"+m[1]);continue}

		var m=cname.match(/增壹阿含(\d+)品(\d+)經/);
		if (m) {names.push("aa"+m[1]+"."+m[2]);continue}

		var m=cname.match(/相應部?(\d+)相應第?([ 0-9\-]+?)經/);
		if (m) {names.push("sn"+m[1]+"."+m[2]);continue}

		var m=cname.match(/中部([ 0-9\-]+?)經/);
		if (m) {names.push("mn"+m[1]);continue}

		var m=cname.match(/長部([ 0-9\-]+?)經/);
		if (m) {names.push("dn"+m[1]);continue}


		var m=cname.match(/增支部(\d+)集([ 0-9\-]+?)經/);
		if (m) {names.push("an"+m[1]+"."+m[2]);continue}

		var m=cname.match(/No\.(\d+)/);
		if (m) {names.push("taisho"+m[1]);continue}

		if (cname=="佛說大三摩惹經"){
			names.push("taisho19");continue;
		}

		if (cname.trim())console.log("cannot parse sutta name",cname,"sid",sid);
	}
	return names;
}
var corrections=[];
var reset=function(){
	corrections=[];
}
var getcorrections=function(){
	return corrections;
}
var docorrections=function(content) {
	//only process {x}[y]
	return content.replace(/\{(.+?)\}\[(.+?)\]/g,function(m,m1,m2){
		if  (m1.length==m2.length) {
			corrections.push([m1,m2]);
			return m2;
		} else {
			return m;
		}
	});
}

var convertPnumToAnchor=function(content) {//so that parseNotes will convert it into a external note
	return content.replace(/\n?<!(.+?)>\n?/g,function(m,m1){
		return '<a onMouseover="para(this,'+m1+');"></a>';
	})
}

var getAgama=function(content,sid,fn,workaround){
	content=content.replace(/\r?\n/g,"\n");
	var text=getfield(content,/<div class="agama">([\S\s]*?)<div class="nikaya">/);

	if (!text) {
		text=getfield(content,/<br><u>([\S\s]*?)<div /); //ma069 has no nikaya/south, ends with <div
	}
	if (!text) {
		text=getfield(content,/<br><u>([\S\s]*?)<font color="#00605B">/);
	}	
	if (!text) {
		text=getfield(content,/<div class="agama">([\S\s]*?)<div id="south">/);
	}
	if (!text) {
		text=getfield(content,/<br><u>([\S\s]*?)<\/p>/);	//sa0052
	}

	if (!text) {
		text=getfield(content,/<br><u>([\S\s]*?)<\/tr>/);	//sa0052
	}


	var suttas=parseSutta(text);
	var ref=parseSuttaName(Object.keys(suttas),sid);

	var agama=suttas[Object.keys(suttas)[0]]; //assuming the first suttra is what we want

	

	var firstbr=agama.indexOf("<br>　　");
	agama=agama.substr(firstbr+6).replace(/\n<br>　　/g,"\n");

	agama=doworkaround(agama,workaround).trim();
	agama=docleanups(agama);
	agama=docorrections(agama);
	
	//replace <!xxx> to <a> format, to build a paragraph breaker

	

	//text pos is fixed

	var parsed=parseNote(agama);

	var hastag=parsed.content.indexOf("<");
	if (hastag>-1) {
		console.log("has tag in",fn, parsed.content.substr(hastag,40));
	}

	return {text:parsed.content,links:parsed.links,ref};		
}

var getNikaya=function(content,sid,fn,workaround){
	content=content.replace(/\r?\n/g,"\n");
	var text=getfield(content,/<div class="nikaya">([\S\s]*?)<\/?div/);

	if (!text) {
		console.log("cannot get content");
		return;
//		text=getfield(content,/<br><u>([\S\s]*?)<div /); //ma069 has no nikaya/south, ends with <div
	}

	var suttas=parseSutta(text);
	var ref=parseSuttaName(Object.keys(suttas),sid);

	var nikaya=suttas[Object.keys(suttas)[0]]; //assuming the first suttra is what we want

	nikaya=nikaya.replace("\n<br>\n</div>\n","");

	var firstbr=nikaya.indexOf("<br>　　");
	nikaya=nikaya.substr(firstbr+6).replace(/\n<br>　　/g,"\n");

	nikaya=doworkaround(nikaya,workaround).trim();
	nikaya=docleanups(nikaya);
	nikaya=docorrections(nikaya);

	nikaya=convertPnumToAnchor(nikaya);
	//text pos is fixed

	var parsed=parseNote(nikaya);

	var hastag=parsed.content.indexOf("<");
	if (hastag>-1) {
		console.log("has tag in",fn,parsed.content.substr(hastag,40));
	}

	return {text:parsed.content,links:parsed.links,ref};		
}

var parseCorresponse=function(corresponse,sid){
	corresponse=corresponse.trim()
	corresponse=corresponse.replace(/南傳:無/,"");
	corresponse=corresponse.replace(/無/,"");
	
	var out=[];
	corresponse.replace(/(\d+)相應(.*?)經/g,function(m,m1,m2){
		var sutras=m2.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("sn"+m1+"."+sutras[i]);		
		}
	});

	corresponse.replace(/增支部(.*?)集(.*?)經?/g,function(m,m1,m2){
		var sutras=m2.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("an"+m1+"."+sutras[i]);
		}
	});

	corresponse.replace(/中部(.*?)經?/g,function(m,m1){ ///sa0304, missing 經 in <span class="nikaya">
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

	corresponse.replace(/小部\/經集(.*?)品(.*?)經/g,function(m,vagga,m1){
		var sutras=m1.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("kn.sn."+vagga+"."+sutras[i]);
				//console.log(vagga,sutras[i],corresponse)
		}
	});

	corresponse.replace(/小部\/自說經(.*?)品(.*?)經/g,function(m,vagga,m1){
		var sutras=m1.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("kn.udana."+vagga+"."+sutras[i]);
				//console.log(vagga,sutras[i],corresponse)
		}
	});
	corresponse.replace(/小部\/本生經(.*?)/g,function(m,m1){
		var sutras=m1.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("kn.jataka."+sutras[i]);
				//console.log(vagga,sutras[i],corresponse)
		}
	});


	corresponse.replace(/小部\/長老尼偈(.*?)章(.*?)經\/(.*?)偈/g,function(m,vagga,m1,verse){
		var sutras=m1.split(",");
		for (var i=0;i<sutras.length;i++) {
				out.push("kn.thi."+vagga+"."+sutras[i]+"verse");
				//console.log(vagga,sutras[i],verse,corresponse)
		}
	});

	corresponse.replace(/律藏\/大品/g,function(m,vagga,m1){
		out.push("vin.mahavaggapali");
		//console.log("maha",corresponse)
	});	

	if (!out.length && corresponse) {
		console.log("warning , some sutra might not be parsed",corresponse,"sid",sid);
		out.push(corresponse);
	}
	return out;
}

module.exports={reset,getcorrections,
	getfield,parseNote,parseCorresponse,parseNoteDef,getAgama,getNikaya};