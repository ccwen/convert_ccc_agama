var workarounds=[
		[/<a onMouseover="note\(this,39\);">異<a onMouseover="note\(this,31\);">比丘<\/a><\/a>/g
		,'<a onMouseover="note(this,39);">異</a><a onMouseover="note(this,31);">比丘</a>']
,
	[/<a onMouseover="local\(this,1\);">餘五<a onMouseover="note\(this,31\);">比丘<\/a><\/a>/g
	,'<a onMouseover="local(this,1);">餘五比丘</a>'
	]
, 
  [/<a onMouseover="local\(this,1\);">叉摩<a onMouseover="note\(this,31\);">比丘<\/a>經<\/a>/g
	,'<a onMouseover="local(this,1);">叉摩比丘經</a>'
  ]
,
  [/<a onMouseover="note\(this,514\);"><a onMouseover="note\(this,294\);">出要<\/a>志<\/a>/g
  ,'<a onMouseover="note(this,514);">出要志</a>'] 
,
  [/<a onMouseover="note\(this,514\);">正志<a onMouseover="note\(this,294\);">出要<\/a>覺<\/a>/g
  ,'<a onMouseover="note(this,514);">正志出要覺</a>']  
,
  [/<a onMouseover="local\(this,2\);"><a onMouseover="note\(this,4\);">如來<\/a>住<\/a>/g
  ,'<a onMouseover="local(this,2);">如來住</a>']  
, 
  [/<a onMouseover="local\(this,1\);">人間八百歲是<a onMouseover="note\(this,371\);">化樂<\/a>天上一日一夜<\/a>/g
  , '<a onMouseover="local(this,1);">人間八百歲是化樂天上一日一夜</a>']
, 
  [/<a onMouseover="local\(this,1\);">人間千六百歲是<a onMouseover="note\(this,372\);">他化自在天<\/a>一日一夜<\/a>/g
  , '<a onMouseover="local(this,1);">人間千六百歲是他化自在天一日一夜</a>']  
,
  [/<a onMouseover="note\(this,214\);"><a onMouseover="note\(this,214\);">後夜<\/a><\/a>/g
  ,'<a onMouseover="note(this,214);">後夜</a>'  ]
, [/<a onMouseover="local\(this,1\);"><a onMouseover="note\(this,482\);">𤛓<\/a><\/a>/g //local note1 and note482 duplicated in sa1254.htm
	,'<a onMouseover="note(this,482);">𤛓</a>'] 
                                           
,[/<a onMouseover="note\(this,3\);">佛<\/a>住波羅㮈仙人住處鹿野苑<\/a>/g // in sa0384.htm
 ,'<a onMouseover="note(this,3);">佛</a>住波羅㮈仙人住處鹿野苑']	

,[/<a onMouseover="note\(this,3\);">佛<\/a>住波羅㮈國仙人住處鹿野苑<\/a>/g // in sa0384.htm
 ,'<a onMouseover="note(this,3);">佛</a>住波羅㮈國仙人住處鹿野苑']	

,[/<a onMouseover="note\(this,3\);">佛<\/a>在波羅㮈國仙人住處鹿野苑<\/a>/g
,'<a onMouseover="note(this,3);">佛</a>在波羅㮈國仙人住處鹿野苑']

,[/比丘<\/a>，住波羅㮈國仙人住處鹿野苑<\/a>中/g
  ,'比丘</a>，住波羅㮈國仙人住處鹿野苑中']

,[/如是，生、有、取、愛、受、觸、六入處、名色、識、行。緣<\/a>無明故/g,  //sa0297
  ,'如是，生、有、取、愛、受、觸、六入處、名色、識、行。緣無明故']  

,[/諸仁者！世尊於波羅㮈國仙人住處鹿野苑<\/a>中/g, //sa0379
  '諸仁者！世尊於波羅㮈國仙人住處鹿野苑中']  
,[/<a onMouseover="note\(this,80\);">瞿曇<\/a>住波羅㮈仙人住處鹿野苑<\/a>中/g, //sa1096
'<a onMouseover="note(this,80);">瞿曇</a>住波羅㮈仙人住處鹿野苑中']  

,[/三昧堅固，<\/span>/g, //sa1024
'三昧堅固，']

,[/<font color="#00605B">/g,""]
,[/<br>/g,""]
,[/<\/div>/g,""]

,[/\n\n<$/g,""]
,[/<div class="agama">\n</g,""]
,[/<\/b>/g,""]
]

module.exports=workarounds;