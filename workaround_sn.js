var workarounds=[
[/<a onMouseover="note\(this,87\);"><a onMouseover="note\(this,87\);">為了托鉢<\/a><\/a>/g,
'<a onMouseover="note(this,87);">為了托鉢</a>'],
[/<a onMouseover="note\(this,114\);"><a onMouseover="note\(this,525\);">八支聖道<\/a><\/a>/g,
'<a onMouseover="note(this,525);">八支聖道</a>'],
[/<a onMouseover="note\(this,92\);"><a onMouseover="note\(this,92\);">靜坐禪修<\/a>中<\/a>/g,
'<a onMouseover="note(this,92);">靜坐禪修</a>中'],
[/<a onMouseover="local\(this,2\);"><a onMouseover="note\(this,31\);">比丘<\/a>收妥於意之尋中<\/a>/g,
'<a onMouseover="local(this,2);">比丘收妥於意之尋中</a>'],
[/<a nMouseover="note\(this,168\);">一向<\/a>/g,
'<a onMouseover="note(this,168);">一向</a>'],
[/<a onMouseover="note\(this,4\);">如來、<a /g,
'<a onMouseover="note(this,4);">如來</a>、<a '],  //sn971
[/活力是我荷重的最強耐力，惡作已被平息載到離軛安穩<\/a>，/g,  //sn0197.htm extra </a>
'活力是我荷重的最強耐力，惡作已被平息載到離軛安穩，'],
[/<a onMouseover="note\(this,39\);">某位<a onMouseover="note\(this,31\);">比丘<\/a><\/a>/g,
'<a onMouseover="note(this,39);">某位比丘</a>'],
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