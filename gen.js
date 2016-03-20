var fs=require("fs");
var sourceroot="../../ccc/agama/htdocs/agama/";
var DN=[],MN=[],SN=[],AN=[];
var Pali=require("./pali");
var Chinese=require("./chinese");

var listfiles=function() {
	var i=0;
	var pad=function(n,lead) {
		var s=("0000"+n);
		return s.substr(s.length-lead);
	}
	for (i=1;i<=34;i+=1)  DN.push("DN/DN"+pad(i,2)+".htm");	
	for (i=1;i<=152;i+=1) MN.push("MN/MN"+pad(i,3)+".htm");	
	for (i=1;i<=1806;i+=1) SN.push("SN/SN"+pad(i,4)+".htm");	
	for (i=1;i<=1764;i+=1) AN.push("AN/AN"+pad(i,4)+".htm");	
}
listfiles();

var chi_signature='<div class="nikaya">';
var pali_signature='<div class="pali">';
var note_signature='<div class="comp">';

var split_pali_chinese=function(content,fn){
	var chi_start=content.indexOf(chi_signature);
	var pali_start=content.indexOf(pali_signature);
	var note_start=content.indexOf(note_signature);
	if (chi_start===-1 || pali_start===-1 || note_start===-1) {
		throw "cannot find Chinese or Pali or Note signature in file "+fn;
	}
	var chi=content.substring(chi_start+chi_signature.length,pali_start);
	var pali=content.substring(pali_start+pali_signature.length, note_start);
	var note=content.substring(note_start+note_signature.length);
	return {chi,pali,note};
}

var convert=function(fn){
	var content=fs.readFileSync(sourceroot+fn,"utf8");
	var res=split_pali_chinese(content,fn);
	var pali=Pali.split_paragraph(res.pali,fn);
	var chi=Chinese.split_paragraph(res.chi,fn);
	//console.log(pali.length);
	console.log(fn+" "+chi.paragraph.join(" "));
}

//convert(DN[0]);
DN.map(convert);
