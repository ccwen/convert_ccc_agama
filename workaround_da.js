var workarounds=[
/*
[/<a onMouseover="note\(this,65\);"><a onMouseover="note\(this,31\);">比丘<\/a>眾<\/a>/g
,'<a onMouseover="note(this,65);">比丘眾</a>'],
[/<a onMouseover="note\(this,535\);">四方<a onMouseover="note\(this,31\);">比丘<\/a>眾<\/a>/g,
'<a onMouseover="note(this,535);">四方比丘眾</a>'],
[/<a onMouseover="local\(this,1\);">毘舍佉<a onMouseover="note\(this,99\);">優婆夷<\/a><\/a>/g,
'<a onMouseover="local(this,1);">毘舍佉優婆夷</a>'],
[/<a onMouseover="local\(this,2\);">唯<a onMouseover="note\(this,31\);">比丘<\/a>眾<\/a>/g, //ma190
'<a onMouseover="local(this,2);">唯比丘眾</a>'
],
*/
[/<a onMouseover="note\(this,372\);"><a onMouseover="note\(this,372\);">他化自在天<\/a>王<\/a>/g,
'<a onMouseover="note(this,372);">他化自在天</a>王'],
[/<a onMouseover="local\(this,15\);"><a onMouseover="note\(this,524\);">七覺意<\/a><\/a>/g,
'<a onMouseover="local(this,15);">七覺意</a>'],//local note wins , da5
[/<a onMouseover="note\(this,151\);"><a onMouseover="note\(this,116\);">剎利<\/a>水澆頭種<\/a>/g,
'<a onMouseover="note(this,151);">剎利水澆頭種</a>'], //longer wins

[/<font color="#00605B">/g,""],
[/\n<br>/g,"\n"],
[/\n<br>/g,"\n"],  //ma139 has double \n<br>
[/<br>　　/g,"\n"],
[/<$/,""],
[/<\/b>/g,""],
[/<\/div>/g,""]
]

module.exports=workarounds;