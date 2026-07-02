// ============================================================
// 全国大学数据库 — 520+ 所本专科院校
// ============================================================

const SCHOOLS_DATA = [

  // ========================
  // 一、985 大学（39 所）
  // ========================
  {id:1,name:'北京大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','综合类'],desc:'中国近代第一所国立综合性大学，文科、理科、医学实力顶尖，未名湖畔的学术圣地。'},
  {id:2,name:'清华大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','工科强校'],desc:'中国最顶尖的理工科大学，以工科见长，清华园被誉为"工程师的摇篮"。校园面积近400公顷。'},
  {id:3,name:'复旦大学',city:'上海',province:'上海',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','综合类'],desc:'中国南方最强的综合性研究型大学，临床医学、新闻学、哲学享誉海内外。地处上海，就业资源丰富。'},
  {id:4,name:'上海交通大学',city:'上海',province:'上海',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','工科强校'],desc:'中国历史最悠久的高等学府之一，船舶海洋、生物医学、电子信息领域顶尖。'},
  {id:5,name:'浙江大学',city:'杭州',province:'浙江',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','综合类'],desc:'中国学科门类最齐全的综合性大学，计算机、农林、光学工程全国顶尖。创业氛围浓厚。'},
  {id:6,name:'南京大学',city:'南京',province:'江苏',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','综合类'],desc:'中国历史最悠久的百年名校之一，天文学、地质学、图书情报学全国第一。'},
  {id:7,name:'中国科学技术大学',city:'合肥',province:'安徽',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','理工类'],desc:'中国科学院直属，以理科和前沿科学著称，量子信息、物理、化学世界知名。'},
  {id:8,name:'哈尔滨工业大学',city:'哈尔滨',province:'黑龙江',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','工科强校'],desc:'中国工科的殿堂级高校，航天、机器人、焊接技术世界一流。有哈工深、威海校区。'},
  {id:9,name:'西安交通大学',city:'西安',province:'陕西',type:'985',typeLabel:'985',tags:['985','211','双一流','C9','工科强校'],desc:'老交大主要继承者，工商管理、动力工程、电气工程全国顶尖。'},
  {id:10,name:'武汉大学',city:'武汉',province:'湖北',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'中国最美大学之一，樱花闻名全国。测绘、遥感、法学、马克思主义理论全国顶尖。'},
  {id:11,name:'华中科技大学',city:'武汉',province:'湖北',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'同济医科大学并入后医学实力大增，机械工程、光电信息、公共卫生全国领先。'},
  {id:12,name:'中山大学',city:'广州',province:'广东',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'孙中山先生创办的百年名校，临床医学、工商管理、生态学华南第一。广州、珠海、深圳三地办学。'},
  {id:13,name:'华南理工大学',city:'广州',province:'广东',type:'985',typeLabel:'985',tags:['985','211','双一流','建筑老八校'],desc:'中国南方工科重镇，轻工技术与工程、食品科学、建筑学全国顶尖。'},
  {id:14,name:'四川大学',city:'成都',province:'四川',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'西南地区综合实力最强的大学，口腔医学全国第一，华西医学享誉全国。'},
  {id:15,name:'电子科技大学',city:'成都',province:'四川',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'中国电子信息技术领域的排头兵，电子科学与技术、通信工程全国顶尖。毕业生薪酬居全国前列。'},
  {id:16,name:'重庆大学',city:'重庆',province:'重庆',type:'985',typeLabel:'985',tags:['985','211','双一流','建筑老八校'],desc:'建筑老八校之一，电气工程、机械工程、矿业工程是传统优势。山城校园独具特色。'},
  {id:17,name:'东南大学',city:'南京',province:'江苏',type:'985',typeLabel:'985',tags:['985','211','双一流','建筑老八校'],desc:'建筑老八校之一，建筑学、电子科学与技术、土木工程实力雄厚。'},
  {id:18,name:'同济大学',city:'上海',province:'上海',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'以土木建筑闻名世界，城市规划、环境科学、设计学同样出类拔萃。'},
  {id:19,name:'北京航空航天大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'中国航空航天领域的顶尖高校，航空宇航科学与技术全国第一。'},
  {id:20,name:'北京师范大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','师范类'],desc:'中国师范教育的最高学府，教育学、心理学、汉语言文学全国第一。'},
  {id:21,name:'中国人民大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','人文社科'],desc:'中国人文社会科学领域的最高学府，经济学、法学、新闻学等学科全国领先。'},
  {id:22,name:'南开大学',city:'天津',province:'天津',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'周恩来总理母校，数学、化学、历史、经济学等基础学科底蕴深厚。'},
  {id:23,name:'天津大学',city:'天津',province:'天津',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校','建筑老八校'],desc:'中国第一所现代大学，化工、精密仪器、建筑学全国顶尖。'},
  {id:24,name:'厦门大学',city:'厦门',province:'福建',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'中国最美大学之一，海洋科学、会计学、经济学、统计学全国领先。思明校区面朝大海。'},
  {id:25,name:'山东大学',city:'济南',province:'山东',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'中国近代高等教育起源性大学，数学、考古学、临床医学实力突出。济南、威海、青岛办学。'},
  {id:26,name:'吉林大学',city:'长春',province:'吉林',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'中国办学规模最大的大学之一，车辆工程、法学、化学等学科优势明显。校园遍布长春。'},
  {id:27,name:'大连理工大学',city:'大连',province:'辽宁',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'东北地区最好的理工科大学之一，化学工程、机械工程、力学实力突出。'},
  {id:28,name:'东北大学',city:'沈阳',province:'辽宁',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'冶金工程、控制科学与工程全国闻名，中国第一个大学科技园所在地。'},
  {id:29,name:'兰州大学',city:'兰州',province:'甘肃',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'西部地区的学术重镇，化学、草学、生态学等基础研究领域实力雄厚。'},
  {id:30,name:'西北工业大学',city:'西安',province:'陕西',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'中国唯一以"三航"为特色的高校，航空、航天、航海工程全国一流。歼-20总师母校。'},
  {id:31,name:'中南大学',city:'长沙',province:'湖南',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'由湘雅医学院等合并组建，矿业工程、冶金工程、护理学全国第一。'},
  {id:32,name:'湖南大学',city:'长沙',province:'湖南',type:'985',typeLabel:'985',tags:['985','211','双一流','综合类'],desc:'千年学府岳麓书院所在地，土木工程、机械工程、设计学是传统优势学科。'},
  {id:33,name:'国防科技大学',city:'长沙',province:'湖南',type:'985',typeLabel:'985',tags:['985','211','双一流','军事类'],desc:'中央军委直属的综合性军事高等学府，高性能计算、航天技术领域顶尖。"军中清华"。'},
  {id:34,name:'中国农业大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','农林类'],desc:'中国现代农业高等教育的发源地，农学、生命科学、食品科学领域全国领先。'},
  {id:35,name:'北京理工大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','工科强校'],desc:'中国共产党创办的第一所理工科大学，兵器科学与技术、车辆工程实力雄厚。'},
  {id:36,name:'华东师范大学',city:'上海',province:'上海',type:'985',typeLabel:'985',tags:['985','211','双一流','师范类'],desc:'中国师范类顶尖学府，教育学、地理学、生态学、统计学全国领先。'},
  {id:37,name:'中国海洋大学',city:'青岛',province:'山东',type:'985',typeLabel:'985',tags:['985','211','双一流','理工类'],desc:'中国海洋科学和水产学科的最高学府，海洋科学全国第一。崂山校区依山傍海。'},
  {id:38,name:'西北农林科技大学',city:'杨凌',province:'陕西',type:'985',typeLabel:'985',tags:['985','211','双一流','农林类'],desc:'中国西北地区农林高等教育的最高学府，农业工程、葡萄酒学特色鲜明。位于中国农科城。'},
  {id:39,name:'中央民族大学',city:'北京',province:'北京',type:'985',typeLabel:'985',tags:['985','211','双一流','民族类'],desc:'中国民族高等教育的最高学府，民族学、少数民族语言文学特色鲜明。海淀区校园民族风情浓郁。'},

  // ========================
  // 二、其他 211 大学（77 所）
  // ========================
  {id:40,name:'北京交通大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国近代铁路管理的发祥地，交通运输工程、系统科学全国领先。'},
  {id:41,name:'北京科技大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国钢铁工业的摇篮，材料科学与工程、冶金工程全国顶尖。'},
  {id:42,name:'北京邮电大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国信息通信领域的最高学府，通信工程、计算机科学全国顶尖。被誉为"信息黄埔"。'},
  {id:43,name:'北京外国语大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','语言类'],desc:'中国外语教育的最高学府，开设101种语言课程。被誉为"共和国外交官的摇篮"。'},
  {id:44,name:'中国政法大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','政法类'],desc:'中国法学教育最高学府，法学全国第一，被誉为"中国法律人才的摇篮"。'},
  {id:45,name:'中国传媒大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','艺术类'],desc:'中国广播电视和传媒人才的摇篮，新闻传播学、戏剧与影视学全国第一。'},
  {id:46,name:'中央财经大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','财经类'],desc:'中国财经类顶尖高校，应用经济学、金融学、会计学全国领先。'},
  {id:47,name:'对外经济贸易大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','财经类'],desc:'中国对外经贸人才的摇篮，国际经济与贸易、法学（国际法）全国知名。国际化程度极高。'},
  {id:48,name:'北京工业大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'北京市属唯一211工程大学，土木工程、材料科学、环境工程优势明显。'},
  {id:49,name:'北京化工大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国化工领域重点大学，化学工程、高分子材料、生物工程特色鲜明。'},
  {id:50,name:'北京林业大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','农林类'],desc:'中国林业和生态环境教育的最高学府，风景园林学、林学全国第一。'},
  {id:51,name:'北京中医药大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','医药类'],desc:'中国中医药教育研究的最高学府，中医学、中药学全国领先。'},
  {id:52,name:'北京体育大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','体育类'],desc:'中国体育最高学府，体育学全国第一，培养了大量奥运冠军。'},
  {id:53,name:'华北电力大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国电力行业最高学府，电气工程、能源动力全国顶尖。北京、保定两地办学。'},
  {id:54,name:'中国地质大学（北京）',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','理工类'],desc:'中国地球科学领域最高学府，地质学全国领先。北京、武汉两地办学。'},
  {id:55,name:'中国石油大学（北京）',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国石油化工领域最高学府，石油与天然气工程全国第一。'},
  {id:56,name:'中国矿业大学（北京）',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国矿业领域最高学府之一，矿业工程、安全科学全国领先。'},
  {id:57,name:'北京协和医学院',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','医药类'],desc:'中国医学界的殿堂级学府，临床医学全国第一，被誉为"中国医学殿堂"。'},
  {id:58,name:'上海财经大学',city:'上海',province:'上海',type:'211',typeLabel:'211',tags:['211','双一流','财经类'],desc:'中国财经类顶尖高校，应用经济学、统计学、工商管理全国领先。毕业生薪酬全国前列。'},
  {id:59,name:'上海外国语大学',city:'上海',province:'上海',type:'211',typeLabel:'211',tags:['211','双一流','语言类'],desc:'中国外语和国际化人才培养的重镇，外国语言文学全国顶尖。'},
  {id:60,name:'上海大学',city:'上海',province:'上海',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'上海市属综合类211大学，钢铁冶金、社会学、美术学是特色学科。'},
  {id:61,name:'华东理工大学',city:'上海',province:'上海',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国化工领域顶尖高校，化学工程、生物工程、制药工程全国一流。'},
  {id:62,name:'东华大学',city:'上海',province:'上海',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国纺织科学与工程最高学府，材料科学、服装设计全国知名。'},
  {id:63,name:'海军军医大学',city:'上海',province:'上海',type:'211',typeLabel:'211',tags:['211','双一流','军事类','医药类'],desc:'原第二军医大学，海军直属医学高等学府，肝胆外科、烧伤科全国顶尖。'},
  {id:64,name:'南京航空航天大学',city:'南京',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国航空航天领域重要高校，直升机、无人机技术全国领先。'},
  {id:65,name:'南京理工大学',city:'南京',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国兵器科学和光电技术的重镇，兵器科学与技术全国顶尖。"哈军工"传承。'},
  {id:66,name:'苏州大学',city:'苏州',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'中国发展最快的综合性大学之一，放射医学、纺织工程、法学特色鲜明。'},
  {id:67,name:'河海大学',city:'南京',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国水利领域的最高学府，水利工程全国第一，水文水资源享誉世界。'},
  {id:68,name:'江南大学',city:'无锡',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'中国轻工和食品科学领域的顶尖高校，食品科学与工程全国第一。'},
  {id:69,name:'南京农业大学',city:'南京',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','农林类'],desc:'中国近现代农业高等教育发源地之一，作物学、农业资源全国顶尖。'},
  {id:70,name:'南京师范大学',city:'南京',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','师范类'],desc:'中国高等师范教育的发祥地之一，教育学、地理学、学前教育全国知名。'},
  {id:71,name:'中国药科大学',city:'南京',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','医药类'],desc:'中国药学领域最高学府，药学、中药学全国第一，被称为"药界清华"。'},
  {id:72,name:'中国矿业大学',city:'徐州',province:'江苏',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国矿业领域最高学府，矿业工程、安全科学与工程全国第一。'},
  {id:73,name:'西安电子科技大学',city:'西安',province:'陕西',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国电子信息领域的顶尖高校，通信工程、密码学、雷达技术全国一流。"西军电"传承。'},
  {id:74,name:'长安大学',city:'西安',province:'陕西',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国公路交通领域最高学府，交通运输工程、地质工程全国知名。'},
  {id:75,name:'陕西师范大学',city:'西安',province:'陕西',type:'211',typeLabel:'211',tags:['211','双一流','师范类'],desc:'西北地区教师教育摇篮，历史地理学、中国古代文学、心理学全国知名。'},
  {id:76,name:'西北大学',city:'西安',province:'陕西',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'中国西北地区历史最悠久的高等学府之一，考古学、地质学全国顶尖。'},
  {id:77,name:'空军军医大学',city:'西安',province:'陕西',type:'211',typeLabel:'211',tags:['211','双一流','军事类','医药类'],desc:'原第四军医大学，空军直属医学高等学府，口腔医学全国第一。'},
  {id:78,name:'西南交通大学',city:'成都',province:'四川',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国铁路和轨道交通领域最高学府，交通运输工程全国第一。'},
  {id:79,name:'西南财经大学',city:'成都',province:'四川',type:'211',typeLabel:'211',tags:['211','双一流','财经类'],desc:'中国财经类顶尖高校，金融学、会计学全国领先，被誉为"金融人才摇篮"。'},
  {id:80,name:'四川农业大学',city:'雅安',province:'四川',type:'211',typeLabel:'211',tags:['211','双一流','农林类'],desc:'四川省属农林类211大学，动物营养与饲料科学、作物学全国知名。成都、雅安两地办学。'},
  {id:81,name:'西南大学',city:'重庆',province:'重庆',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'由西南师范大学和西南农业大学合并组建，教育学、蚕学全国领先。'},
  {id:82,name:'郑州大学',city:'郑州',province:'河南',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'河南省唯一211大学，临床医学、水利工程、化学是优势学科。在校生人数全国最多。'},
  {id:83,name:'云南大学',city:'昆明',province:'云南',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'云南省唯一211大学，民族学、生态学、生物学全国顶尖。呈贡校区风景如画。'},
  {id:84,name:'贵州大学',city:'贵阳',province:'贵州',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'贵州省唯一211大学，植物保护、农药学、地质工程是特色学科。'},
  {id:85,name:'广西大学',city:'南宁',province:'广西',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'广西壮族自治区唯一211大学，土木工程、农业科学、轻工技术特色鲜明。'},
  {id:86,name:'新疆大学',city:'乌鲁木齐',province:'新疆',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'新疆维吾尔自治区重点211大学，马克思主义理论、少数民族语言文学全国知名。'},
  {id:87,name:'宁夏大学',city:'银川',province:'宁夏',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'宁夏回族自治区唯一211大学，草学、西夏学、煤化工特色鲜明。'},
  {id:88,name:'青海大学',city:'西宁',province:'青海',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'青海省唯一211大学，高原医学、生态学、藏医学是特色学科。'},
  {id:89,name:'石河子大学',city:'石河子',province:'新疆',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'新疆生产建设兵团直属211大学，农业机械化、作物学、基础医学为优势学科。'},
  {id:90,name:'西藏大学',city:'拉萨',province:'西藏',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'西藏自治区唯一211大学，藏语言文学、高原生态学、藏医学特色鲜明。'},
  {id:91,name:'海南大学',city:'海口',province:'海南',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'海南省唯一211大学，热带农业、海洋科学、法学是特色学科。'},
  {id:92,name:'内蒙古大学',city:'呼和浩特',province:'内蒙古',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'内蒙古自治区唯一211大学，蒙古学、草原生态学、生物技术特色鲜明。'},
  {id:93,name:'辽宁大学',city:'沈阳',province:'辽宁',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'辽宁省综合类211大学，应用经济学、法学、哲学是传统优势学科。'},
  {id:94,name:'大连海事大学',city:'大连',province:'辽宁',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国航海教育的摇篮，交通运输工程（航海方向）全国第一。半军事化管理。'},
  {id:95,name:'东北师范大学',city:'长春',province:'吉林',type:'211',typeLabel:'211',tags:['211','双一流','师范类'],desc:'东北地区师范教育最高学府，马克思主义理论、教育学、世界史全国顶尖。'},
  {id:96,name:'延边大学',city:'延吉',province:'吉林',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'吉林省属211综合大学，朝鲜语言文学、民族学、长白山生态特色鲜明。'},
  {id:97,name:'哈尔滨工程大学',city:'哈尔滨',province:'黑龙江',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国船舶工业和海洋工程领域的顶尖高校，船舶与海洋工程全国领先。"哈军工"传承。'},
  {id:98,name:'东北林业大学',city:'哈尔滨',province:'黑龙江',type:'211',typeLabel:'211',tags:['211','双一流','农林类'],desc:'中国林业科学研究的重镇，林学、林业工程、野生动物保护全国知名。'},
  {id:99,name:'东北农业大学',city:'哈尔滨',province:'黑龙江',type:'211',typeLabel:'211',tags:['211','双一流','农林类'],desc:'中国东北地区农业高等教育中心，农业机械化、食品科学优势明显。'},
  {id:100,name:'河北工业大学',city:'天津',province:'河北',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'河北省属211大学，校址位于天津市。电气工程、材料科学是强项。'},
  {id:101,name:'太原理工大学',city:'太原',province:'山西',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'山西省唯一211工程大学，化学工程、矿业工程、机械工程是传统优势。'},
  {id:102,name:'南昌大学',city:'南昌',province:'江西',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'江西省唯一211大学，食品科学、材料科学、临床医学是优势学科。'},
  {id:103,name:'安徽大学',city:'合肥',province:'安徽',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'安徽省属综合类211大学，汉语言文字学、计算机应用技术是特色学科。'},
  {id:104,name:'合肥工业大学',city:'合肥',province:'安徽',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国机械工业和汽车领域的重点高校，管理科学、车辆工程全国知名。'},
  {id:105,name:'福州大学',city:'福州',province:'福建',type:'211',typeLabel:'211',tags:['211','双一流','理工类'],desc:'福建省属理工类211大学，化学、化工、电气工程、土木工程是强项。'},
  {id:106,name:'暨南大学',city:'广州',province:'广东',type:'211',typeLabel:'211',tags:['211','双一流','综合类'],desc:'中国第一所华侨高等学府，新闻传播学、药学、应用经济学全国知名。留学生比例极高。'},
  {id:107,name:'华南师范大学',city:'广州',province:'广东',type:'211',typeLabel:'211',tags:['211','双一流','师范类'],desc:'华南地区师范教育最高学府，心理学、物理学、教育学全国领先。'},
  {id:108,name:'中国地质大学（武汉）',city:'武汉',province:'湖北',type:'211',typeLabel:'211',tags:['211','双一流','理工类'],desc:'中国地球科学领域最高学府，地质学、地质资源与地质工程全国第一。'},
  {id:109,name:'华中农业大学',city:'武汉',province:'湖北',type:'211',typeLabel:'211',tags:['211','双一流','农林类'],desc:'中国近现代农业高等教育发源地，园艺学、畜牧学、兽医学全国顶尖。'},
  {id:110,name:'华中师范大学',city:'武汉',province:'湖北',type:'211',typeLabel:'211',tags:['211','双一流','师范类'],desc:'中国中部地区师范教育最高学府，政治学、教育学、历史学全国知名。'},
  {id:111,name:'中南财经政法大学',city:'武汉',province:'湖北',type:'211',typeLabel:'211',tags:['211','双一流','财经政法'],desc:'财经政法深度融通的211大学，法学、会计学、财政学全国领先。'},
  {id:112,name:'武汉理工大学',city:'武汉',province:'湖北',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'由原武汉工业大学等三校合并，材料科学、交通运输全国知名。'},
  {id:113,name:'湖南师范大学',city:'长沙',province:'湖南',type:'211',typeLabel:'211',tags:['211','双一流','师范类'],desc:'湖南省属师范类211大学，外国语言文学、伦理学、生物学是特色学科。'},
  {id:114,name:'中国石油大学（华东）',city:'青岛',province:'山东',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国石油化工领域最高学府之一，石油与天然气工程全国第一。'},
  {id:115,name:'天津医科大学',city:'天津',province:'天津',type:'211',typeLabel:'211',tags:['211','双一流','医药类'],desc:'天津市属211医学高校，临床医学（肿瘤学方向）全国知名。'},
  {id:116,name:'华北电力大学（保定）',city:'保定',province:'河北',type:'211',typeLabel:'211',tags:['211','双一流','工科强校'],desc:'中国电力行业最高学府保定校区，电气工程全国领先。'},

  // ========================
  // 三、湖北省其他本科院校（非211）
  // ========================
  {id:200,name:'湖北大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'湖北省属重点综合性大学，师范和文理学科底蕴深厚。武昌校区在沙湖之滨，环境优美。'},
  {id:201,name:'武汉科技大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','省部共建'],desc:'省属重点多科性大学，冶金工程、材料科学、机械工程等学科实力突出。'},
  {id:202,name:'三峡大学',city:'宜昌',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','综合类','水利特色'],desc:'水利部和湖北省共建高校，水利电力特色鲜明，电气工程、水利工程为优势学科。'},
  {id:203,name:'长江大学',city:'荆州',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','综合类','石油特色'],desc:'省属规模最大的综合性大学，石油与天然气工程、地质资源为特色。荆州、武汉办学。'},
  {id:204,name:'江汉大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'武汉市属综合性大学，化学工程与技术、基础医学为优势学科。'},
  {id:205,name:'湖北工业大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以工科为主的省属重点大学，机械、电气、轻工等学科特色鲜明。'},
  {id:206,name:'武汉工程大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','化工特色'],desc:'以化工为特色的省属重点大学，化学工程与技术学科优势明显。'},
  {id:207,name:'武汉纺织大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','纺织特色'],desc:'以纺织服装为特色的省属大学，纺织科学与工程学科国内前列。'},
  {id:208,name:'武汉轻工大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','食品特色'],desc:'以食品科学与工程为特色的省属大学，是国内最早培养粮食行业专门人才的学校之一。'},
  {id:209,name:'湖北中医药大学',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'湖北省唯一的中医药高等学府，中医学、中药学学科实力较强。'},
  {id:210,name:'湖北经济学院',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'以经济学、管理学为主的省属财经类本科院校，会计、金融等专业较有特色。'},
  {id:211,name:'湖北师范大学',city:'黄石',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'省属重点师范类院校，教育学、化学、中国语言文学等学科较有优势。'},
  {id:212,name:'湖北民族大学',city:'恩施',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','民族类'],desc:'湖北省属重点高校，以民族学和医学为特色，地处恩施土家族苗族自治州。'},
  {id:213,name:'湖北汽车工业学院',city:'十堰',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','汽车特色'],desc:'紧邻东风汽车公司，以汽车产业为背景的应用型工科院校，车辆工程为特色。'},
  {id:214,name:'湖北医药学院',city:'十堰',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'省属医学本科院校，麻醉学、临床医学等专业有一定影响力。附属太和医院是鄂西北最大医院。'},
  {id:215,name:'湖北科技学院',city:'咸宁',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'位于咸宁的省属综合性本科院校，核科学与技术、临床医学等专业较有特色。'},
  {id:216,name:'湖北理工学院',city:'黄石',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','工科强校'],desc:'以工科为主的应用型本科院校，环境工程、机械设计制造等为特色。'},
  {id:217,name:'湖北文理学院',city:'襄阳',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','综合类'],desc:'位于襄阳的省属综合性本科院校，以工科和师范为传统优势。'},
  {id:218,name:'湖北工程学院',city:'孝感',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','综合类'],desc:'位于孝感的省属应用型本科院校，农业资源与环境、材料科学等为特色学科。'},
  {id:219,name:'黄冈师范学院',city:'黄冈',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','师范类'],desc:'省属师范类本科院校，以教师教育为根基，黄冈基础教育文化底蕴深厚。'},
  {id:220,name:'湖北第二师范学院',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','师范类'],desc:'省属师范类本科院校，以教师教育为传统优势。位于武汉光谷区域。'},
  {id:221,name:'荆楚理工学院',city:'荆门',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','综合类'],desc:'位于荆门的省属综合性本科院校，以工学和医学为主要发展方向。'},
  {id:222,name:'武汉商学院',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','商科类'],desc:'以商科为特色的应用型本科院校，酒店管理、烹饪与营养教育等专业突出。'},
  {id:223,name:'汉江师范学院',city:'十堰',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','师范类'],desc:'位于十堰的省属师范类本科院校，2016年升格为本科。南水北调中线水源地。'},
  {id:224,name:'武汉音乐学院',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','艺术类'],desc:'中国中部地区唯一独立设置的高等音乐学府，音乐与舞蹈学为特色。'},
  {id:225,name:'湖北美术学院',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','艺术类'],desc:'华中地区唯一的高等美术学府，中国八大美院之一。'},
  {id:226,name:'武汉体育学院',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属重点','体育类'],desc:'国家体育总局与湖北省共建的体育类高校，体育学学科全国排名前列。'},
  {id:227,name:'湖北警官学院',city:'武汉',province:'湖北',type:'province',typeLabel:'省属',tags:['省属','政法类'],desc:'湖北省唯一的省属公安本科院校，公安学、刑事科学技术等为特色专业。'},
  {id:228,name:'中南民族大学',city:'武汉',province:'湖北',type:'province',typeLabel:'部委',tags:['国家民委直属','省重点','民族类'],desc:'国家民委直属综合性大学，民族学、化学、药学等学科特色鲜明。南湖畔校园风光优美。'},
  {id:229,name:'武昌首义学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'前身为华中科技大学武昌分校，民办本科中排名靠前，以工科为优势。'},
  {id:230,name:'文华学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'前身为华中科技大学文华学院，民办本科中办学质量较高，以工科为优势。'},
  {id:231,name:'武汉东湖学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'湖北省首批转设的民办本科高校之一，以工学和经管为特色。'},
  {id:232,name:'汉口学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'以应用型人才培养为特色的民办本科院校，设有经管、文法等多个学科。'},
  {id:233,name:'武汉工商学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','商科类'],desc:'以商科为特色的民办应用型本科院校，电子商务、物流管理等专业有特色。'},
  {id:234,name:'武昌理工学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'以工学和管理学为主的民办本科院校，位于武汉光谷区域。'},
  {id:235,name:'湖北商贸学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','商科类'],desc:'以经管类和艺术设计为特色的民办本科院校。'},
  {id:236,name:'武汉华夏理工学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'前身为武汉理工大学华夏学院，以工科为优势的民办应用型本科。'},
  {id:237,name:'武汉晴川学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'前身为武汉大学珞珈学院，以信息技术和经济管理为特色。'},
  {id:238,name:'武汉生物工程学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科','生物特色'],desc:'以生物工程为特色的民办本科院校，生物医药、环境工程等专业突出。'},
  {id:239,name:'武汉文理学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'民办应用型本科院校，涵盖文、理、工、管、医等多学科门类。'},
  {id:240,name:'武汉城市学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'前身为武汉科技大学城市学院，以工学和医学为特色的民办本科。'},
  {id:241,name:'武汉学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','商科类'],desc:'由腾讯主要创始人陈一丹捐资创办，以经管、法学、信息技术为特色。'},
  {id:242,name:'湖北恩施学院',city:'恩施',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'位于恩施的民办应用型本科院校，以医学、教育、民族文化为办学特色。'},
  {id:243,name:'荆州学院',city:'荆州',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'前身为长江大学工程技术学院，以工科为特色的民办应用型本科院校。'},
  {id:244,name:'三峡大学科技学院',city:'宜昌',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'三峡大学举办的独立学院，以电力、水利等相关应用型专业为特色。'},
  {id:245,name:'湖北三峡航空学院',city:'宜昌',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','航空特色'],desc:'湖北省首所航空类民办本科高校，2025年获批招生，飞行器制造、低空经济为特色。'},

  // ========================
  // 四、各省属重点大学
  // ========================

  // --- 北京 ---
  {id:300,name:'首都师范大学',city:'北京',province:'北京',type:'province',typeLabel:'省属',tags:['省属重点','双一流','师范类'],desc:'北京市属重点师范大学，数学双一流建设学科。'},
  {id:301,name:'首都医科大学',city:'北京',province:'北京',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'北京市属重点医科大学，临床医学排名全国前列。宣武医院等附属医院实力雄厚。'},
  {id:302,name:'首都经济贸易大学',city:'北京',province:'北京',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'北京市属财经类重点大学，应用经济学、工商管理为优势。'},
  {id:303,name:'北京工商大学',city:'北京',province:'北京',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'北京市属重点大学，食品科学与工程、应用经济学特色鲜明。'},
  {id:304,name:'北京联合大学',city:'北京',province:'北京',type:'province',typeLabel:'省属',tags:['省属','综合类'],desc:'北京市属规模最大的综合性大学，多学科协调发展。'},

  // --- 天津 ---
  {id:305,name:'天津工业大学',city:'天津',province:'天津',type:'province',typeLabel:'省属',tags:['省属重点','双一流','工科强校'],desc:'纺织科学与工程双一流，材料科学、机械工程实力强劲。'},
  {id:306,name:'天津师范大学',city:'天津',province:'天津',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'天津市属重点师范大学，教育学、心理学、政治学突出。'},
  {id:307,name:'天津财经大学',city:'天津',province:'天津',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'天津市属财经类重点大学，统计学、会计学传统优势明显。'},
  {id:308,name:'天津科技大学',city:'天津',province:'天津',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以轻工和食品为特色，发酵工程全国知名。'},
  {id:309,name:'中国民航大学',city:'天津',province:'天津',type:'province',typeLabel:'部委',tags:['部委直属','航空特色'],desc:'交通运输部（民航局）直属，航空运输、飞行技术全国领先。'},

  // --- 河北 ---
  {id:310,name:'燕山大学',city:'秦皇岛',province:'河北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','机械强校'],desc:'河北省属顶尖工科大学，机械工程全国知名。源自哈工大重型机械学院。'},
  {id:311,name:'河北大学',city:'保定',province:'河北',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'河北省属重点综合性大学，新闻学、历史学、化学为优势。'},
  {id:312,name:'河北师范大学',city:'石家庄',province:'河北',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'河北省属重点师范大学，生物科学、教育学突出。'},
  {id:313,name:'河北医科大学',city:'石家庄',province:'河北',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'河北省属重点医科大学，临床医学、中西医结合实力较强。'},
  {id:314,name:'河北农业大学',city:'保定',province:'河北',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'河北省属农业重点大学，农学、园艺学特色鲜明。'},
  {id:315,name:'石家庄铁道大学',city:'石家庄',province:'河北',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','交通特色'],desc:'以铁道交通为特色的省属重点大学，土木工程、交通运输突出。'},

  // --- 山西 ---
  {id:316,name:'山西大学',city:'太原',province:'山西',type:'province',typeLabel:'省属',tags:['省属重点','双一流','综合类'],desc:'山西省属顶尖综合性大学，哲学、物理学双一流建设学科。百年老校。'},
  {id:317,name:'中北大学',city:'太原',province:'山西',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','军工特色'],desc:'以军工为特色的省属重点大学，仪器科学、兵器技术全国知名。'},
  {id:318,name:'山西医科大学',city:'太原',province:'山西',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'山西省属重点医科大学，临床医学省内一流。'},
  {id:319,name:'山西财经大学',city:'太原',province:'山西',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'山西省属财经类重点大学，统计学、工商管理有特色。'},

  // --- 内蒙古 ---
  {id:320,name:'内蒙古农业大学',city:'呼和浩特',province:'内蒙古',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'内蒙古重点农业院校，草原生态学全国领先。'},
  {id:321,name:'内蒙古师范大学',city:'呼和浩特',province:'内蒙古',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'内蒙古自治区重点师范大学，民族教育特色鲜明。'},
  {id:322,name:'内蒙古工业大学',city:'呼和浩特',province:'内蒙古',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'内蒙古自治区重点工科院校，能源动力、化工特色。'},
  {id:323,name:'内蒙古科技大学',city:'包头',province:'内蒙古',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'位于钢城包头的自治区重点大学，冶金工程、矿业工程突出。'},

  // --- 辽宁 ---
  {id:324,name:'中国医科大学',city:'沈阳',province:'辽宁',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'中国共产党最早创建的医学院校，临床医学全国前列。'},
  {id:325,name:'东北财经大学',city:'大连',province:'辽宁',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'财经类名校，统计学、应用经济学全国前列。毕业生在北方金融圈影响大。'},
  {id:326,name:'沈阳农业大学',city:'沈阳',province:'辽宁',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'辽宁省属重点农业大学，作物学、园艺学为优势。'},
  {id:327,name:'辽宁师范大学',city:'大连',province:'辽宁',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'辽宁省属重点师范大学，教育学、心理学位于东北前列。'},
  {id:328,name:'沈阳工业大学',city:'沈阳',province:'辽宁',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'辽宁省属重点工科大学，电气工程、机械工程特色鲜明。'},
  {id:329,name:'辽宁工程技术大学',city:'阜新',province:'辽宁',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','矿业特色'],desc:'以矿业和测绘为特色的省属重点大学，安全工程全国知名。'},

  // --- 吉林 ---
  {id:330,name:'长春理工大学',city:'长春',province:'吉林',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','光学特色'],desc:'以光电技术为特色的省属重点大学，光学工程全国前列。"中国光学英才摇篮"。'},
  {id:331,name:'东北电力大学',city:'吉林',province:'吉林',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','电力特色'],desc:'中国电力行业重点高校，电气工程及其自动化全国知名。'},
  {id:332,name:'吉林农业大学',city:'长春',province:'吉林',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'吉林省属重点农业大学，中药学、食品科学特色鲜明。'},
  {id:333,name:'北华大学',city:'吉林',province:'吉林',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'吉林省属重点综合性大学，林业、医学、师范多学科发展。'},

  // --- 黑龙江 ---
  {id:334,name:'黑龙江大学',city:'哈尔滨',province:'黑龙江',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'黑龙江省属重点综合性大学，俄语、法学、化学突出。俄语全国第一。'},
  {id:335,name:'哈尔滨医科大学',city:'哈尔滨',province:'黑龙江',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'东北地区最好的医科大学之一，临床医学全国前列。'},
  {id:336,name:'哈尔滨理工大学',city:'哈尔滨',province:'黑龙江',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以电气和机械为特色的省属重点大学，电缆专业全国知名。'},
  {id:337,name:'齐齐哈尔大学',city:'齐齐哈尔',province:'黑龙江',type:'province',typeLabel:'省属',tags:['省属','综合类'],desc:'黑龙江省属综合性大学，化工、食品科学有一定特色。'},

  // --- 上海 ---
  {id:338,name:'上海理工大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'上海市属重点理工科大学，光学工程、动力工程全国领先。'},
  {id:339,name:'上海师范大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'上海市属重点师范大学，教育学、中国语言文学突出。'},
  {id:340,name:'上海对外经贸大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'上海市属财经类高校，国际贸易、WTO研究特色鲜明。'},
  {id:341,name:'华东政法大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','政法类'],desc:'法学名校，法学实力紧随中国政法之后。华东地区法学人才摇篮。'},
  {id:342,name:'上海海洋大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','双一流','理工类'],desc:'水产学双一流，海洋科学特色鲜明。'},
  {id:343,name:'上海中医药大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','双一流','医药类'],desc:'中医药名校，中医学、中药学双一流。'},
  {id:344,name:'上海海事大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','工科强校','航运特色'],desc:'以航运和物流为特色的市属重点大学，交通运输工程突出。'},

  // --- 江苏 ---
  {id:345,name:'南京工业大学',city:'南京',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'化工、材料、土木实力强劲的省属重点大学。'},
  {id:346,name:'南京邮电大学',city:'南京',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','双一流','工科强校'],desc:'电子信息领域名校，电子科学与技术双一流。'},
  {id:347,name:'南京林业大学',city:'南京',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','双一流','农林类'],desc:'林业工程双一流，风景园林学全国知名。'},
  {id:348,name:'南京信息工程大学',city:'南京',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','双一流','理工类'],desc:'大气科学双一流，中国气象人才摇篮。'},
  {id:349,name:'南京医科大学',city:'南京',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','双一流','医药类'],desc:'公共卫生与预防医学双一流，江苏最好的医科大学。'},
  {id:350,name:'南京中医药大学',city:'南京',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','双一流','医药类'],desc:'中药学双一流，中医药领域重要学府。'},
  {id:351,name:'江苏大学',city:'镇江',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以工科见长的省属重点综合性大学，车辆工程、农业工程突出。'},
  {id:352,name:'扬州大学',city:'扬州',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'学科门类齐全的省属重点综合性大学，兽医学全国顶尖。'},
  {id:353,name:'南京财经大学',city:'南京',province:'江苏',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'江苏省属财经类重点大学，食品科学与工程、应用经济学为优势。'},

  // --- 浙江 ---
  {id:354,name:'浙江工业大学',city:'杭州',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'浙江省属最强工科大学，化工、机械、制药工程全国知名。'},
  {id:355,name:'浙江师范大学',city:'金华',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'浙江省属重点师范大学，数学、教育学突出。'},
  {id:356,name:'宁波大学',city:'宁波',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','双一流','综合类'],desc:'力学双一流，浙江省属重点综合性大学。'},
  {id:357,name:'杭州电子科技大学',city:'杭州',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'电子信息领域名校，计算机、电子科学突出。杭州IT就业优势明显。'},
  {id:358,name:'浙江工商大学',city:'杭州',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'浙江省属财经类重点大学，统计学、工商管理突出。'},
  {id:359,name:'浙江理工大学',city:'杭州',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以纺织和机械为特色的省属重点大学。'},
  {id:360,name:'温州医科大学',city:'温州',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'眼视光医学全国第一，浙江省属重点医科大学。'},

  // --- 安徽 ---
  {id:361,name:'安徽师范大学',city:'芜湖',province:'安徽',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'安徽省属重点师范大学，中国语言文学、化学为优势。'},
  {id:362,name:'安徽医科大学',city:'合肥',province:'安徽',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'安徽省属重点医科大学，临床医学省内领先。'},
  {id:363,name:'安徽农业大学',city:'合肥',province:'安徽',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'安徽省属重点农业大学，茶学全国第一。'},
  {id:364,name:'安徽理工大学',city:'淮南',province:'安徽',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以矿业和爆破为特色的省属重点大学。'},
  {id:365,name:'安徽工业大学',city:'马鞍山',province:'安徽',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以冶金为特色的省属重点大学，位于钢城马鞍山。'},

  // --- 福建 ---
  {id:366,name:'福建师范大学',city:'福州',province:'福建',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'福建省属重点师范大学，中国语言文学、音乐学突出。'},
  {id:367,name:'华侨大学',city:'厦门',province:'福建',type:'province',typeLabel:'部委',tags:['部委直属','综合类'],desc:'中央统战部直属，面向海外华侨办学。建筑学、旅游管理突出。'},
  {id:368,name:'福建农林大学',city:'福州',province:'福建',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'福建省属重点农林大学，植物保护、林学特色鲜明。'},
  {id:369,name:'福建医科大学',city:'福州',province:'福建',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'福建省属重点医科大学，临床医学省内领先。'},
  {id:370,name:'集美大学',city:'厦门',province:'福建',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'福建省属重点综合性大学，航海、水产特色鲜明。'},

  // --- 江西 ---
  {id:371,name:'江西财经大学',city:'南昌',province:'江西',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'财经类名校，统计学、应用经济学全国前列。'},
  {id:372,name:'江西师范大学',city:'南昌',province:'江西',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'江西省属重点师范大学，马克思主义理论突出。'},
  {id:373,name:'华东交通大学',city:'南昌',province:'江西',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以交通为特色的省属重点大学，土木工程、交通运输突出。'},
  {id:374,name:'江西农业大学',city:'南昌',province:'江西',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'江西省属重点农业大学，畜牧学特色鲜明。'},

  // --- 山东 ---
  {id:375,name:'青岛大学',city:'青岛',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'山东省属重点综合性大学，临床医学、纺织工程突出。'},
  {id:376,name:'山东科技大学',city:'青岛',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'山东省属重点工科大学，测绘、矿业工程全国知名。'},
  {id:377,name:'山东师范大学',city:'济南',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'山东省属重点师范大学，中国现当代文学全国领先。'},
  {id:378,name:'山东农业大学',city:'泰安',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'山东省属重点农业大学，作物学全国前列。'},
  {id:379,name:'青岛科技大学',city:'青岛',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以化工和橡胶为特色的省属重点大学，被誉为"中国橡胶工业的黄埔"。'},
  {id:380,name:'山东财经大学',city:'济南',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'山东省属财经类重点大学，财政学、会计学突出。'},
  {id:381,name:'济南大学',city:'济南',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'山东省属重点综合性大学，材料科学、化学工程为优势。'},
  {id:382,name:'烟台大学',city:'烟台',province:'山东',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'山东省属重点综合性大学，药学、法学突出。滨海校园。'},

  // --- 河南 ---
  {id:383,name:'河南大学',city:'开封',province:'河南',type:'province',typeLabel:'省属',tags:['省属重点','双一流','综合类'],desc:'百年老校，生物学双一流。曾是民国国立第五中山大学。郑州、开封两地办学。'},
  {id:384,name:'河南师范大学',city:'新乡',province:'河南',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'河南省属重点师范大学，化学、物理学突出。'},
  {id:385,name:'河南科技大学',city:'洛阳',province:'河南',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'河南省属重点工科大学，轴承、材料科学全国知名。'},
  {id:386,name:'河南理工大学',city:'焦作',province:'河南',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以矿业和安全为特色的省属重点大学，安全科学全国领先。'},
  {id:387,name:'河南农业大学',city:'郑州',province:'河南',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'河南省属重点农业大学，作物学、烟草学全国前列。'},
  {id:388,name:'河南工业大学',city:'郑州',province:'河南',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以粮油食品为特色的省属重点大学，食品科学突出。'},
  {id:389,name:'河南财经政法大学',city:'郑州',province:'河南',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'河南省属财经政法类重点大学，工商管理、法学为优势。'},

  // --- 湖南 ---
  {id:390,name:'湘潭大学',city:'湘潭',province:'湖南',type:'province',typeLabel:'省属',tags:['省属重点','双一流','综合类'],desc:'数学双一流，毛泽东同志亲自倡办的综合性全国重点大学。'},
  {id:391,name:'长沙理工大学',city:'长沙',province:'湖南',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以交通和电力为特色的省属重点大学，土木工程突出。'},
  {id:392,name:'湖南农业大学',city:'长沙',province:'湖南',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'湖南省属重点农业大学，袁隆平院士曾在此工作。水稻研究全球领先。'},
  {id:393,name:'中南林业科技大学',city:'长沙',province:'湖南',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'以林业和生态为特色的省属重点大学。'},
  {id:394,name:'南华大学',city:'衡阳',province:'湖南',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'以核科学和医学为特色的省属重点大学。'},
  {id:395,name:'湖南科技大学',city:'湘潭',province:'湖南',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以矿业和师范为底蕴的省属重点大学。'},

  // --- 广东 ---
  {id:396,name:'深圳大学',city:'深圳',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'发展最快的大学之一，计算机、建筑学实力强劲。腾讯创始人母校。'},
  {id:397,name:'南方医科大学',city:'广州',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'原第一军医大学，临床医学全国前列。广东省属重点医科大学。'},
  {id:398,name:'广东工业大学',city:'广州',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'广东省属最大的工科院校，机械、自动化实力突出。'},
  {id:399,name:'广州大学',city:'广州',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'广州市属重点综合性大学，土木工程、统计学为优势。'},
  {id:400,name:'广东外语外贸大学',city:'广州',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','语言类'],desc:'华南地区外语外贸类名校，外国语言文学全国前列。'},
  {id:401,name:'广州中医药大学',city:'广州',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','双一流','医药类'],desc:'中医学双一流，华南中医药最高学府。'},
  {id:402,name:'汕头大学',city:'汕头',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','综合类'],desc:'李嘉诚基金会持续资助的省属重点大学，医学、商学突出。'},
  {id:403,name:'广州医科大学',city:'广州',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','双一流','医药类'],desc:'临床医学双一流，钟南山院士所在单位。'},
  {id:404,name:'南方科技大学',city:'深圳',province:'广东',type:'province',typeLabel:'省属',tags:['省属重点','双一流','理工类'],desc:'新型研究型大学，数学双一流。深圳创新氛围加持，发展极快。'},

  // --- 广西 ---
  {id:405,name:'广西师范大学',city:'桂林',province:'广西',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'广西重点师范大学，马克思主义理论突出。位于山水甲天下的桂林。'},
  {id:406,name:'广西医科大学',city:'南宁',province:'广西',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'广西最好的医科大学，临床医学区域领先。'},
  {id:407,name:'桂林电子科技大学',city:'桂林',province:'广西',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以电子信息为特色的省属重点大学，计算机科学突出。'},
  {id:408,name:'桂林理工大学',city:'桂林',province:'广西',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以地质和材料为特色的省属重点大学。'},

  // --- 海南 ---
  {id:409,name:'海南师范大学',city:'海口',province:'海南',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'海南省属重点师范大学，生态学、教育学为特色。'},
  {id:410,name:'海南医科大学',city:'海口',province:'海南',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'海南省属重点医科大学，热带医学特色鲜明。'},

  // --- 重庆 ---
  {id:411,name:'重庆邮电大学',city:'重庆',province:'重庆',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以信息通信为特色的市属重点大学，计算机科学突出。'},
  {id:412,name:'重庆医科大学',city:'重庆',province:'重庆',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'重庆市属重点医科大学，儿科学全国第一。'},
  {id:413,name:'重庆交通大学',city:'重庆',province:'重庆',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以交通和水利为特色的市属重点大学。'},
  {id:414,name:'重庆师范大学',city:'重庆',province:'重庆',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'重庆市属重点师范大学，数学、教育学为优势。'},
  {id:415,name:'西南政法大学',city:'重庆',province:'重庆',type:'province',typeLabel:'省属',tags:['省属重点','政法类'],desc:'法学名校，新中国最早建立的政法高等学府。法学界"黄埔军校"。'},
  {id:416,name:'四川外国语大学',city:'重庆',province:'重庆',type:'province',typeLabel:'省属',tags:['省属重点','语言类'],desc:'西南地区外语类重点大学，外国语言文学突出。虽名"四川"但位于重庆。'},

  // --- 四川 ---
  {id:417,name:'成都理工大学',city:'成都',province:'四川',type:'province',typeLabel:'省属',tags:['省属重点','双一流','工科强校'],desc:'地质资源与地质工程双一流，地质灾害防治全国领先。'},
  {id:418,name:'四川师范大学',city:'成都',province:'四川',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'四川省属重点师范大学，中国语言文学、教育学突出。'},
  {id:419,name:'西南科技大学',city:'绵阳',province:'四川',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'位于中国科技城绵阳，材料科学、环境工程特色。'},
  {id:420,name:'成都信息工程大学',city:'成都',province:'四川',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以气象和信息为特色的省属重点大学。'},
  {id:421,name:'西华大学',city:'成都',province:'四川',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'四川省属重点综合性大学，车辆工程、食品科学突出。'},
  {id:422,name:'西南石油大学',city:'成都',province:'四川',type:'province',typeLabel:'省属',tags:['省属重点','双一流','工科强校'],desc:'石油与天然气工程双一流。成都、南充两地办学。'},
  {id:423,name:'成都中医药大学',city:'成都',province:'四川',type:'province',typeLabel:'省属',tags:['省属重点','双一流','医药类'],desc:'中药学双一流，西南中医药最高学府。'},

  // --- 贵州 ---
  {id:424,name:'贵州师范大学',city:'贵阳',province:'贵州',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'贵州省属重点师范大学，地理学、马克思主义理论特色。'},
  {id:425,name:'贵州医科大学',city:'贵阳',province:'贵州',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'贵州省属重点医科大学，临床医学省内最佳。'},
  {id:426,name:'遵义医科大学',city:'遵义',province:'贵州',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'贵州省属重点医科大学，珠海校区同时办学。'},

  // --- 云南 ---
  {id:427,name:'云南师范大学',city:'昆明',province:'云南',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'西南联大师范学院后继者，教育学、地理学特色。'},
  {id:428,name:'昆明理工大学',city:'昆明',province:'云南',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'云南省属最强工科大学，冶金工程、材料科学全国知名。'},
  {id:429,name:'昆明医科大学',city:'昆明',province:'云南',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'云南省属重点医科大学，临床医学省内领先。'},
  {id:430,name:'云南财经大学',city:'昆明',province:'云南',type:'province',typeLabel:'省属',tags:['省属重点','财经类'],desc:'云南省属财经类重点大学，统计学突出。'},

  // --- 西藏 ---
  {id:431,name:'西藏民族大学',city:'咸阳',province:'陕西',type:'province',typeLabel:'省属',tags:['省属重点','民族类'],desc:'西藏自治区所属高校，校址位于陕西咸阳。民族学、藏学特色。'},

  // --- 陕西 ---
  {id:432,name:'西安建筑科技大学',city:'西安',province:'陕西',type:'province',typeLabel:'省属',tags:['省属重点','建筑老八校'],desc:'建筑老八校之一，建筑学、土木工程全国知名。'},
  {id:433,name:'西安理工大学',city:'西安',province:'陕西',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以水利和机械为特色的省属重点大学。'},
  {id:434,name:'西安科技大学',city:'西安',province:'陕西',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以矿业和安全为特色的省属重点大学。'},
  {id:435,name:'陕西科技大学',city:'西安',province:'陕西',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以轻工为特色的省属重点大学，造纸、皮革全国知名。'},
  {id:436,name:'西安外国语大学',city:'西安',province:'陕西',type:'province',typeLabel:'省属',tags:['省属重点','语言类'],desc:'西北地区外语类重点大学，外国语言文学突出。'},

  // --- 甘肃 ---
  {id:437,name:'西北师范大学',city:'兰州',province:'甘肃',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'西北地区师范教育重镇，教育学、中国语言文学突出。'},
  {id:438,name:'兰州交通大学',city:'兰州',province:'甘肃',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以铁路交通为特色的省属重点大学，土木工程突出。'},
  {id:439,name:'兰州理工大学',city:'兰州',province:'甘肃',type:'province',typeLabel:'省属',tags:['省属重点','工科强校'],desc:'以机械和材料为特色的省属重点大学。'},
  {id:440,name:'甘肃农业大学',city:'兰州',province:'甘肃',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'甘肃省属重点农业大学，草学、畜牧学特色鲜明。'},

  // --- 青海 ---
  {id:441,name:'青海师范大学',city:'西宁',province:'青海',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'青海省属重点师范大学。'},
  {id:442,name:'青海民族大学',city:'西宁',province:'青海',type:'province',typeLabel:'省属',tags:['省属重点','民族类'],desc:'青海省属民族类重点大学，藏学、民族学特色。'},

  // --- 宁夏 ---
  {id:443,name:'宁夏医科大学',city:'银川',province:'宁夏',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'宁夏回族自治区属重点医科大学。'},

  // --- 新疆 ---
  {id:444,name:'新疆师范大学',city:'乌鲁木齐',province:'新疆',type:'province',typeLabel:'省属',tags:['省属重点','师范类'],desc:'新疆维吾尔自治区属重点师范大学。'},
  {id:445,name:'新疆医科大学',city:'乌鲁木齐',province:'新疆',type:'province',typeLabel:'省属',tags:['省属重点','医药类'],desc:'新疆最好的医科大学，临床医学区域领先。'},
  {id:446,name:'新疆农业大学',city:'乌鲁木齐',province:'新疆',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'新疆维吾尔自治区属重点农业大学，棉花研究全国领先。'},
  {id:447,name:'塔里木大学',city:'阿拉尔',province:'新疆',type:'province',typeLabel:'省属',tags:['省属重点','农林类'],desc:'新疆生产建设兵团直属高校，南疆重要高等学府。'},

  // --- 其他知名院校 ---
  {id:448,name:'中国科学院大学',city:'北京',province:'北京',type:'211',typeLabel:'211',tags:['211','双一流','理工类','研究型'],desc:'中国科学院直属，研究生教育起家，近年招收本科生。科研实力全国顶尖。'},
  {id:449,name:'中国社会科学院大学',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','人文社科'],desc:'中国社会科学院直属，人文社科精英教育。'},
  {id:450,name:'外交学院',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','双一流','政法类'],desc:'外交部直属，政治学双一流。中国外交官的摇篮。'},
  {id:451,name:'国际关系学院',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','政法类','外语特色'],desc:'教育部直属，以外语和国际问题研究为特色的小规模精品院校。'},
  {id:452,name:'中国人民公安大学',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','双一流','政法类'],desc:'公安部直属，公安学双一流。中国公安系统最高学府。'},
  {id:453,name:'北京语言大学',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','语言类'],desc:'教育部直属，中国唯一以汉语国际教育为特色的大学。留学生比例全国最高。'},
  {id:454,name:'中央美术学院',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','双一流','艺术类'],desc:'中国美术最高学府，美术学、设计学双一流。'},
  {id:455,name:'中央戏剧学院',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','双一流','艺术类'],desc:'中国戏剧影视艺术教育的最高学府，戏剧与影视学双一流。'},
  {id:456,name:'中央音乐学院',city:'北京',province:'北京',type:'province',typeLabel:'部委',tags:['部委直属','双一流','艺术类'],desc:'中国音乐最高学府，音乐与舞蹈学双一流。'},
  {id:457,name:'上海戏剧学院',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','艺术类'],desc:'中国戏剧艺术教育重镇，表演、导演专业全国知名。'},
  {id:458,name:'中国美术学院',city:'杭州',province:'浙江',type:'province',typeLabel:'省属',tags:['省属重点','双一流','艺术类'],desc:'美术学双一流，中国八大美院之首。杭州象山校区建筑闻名。'},
  {id:459,name:'上海体育大学',city:'上海',province:'上海',type:'province',typeLabel:'省属',tags:['省属重点','双一流','体育类'],desc:'体育学双一流，中国体育高等教育的标杆之一。'},
  {id:460,name:'北京电影学院',city:'北京',province:'北京',type:'province',typeLabel:'省属',tags:['省属重点','艺术类'],desc:'中国电影教育最高学府，导演、表演、摄影等专业全国第一。'},
  {id:461,name:'景德镇陶瓷大学',city:'景德镇',province:'江西',type:'province',typeLabel:'省属',tags:['省属重点','艺术类'],desc:'中国唯一以陶瓷为特色的高等学府，设计学突出。'},
  {id:462,name:'战略支援部队信息工程大学',city:'郑州',province:'河南',type:'province',typeLabel:'军事',tags:['军事院校','工科强校'],desc:'中国人民解放军战略支援部队直属，测绘、信息安全全国顶尖。'},

  // ========================
  // 五、湖北省民办本科补充（独立学院等）
  // ========================
  {id:500,name:'武汉传媒学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','艺术类'],desc:'华中地区唯一传媒类民办本科，播音主持、广播电视编导为特色专业。'},
  {id:501,name:'武汉设计工程学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','艺术类'],desc:'以设计学科为特色的民办应用型本科，环境设计、视觉传达设计突出。'},
  {id:502,name:'湖北大学知行学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'湖北大学举办的独立学院，以经管、人文为特色的应用型本科院校。'},
  {id:503,name:'武汉工程大学邮电与信息工程学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'武汉工程大学举办的独立学院，通信工程、计算机等专业为优势。'},
  {id:504,name:'湖北工业大学工程技术学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'湖北工业大学独立学院，机械设计制造及其自动化等专业有特色。'},
  {id:505,name:'长江大学文理学院',city:'荆州',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','综合类'],desc:'长江大学举办的独立学院，文学、法学、管理学等多学科协调发展。'},
  {id:506,name:'武汉纺织大学外经贸学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','商科类'],desc:'武汉纺织大学独立学院，国际经济与贸易、服装设计为特色。'},
  {id:507,name:'湖北经济学院法商学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','政法类'],desc:'湖北经济学院独立学院，法学、会计学、金融学为优势专业。'},
  {id:508,name:'武汉体育学院体育科技学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','体育类'],desc:'武汉体育学院独立学院，体育教育、运动训练为特色。'},
  {id:509,name:'湖北医药学院药护学院',city:'十堰',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','医药类'],desc:'湖北医药学院独立学院，护理学、药学为特色专业。'},
  {id:510,name:'武汉工程科技学院',city:'武汉',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','工科'],desc:'前身为中国地质大学江城学院，以工科和珠宝鉴定为特色的民办本科。'},
  {id:511,name:'湖北师范大学文理学院',city:'黄石',province:'湖北',type:'priv',typeLabel:'民办',tags:['民办','师范类'],desc:'湖北师范大学独立学院，师范类和应用型专业协调发展。'},

  // ========================
  // 六、湖北省专科/高职院校
  // ========================

  // --- 双高计划（8所高水平高职） ---
  {id:600,name:'武汉职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','国家示范','工科强校'],desc:'湖北省实力最强的专科院校之一，电子信息、机电一体化、纺织服装等专业全国领先。双高计划高水平高职学校建设单位。'},
  {id:601,name:'武汉船舶职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','国家示范','工科强校'],desc:'船舶与海洋工程领域全国顶尖高职院校，轮机工程、船舶工程技术特色鲜明。'},
  {id:602,name:'黄冈职业技术学院',city:'黄冈',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','国家示范','综合类'],desc:'湖北地市州最好的高职院校之一，建筑、汽车、护理等专业优势突出。'},
  {id:603,name:'武汉铁路职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','国家示范','交通特色'],desc:'铁路系统重点高职，铁道机车、铁道车辆、城市轨道交通运营管理全国知名。'},
  {id:604,name:'襄阳职业技术学院',city:'襄阳',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','国家示范','综合类'],desc:'鄂西北最大的高职院校，医学护理、汽车检修、畜牧兽医为品牌专业。'},
  {id:605,name:'湖北交通职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','国家示范','交通特色'],desc:'湖北省交通厅直属，道路桥梁、汽车运用、物流管理等专业省内最强。'},
  {id:606,name:'湖北职业技术学院',city:'孝感',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','国家示范','综合类'],desc:'位于孝感，护理、口腔医学技术、建筑装饰等专业全国示范。'},
  {id:607,name:'武汉电力职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['双高计划','电力特色','工科强校'],desc:'国家电网公司主办，发电厂及电力系统、供用电技术全国顶尖。就业率极高。'},

  // --- 其他公办专科（武汉市） ---
  {id:610,name:'武汉城市职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'武汉市属最大的高职院校，学前教育、小学教育、汽车检测等专业不错。'},
  {id:611,name:'武汉软件工程职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校','计算机特色'],desc:'以软件技术、计算机应用为特色的公办高职，武汉光谷区域就业优势明显。'},
  {id:612,name:'武汉警官职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','政法类'],desc:'湖北省司法厅直属，司法警务、刑事侦查、法律文秘等专业为公安政法系统输送人才。'},
  {id:613,name:'湖北轻工职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'以轻工业为特色的老牌公办高职，食品加工、酿酒技术、印刷工程等专业全国知名。'},
  {id:614,name:'湖北水利水电职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'水利系统重点高职，水利工程、水文水资源、水电设备等专业省内独树一帜。'},
  {id:615,name:'湖北生态工程职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','农林类'],desc:'以林业和生态为特色的公办高职，园林技术、森林生态旅游等专业有特色。'},
  {id:616,name:'湖北城市建设职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'建筑类特色高职，建筑工程技术、工程造价、建筑装饰等专业对口就业率高。'},
  {id:617,name:'湖北生物科技职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','农林类'],desc:'以生物和农业为特色的公办高职，生物制药技术、畜牧兽医等专业突出。'},
  {id:618,name:'湖北国土资源职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'以地质矿产为特色的公办高职，工程测量、宝玉石鉴定等专业特色鲜明。'},
  {id:619,name:'湖北艺术职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','艺术类'],desc:'湖北省文化厅直属，舞蹈表演、音乐表演、戏曲表演等艺术专业全省领先。'},
  {id:620,name:'湖北幼儿师范高等专科学校',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','师范类'],desc:'湖北省唯一幼师高专，学前教育、早期教育为特色，培养幼儿教师的主阵地。'},
  {id:621,name:'武汉交通职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','交通特色'],desc:'以交通物流为特色的公办高职，物流管理、港口航运、汽车运用等专业突出。'},
  {id:622,name:'武汉民政职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','政法类'],desc:'湖北省民政厅直属，社会工作、现代殡葬技术与管理、康复治疗等专业特色鲜明。'},
  {id:623,name:'武汉工程职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'宝武集团主办，钢铁冶金、机械制造、电气自动化等工科专业就业稳定。'},
  {id:624,name:'长江职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'公办综合性高职，电子商务、动漫设计、会计等专业在校生规模大。'},
  {id:625,name:'湖北财税职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','财经类'],desc:'湖北省地税局直属，税务、会计、财务管理等财经类专业为办学特色。'},

  // --- 其他公办专科（各地市） ---
  {id:630,name:'湖北中医药高等专科学校',city:'荆州',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','医药类'],desc:'湖北省唯一中医药类高专，中医学、针灸推拿、中药学等专业省内最强。'},
  {id:631,name:'荆州职业技术学院',city:'荆州',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'荆州市属最大的公办高职，护理、汽车检测、会计等专业在校生规模大。'},
  {id:632,name:'荆州理工职业学院',city:'荆州',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'以工科为主的高职，光电技术、数控技术等专业对接荆州产业。'},
  {id:633,name:'湖北工程职业学院',city:'黄石',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'黄石市属公办高职，机械制造、模具设计、电子信息对接黄石产业需求。'},
  {id:634,name:'鄂州职业大学',city:'鄂州',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'鄂州市唯一公办高校，护理、药学、建筑工程技术为优势专业。'},
  {id:635,name:'咸宁职业技术学院',city:'咸宁',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'咸宁市属公办高职，园林、旅游管理、护理等对接地方产业的专业有特色。'},
  {id:636,name:'随州职业技术学院',city:'随州',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'随州市属公办高职，汽车检修、护理、旅游管理等专业服务地方经济。'},
  {id:637,name:'恩施职业技术学院',city:'恩施',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'恩施州属公办高职，旅游管理、畜牧兽医、富硒食品等对接恩施特色产业。'},
  {id:638,name:'仙桃职业学院',city:'仙桃',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'仙桃市属公办高职，学前教育、护理、机械制造等专业办学历史较长。'},
  {id:639,name:'江汉艺术职业学院',city:'潜江',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','艺术类'],desc:'潜江市属公办艺术类高职，戏剧表演、舞蹈编导、艺术设计等专业有特色。'},
  {id:640,name:'湖北三峡职业技术学院',city:'宜昌',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'宜昌市属最大的公办高职，旅游管理、化工、机电等对接三峡区域产业。'},
  {id:641,name:'三峡电力职业学院',city:'宜昌',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','电力特色'],desc:'葛洲坝集团主办，电力系统继电保护、发电厂等专业就业率高。'},
  {id:642,name:'三峡旅游职业技术学院',city:'宜昌',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','旅游特色'],desc:'以旅游为特色的公办高职，导游、酒店管理、烹饪工艺等专业有优势。'},
  {id:643,name:'襄阳汽车职业技术学院',city:'襄阳',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'以汽车产业链为特色的公办高职，汽车制造与装配、新能源汽车等专业突出。'},
  {id:644,name:'荆门职业学院',city:'荆门',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'荆门市属公办高职，化工、通用航空、智能制造等对接荆门产业。'},
  {id:645,name:'天门职业学院',city:'天门',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','综合类'],desc:'天门市属公办高职，护理、茶艺、学前教育等专业服务地方。'},
  {id:646,name:'湖北工业职业技术学院',city:'十堰',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'十堰市属公办高职（原十堰职业技术学院），汽车电子、模具设计对接十堰汽车产业。'},
  {id:647,name:'黄冈科技职业学院',city:'黄冈',province:'湖北',type:'college',typeLabel:'专科',tags:['公办','工科强校'],desc:'黄冈市属公办工科高职，计算机、机电、无人机等应用型专业有特色。'},

  // --- 民办专科 ---
  {id:660,name:'武汉商贸职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','商科类'],desc:'民办高职，航空服务、物流管理、市场营销等商科专业为主。'},
  {id:661,name:'武汉信息传播职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','传媒特色'],desc:'知音传媒集团主办，印刷媒体技术、数字出版、动漫制作等传媒类专业突出。'},
  {id:662,name:'武汉科技职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','工科强校'],desc:'民办工科类高职，机电一体化、计算机应用、轨道交通等专业有特色。'},
  {id:663,name:'武汉外语外事职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','语言类'],desc:'以涉外语言为特色的民办高职，应用英语、商务日语、旅游管理等专业为主。'},
  {id:664,name:'武汉光谷职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','工科强校'],desc:'位于光谷核心区，光电技术、软件技术、电子商务等对接光谷高新产业。'},
  {id:665,name:'湖北健康职业学院',city:'咸宁',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','医药类'],desc:'民办医药类高职，护理、康复治疗技术、中医养生保健等大健康专业为主。'},
  {id:666,name:'武昌职业学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','综合类'],desc:'民办综合性高职，无人机应用技术、定向培养军士等特色鲜明。'},
  {id:667,name:'长江艺术工程职业学院',city:'荆州',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','艺术类'],desc:'民办艺术类高职，工艺美术品设计、刺绣设计与工艺等非遗传承特色突出。'},
  {id:668,name:'湖北孝感美珈职业学院',city:'孝感',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','综合类'],desc:'近年新建民办高职，护理、大数据与会计、工业机器人等专业为主。'},
  {id:669,name:'武汉航海职业技术学院',city:'武汉',province:'湖北',type:'college',typeLabel:'专科',tags:['民办','交通特色'],desc:'长航集团主办，航海技术、轮机工程技术、国际邮轮乘务管理特色突出。'}
];
