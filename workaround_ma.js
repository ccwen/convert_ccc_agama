var workarounds=[
[/<a onMouseover="note\(this,65\);"><a onMouseover="note\(this,31\);">比丘<\/a>眾<\/a>/g
,'<a onMouseover="note(this,65);">比丘眾</a>']
,[/<a onMouseover="note\(this,535\);">四方<a onMouseover="note\(this,31\);">比丘<\/a>眾<\/a>/g,
'<a onMouseover="note(this,535);">四方比丘眾</a>']
,[/<a onMouseover="local\(this,1\);">毘舍佉<a onMouseover="note\(this,99\);">優婆夷<\/a><\/a>/g,
'<a onMouseover="local(this,1);">毘舍佉優婆夷</a>'
]
,[/<a onMouseover="local\(this,2\);">唯<a onMouseover="note\(this,31\);">比丘<\/a>眾<\/a>/g, //ma190
'<a onMouseover="local(this,2);">唯比丘眾</a>'
]
,[/<font color="#00605B">/g,""]
,[/\n<br>/g,"\n"]
,[/\n<br>/g,"\n"]  //ma139 has double \n<br>
,[/<br>　　/g,"\n"]
,[/<$/,""]
,[/<\/b>/g,""]
]

module.exports=workarounds;