const config = {
	//网页元数据
	metaData: {
		title: '黄晓晗的个人主页🎉',
		description: '欢迎来到黄晓晗的奇妙世界！',
		keywords: '黄晓晗,个人主页,个人网站,产品经理',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/My-photo.jpg", // 头像
	welcometitle: "Hi, I'm 黄晓晗", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['需求分析', '用户洞察', '原型设计', 'PRD撰写', '数据驱动', '商业化策略', '跨部门协作'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "自定义壁纸",
				"preview": "/img/wallpaper/3.jpg",
				"url": "/img/wallpaper/3.jpg",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "自定义壁纸",
				"preview": "/img/wallpaper/3.jpg",
				"url": "/img/wallpaper/3.jpg"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	// 工具悬浮墙数据 (可在此处修改坐标、大小、模糊度以及使用的图片)
	toolsCloud: [
		{ name: "Figma", img: "/img/avatar.jpg", size: 60, top: 35, left: 35, blur: 0 },
		{ name: "Axure", img: "/img/image1.png", size: 45, top: 25, left: 55, blur: 2 },
		{ name: "墨刀", img: "/img/image2.png", size: 50, top: 50, left: 25, blur: 1 },
		{ name: "Cursor", img: "/img/image3.png", size: 70, top: 45, left: 65, blur: 0 },
		{ name: "MySQL", img: "/img/sunshine.jpg", size: 35, top: 70, left: 40, blur: 3 },
		{ name: "Xmind", img: "/img/My-photo.jpg", size: 55, top: 65, left: 70, blur: 1 },
		{ name: "SQL", img: "/img/avatar.jpg", size: 40, top: 20, left: 35, blur: 2 },
		{ name: "Python", img: "/img/image1.png", size: 50, top: 80, left: 55, blur: 1 },
		{ name: "Visio", img: "/img/image2.png", size: 35, top: 55, left: 80, blur: 2 },
		{ name: "Jira", img: "/img/image3.png", size: 45, top: 40, left: 15, blur: 3 },
		{ name: "Confluence", img: "/img/sunshine.jpg", size: 30, top: 15, left: 70, blur: 4 },
		{ name: "Tableau", img: "/img/My-photo.jpg", size: 40, top: 80, left: 25, blur: 2 }
	],

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-email", type: "tooltip", value: "1293371504@qq.com" },
		{ icon: "mdi-wechat", type: "dialog", value: "/img/weixin.png" },
		{ icon: "mdi-phone", type: "tooltip", value: "13755149383" }
	],

	//打字机
	typeWriterStrings: [
		"ENTJ快乐产品选手，有c端产品和0-1项目孵化经历",
		"外向擅协作，满怀热忱深耕产品领域"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{
			go: "✨ 查看详情",
			img: "/img/image1.png",
			title: "Project 1: “摄交”APP 原型",
			subtitle: "产品设计 / 交互体验",
			text: "该项目主要从0到1负责了核心业务模块的原型设计，主要产出物为高保真产品原型与交互逻辑设计。点击查看完整在线原型演示。",
			show: false,
			detailType: 'iframe',
			detailData: [
				"/shejiao-proto/总览模式.html"
			]
		},
		{
			go: "🗂️ 查阅文档",
			img: "/img/image2.png",
			title: "Project 2: 用户生命周期管理",
			subtitle: "需求分析 / 方案输出",
			text: "实习期间产出的核心PRD文档与项目改进PPT汇报方案。全面展示了需求拆解和痛点分析能力。",
			show: false,
			detailType: 'iframe',
			detailData: [
				"/docs/用户生命周期管理.pdf"
			]
		},
		{
			go: "🌐 浏览网页",
			img: "/img/image3.png",
			title: "Project 3: 数据可视化",
			subtitle: "网页设计 / 交互开发",
			text: "这是一个关于数字新闻的Web项目，实现了信息的可视化与动态交互展示。",
			show: false,
			detailType: 'link',
			detailData: [
				"https://city-folding-6wskre0kt-9917758s-projects.vercel.app"
			]
		},
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Leleo"],
}

export default config