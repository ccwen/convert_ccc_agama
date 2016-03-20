// Pali related code

var split_paragraph=function(paliText) {
	paliText.replace(/<!(\d+)>/,function(m,m1){
		console.log(m1)
	})
	return [];
}

module.exports={split_paragraph};