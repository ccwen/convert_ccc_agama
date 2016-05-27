var workarounds=[
[/<a onMouseover="local\(this,1\);"><a onMouseover="note\(this,522\);">一法<\/a><\/a>/g,
'<a onMouseover="note(this,522);">一法</a>'],//global wins
[/<a onMouseover="note\(this,57\);"><a onMouseover="note\(this,57\);">受持<\/a><\/a>/g,
'<a onMouseover="note(this,57);">受持</a>'],
[/<font color="#00605B">/g,""],
[/<a onMouseover="note\(this,76\);"><a onMouseover="note\(this,321\);">善知識<\/a>法<\/a>/g,
'<a onMouseover="note(this,76);">善知識法</a>'],
[/<a onMouseover="local\(this,1\);"><a onMouseover="note\(this,538\);">鍮婆<\/a><\/a>/g, //dup note aa139
'<a onMouseover="local(this,1);">鍮婆</a>'],
[/<a onMouseover="note\(this,39\);">異<a onMouseover="note\(this,31\);">比丘<\/a><\/a>/g
,'<a onMouseover="note(this,39);">異</a><a onMouseover="note(this,31);">比丘</a>'],
[/北蔭覆五十由旬<\/a>/g,'北蔭覆五十由旬'], //aa346
[/<a onMouseover="note\(this,240\);"><a onMouseover="note\(this,240\);">結\{加\}\[跏\]趺坐<\/a><\/a>/g,
'<a onMouseover="note(this,240);">結{加}[跏]趺坐</a>'], //aa147
[/行<a onMouseover="note\(this,328\);">沙門法<\/a><\/a>/g,
'行<a onMouseover="note(this,328);">沙門法</a>'],//aa257
[/<a onMouseover="note\(this,215\);"><a onMouseover="note\(this,215\);">梵天王<\/a><\/a>/g,
'<a onMouseover="note(this,215);">梵天王</a>'],//aa254
[/\n<br>/g,"\n"],
[/\n<br>/g,"\n"],  //ma139 has double \n<br>
[/<br>　　/g,"\n"],
[/<br>/g,"\n"],
[/\n\n/g,"\n"],
[/<\/span>/g,""],
[/<$/,""],
[/<\/b>/g,""],
[/<\/div>/g,""]
]

module.exports=workarounds;