var workarounds=[
[/<a onMouseover="note\(this,372\);"><a onMouseover="note\(this,372\);">他化自在天<\/a>王<\/a>/g,
'<a onMouseover="note(this,372);">他化自在天</a>王'],
[/<a onMouseover="local\(this,15\);"><a onMouseover="note\(this,524\);">七覺意<\/a><\/a>/g,
'<a onMouseover="local(this,15);">七覺意</a>'],//local note wins , da5
[/<a onMouseover="note\(this,151\);"><a onMouseover="note\(this,116\);">剎利<\/a>水澆頭種<\/a>/g,
'<a onMouseover="note(this,151);">剎利水澆頭種</a>'], //longer wins, da6

[/<font color="#00605B">/g,""],
[/\n<br>/g,"\n"],
[/\n<br>/g,"\n"],  //ma139 has double \n<br>
[/<br>　　/g,"\n"],
[/<$/,""],
[/<\/b>/g,""],
[/<\/div>/g,""]
]

module.exports=workarounds;