// Chinese related code
var lastnum=1;
var split_paragraph=function(text,fn) {
	var last=0,newnum=0,newlast;
	var out=[],paragraph=[];
	text.replace(/<!([0-9\-]+)>/g,function(m,m1,idx){
		out.push(text.substring(last,idx));
		last=idx+m.length;
		if (m1.indexOf("-")>-1) { //RANGE <!xxx-yyy>
			newnum=parseInt(m1.split("-")[0]);  //DN10 457-458
			newlast=parseInt(m1.split("-")[1]);
		} else {
			newlast=newnum=parseInt(m1);
		}
		
		if (newnum<lastnum) lastnum=1;//reset on DN14, DN24
		else if (newnum!=lastnum+1) {
			console.log("wrong paragraph number",fn,lastnum, newnum)
		}
		paragraph.push(lastnum);
		lastnum=newlast;
	})
	paragraph.push(lastnum);
	out.push(lastnum+"\t"+text.substr(last));
	lastnum++;
	return {text,paragraph};
}

module.exports={split_paragraph};