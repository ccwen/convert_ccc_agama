// Chinese related code
var lastnum=1;
var split_paragraph=function(text,fn) {
	var last=0;
	var out=[],paragraph=[];
	text.replace(/<!(\d+)>/g,function(m,m1,idx){
		out.push(text.substring(last,idx));
		last=idx+m.length;
		if (parseInt(m1)<lastnum) lastnum=1;//reset on DN14, DN24
		paragraph.push(lastnum);
		lastnum=parseInt(m1);
	})
	paragraph.push(lastnum);
	out.push(lastnum+"\t"+text.substr(last));
	lastnum++;
	return {text,paragraph};
}

module.exports={split_paragraph};