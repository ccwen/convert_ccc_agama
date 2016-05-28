var sa=[
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

,[/三昧堅固，<\/span>/g, '三昧堅固，']//sa1024

,[/<font color="#00605B">/g,""]
,[/<div class="agama">\n</g,""]
];

var ma=[
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
];

var da=[
[/<a onMouseover="note\(this,372\);"><a onMouseover="note\(this,372\);">他化自在天<\/a>王<\/a>/g,
'<a onMouseover="note(this,372);">他化自在天</a>王'],
[/<a onMouseover="local\(this,15\);"><a onMouseover="note\(this,524\);">七覺意<\/a><\/a>/g,
'<a onMouseover="local(this,15);">七覺意</a>'],//local note wins , da5
[/<a onMouseover="note\(this,151\);"><a onMouseover="note\(this,116\);">剎利<\/a>水澆頭種<\/a>/g,
'<a onMouseover="note(this,151);">剎利水澆頭種</a>'], //longer wins, da6
[/<font color="#00605B">/g,""]
]

var aa=[
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
]
var sn=[
[/<a onMouseover="note\(this,87\);"><a onMouseover="note\(this,87\);">為了托鉢<\/a><\/a>/g,
'<a onMouseover="note(this,87);">為了托鉢</a>'],
[/<a onMouseover="note\(this,114\);"><a onMouseover="note\(this,525\);">八支聖道<\/a><\/a>/g,
'<a onMouseover="note(this,525);">八支聖道</a>'],
[/<a onMouseover="note\(this,92\);"><a onMouseover="note\(this,92\);">靜坐禪修<\/a>中<\/a>/g,
'<a onMouseover="note(this,92);">靜坐禪修</a>中'],
[/<a onMouseover="local\(this,2\);"><a onMouseover="note\(this,31\);">比丘<\/a>收妥於意之尋中<\/a>/g,
'<a onMouseover="local(this,2);">比丘收妥於意之尋中</a>'],
[/<a nMouseover="note\(this,168\);">一向<\/a>/g, //typo nMouseover, sn1084, sn1085
'<a onMouseover="note(this,168);">一向</a>'],
[/<a onMouseover="note\(this,4\);">如來、<a /g,  //missing </a>
'<a onMouseover="note(this,4);">如來</a>、<a '],  //sn971
[/活力是我荷重的最強耐力，惡作已被平息載到離軛安穩<\/a>，/g,  //sn0197.htm extra </a>
'活力是我荷重的最強耐力，惡作已被平息載到離軛安穩，'],
[/<a onMouseover="note\(this,39\);">某位<a onMouseover="note\(this,31\);">比丘<\/a><\/a>/g, //overlap
'<a onMouseover="note(this,39);">某位比丘</a>'],
[/<a onMouseover="local\(this,8\);">和群眾與<a onMouseover="note\(this,375\);">僧團<\/a>生活<\/a>/g, //overlap 
'<a onMouseover="local(this,8);">和群眾與僧團生活</a>'],
[/<a onMouseover="note\(this,17\);"><a onMouseover="note\(this,80\);">喬達摩<\/a><\/a>/g,
'<a onMouseover="note(this,17);"><a onMouseover="note(this,80);">喬達摩</a></a>'],
[/<a onMouseover="note\(this,17\);"><a onMouseover="note\(this,80\);">喬達摩<\/a><\/a>/g, //note 17 is 婆羅門
'<a onMouseover="note(this,80);">喬達摩</a>'],
[/<a onMouseover="note\(this,878\);"><a onMouseover="note\(this,80\);">喬達摩<\/a><\/a>/g,, //sn0403 , note 878 not exists
'<a onMouseover="note(this,80);">喬達摩</a>'],
[/<a onMouseover="local\(this,3\);">凡已到達與看見了<a onMouseover="note\(this,159\);">決定<\/a>者<\/a>/g, //sn0220
'<a onMouseover="local(this,3);">凡已到達與看見了決定者</a>'],
[/<a onMouseover="not\(this,483\);">遍清淨的梵行<\/a>/g, //sn0967, sn1163 
'<a onMouseover="note(this,483);">遍清淨的梵行</a>'],
[/這裡，a onMouseover="note\(this,31\);">比丘<\/a>/g,// sn0299 , missing <
'這裡，<a onMouseover="note(this,31);">比丘</a>'],
[/<a onMouseover="local\(this,1\);">\[那\]群五<a onMouseover="note\(this,31\);">比丘<\/a>們<\/a>/g, //sn0577 overlap, local wins
'<a onMouseover="local(this,1);">[那]群五比丘們</a>'],
[/伴隨欲的、貪染的所觸<\/a>。比丘們！這是比丘的另/g, //sn1403,sn1404 extra </a>
'伴隨欲的、貪染的所觸。比丘們！這是比丘的另'],
[/伴隨欲的、貪染的所觸<\/a>，比丘們！/g,//sn1083 extra </a>
'伴隨欲的、貪染的所觸，比丘們！'],
[/<a onMouseover="local\(this,8\);">依止於離欲<\/a>而行動<\/a>/g, //sn0928, extra </a>
'<a onMouseover="local(this,8);">依止於離欲而行動</a>'],
[/<a \nonMouseover="note\(this,30\);">你們要聽<\/a>/g, //sn1221.htm has line break in between
'<a onMouseover="note(this,30);">你們要聽</a>'],
[/聖正定<\/a的/g, //sn1223 , missing > 
'聖正定</a>的'],
[/伴隨欲的、貪染的所觸<\/a>，鬱低雅！/g, //sn1225
'伴隨欲的、貪染的所觸，鬱低雅！'],
[/<a onMouseover="local\(this,5\);">為了<a onMouseover="note\(this,433\);">智與見<\/a><\/a>/g, //sn1237 overlap , local wins
'<a onMouseover="local(this,5);">為了智與見</a>'],
[/比丘們！凡任何覺分法<\/a>，慧根/g, //sn1521 , extra </a>
'比丘們！凡任何覺分法，慧根']
]
var mn=[
[/<a onMouseover="note\(this,87\);"><a onMouseover="note\(this,87\);">為了托鉢<\/a><\/a>/g,
 '<a onMouseover="note(this,87);">為了托鉢</a>'],
['<a onMouseover="not(this,483);">遍清淨的梵行</a>', //mn091
 '<a onMouseover="note(this,483);">遍清淨的梵行</a>'],
['比丘在當生中</a>會到達完','比丘在當生中會到達完'],//mn012
['<a onMouseover="note(this,103);">屋主</a>眾</a>','<a onMouseover="note(this,103);">屋主</a>眾'],//mn012
['<a onMouseover="note(this,295);">樂味？什麼是','<a onMouseover="note(this,295);">樂味</a>？什麼是'],//mn013 ,missing </a>
['可愛樣子的、伴隨欲的、貪染的所觸</a>','可愛樣子的、伴隨欲的、貪染的所觸'], //mn023 , extra </a>
['<a onMouseover="note(this,48);">從在家出家<a onMouseover="note(this,48);">成為非家生活</a></a>'
 ,'<a onMouseover="note(this,48);">從在家出家成為非家生活</a>'],//mn031
[/煩惱<\/a>已盡<\/a>、修行已成/g,'煩惱</a>已盡、修行已成'],//mn34,mn35
['<a onMouseover="note(this,12;">世尊</a>','<a onMouseover="note(this,12);">世尊</a>'], //mn041 missing )
['<a onMouseover="note(this,200);"<a onMouseover="note(this,200);">尊者</a></a>',
 '"<a onMouseover="note(this,200);">尊者</a>'],
['<a onMouseover="note(this,18);">出生已盡，<a onMouseover="note(this,19);">梵行已完成</a>', //mn057
 '<a onMouseover="note(this,18);">出生已盡</a>，<a onMouseover="note(this,19);">梵行已完成</a>'],
['<a onMouseover="local(this,1);">毘舍佉<a onMouseover="note(this,98);">優婆塞</a></a>', //mn044
 '<a onMouseover="local(this,1);">毘舍佉優婆塞</a>'], 
['<a onMouseover="note(this381);">梵行</a>','<a onMouseover="note(this,381);">梵行</a>'], //mn070
['<a onMouseover="note(this,313);"><a onMouseover="note(this,223);">寧靜</a>覺支</a>', //mn077
 '<a onMouseover="note(this,313);">寧靜覺支</a>'] ,
['<a onMouseover="note(this,317);">樂住[並且說]：『<a onMouseover="note(this,45);">大德</a>', //mn085
 '<a onMouseover="note(this,317);">樂住</a>[並且說]：『<a onMouseover="note(this,45);">大德</a>'],
['<a onMouseover="local(this,2);">緣於<a onMouseover="note(this,31);">比丘</a><a onMouseover="note(this,375);">僧團</a>的單一性</a>', //mn121
 '<a onMouseover="local(this,2);">緣於比丘僧團的單一性</a>'],
['<a onMouseover="note(this,138);"同梵行</a>','<a onMouseover="note(this,138);">同梵行</a>'], //mn138, missing >
['<a onMouseover="local(this,2);"><a onMouseover="note(this,479);">全心注意後</a></a>',
 '<a onMouseover="note(this,479);">全心注意後</a>'],//mn 134, duplicate local note 2

]
var dn=[
];
var an=[
];
module.exports={da,ma,sa,aa,sn,mn,dn,an};