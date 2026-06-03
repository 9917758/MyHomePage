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
		{ name: "Figma", img: "/img/tool-icons/figma.png", size: 65, top: 35, left: 35, blur: 0 },
		{ name: "Axure", img: "/img/tool-icons/axure.png", size: 45, top: 25, left: 55, blur: 1 },
		{ name: "Coze", img: "/img/image2.png", size: 55, top: 50, left: 25, blur: 0.5 },
		{ name: "Cursor", img: "/img/tool-icons/cursor.png", size: 70, top: 45, left: 65, blur: 0 },
		{ name: "Dify", img: "/img/sunshine.jpg", size: 40, top: 70, left: 40, blur: 1.5 },
		{ name: "Xmind", img: "/img/My-photo.jpg", size: 55, top: 65, left: 70, blur: 0.5 },
		{ name: "SQL", img: "/img/avatar.jpg", size: 40, top: 20, left: 35, blur: 1 },
		{ name: "Python", img: "/img/image1.png", size: 50, top: 80, left: 55, blur: 0.5 },
		{ name: "Midjourney", img: "/img/image2.png", size: 35, top: 55, left: 80, blur: 1 },
		{ name: "Jira", img: "/img/image3.png", size: 45, top: 40, left: 15, blur: 1.5 },
		{ name: "Claude", img: "/img/tool-icons/claude.png", size: 50, top: 15, left: 70, blur: 2 },
		{ name: "ChatGPT", img: "/img/tool-icons/chatgpt.png", size: 60, top: 80, left: 25, blur: 1 }
	],

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-email", type: "tooltip", value: "1293371504@qq.com" },
		{ icon: "mdi-wechat", type: "dialog", value: "/img/weixin.png" },
		{ icon: "mdi-phone", type: "tooltip", value: "13932748300" }
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
			{ "title": "自定义壁纸1", "preview": "/img/wallpaper/1.jpg", "url": "/img/wallpaper/1.jpg" },
			{ "title": "自定义壁纸2", "preview": "/img/wallpaper/2.jpg", "url": "/img/wallpaper/2.jpg" },
			{ "title": "自定义壁纸3", "preview": "/img/wallpaper/3.jpg", "url": "/img/wallpaper/3.jpg" },
			{ "title": "自定义壁纸4", "preview": "/img/wallpaper/4.jpg", "url": "/img/wallpaper/4.jpg" },
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },

		],
		picMobile: [
			{ "title": "自定义壁纸1", "preview": "/img/wallpaper/1.jpg", "url": "/img/wallpaper/1.jpg" },
			{ "title": "自定义壁纸2", "preview": "/img/wallpaper/2.jpg", "url": "/img/wallpaper/2.jpg" },
			{ "title": "自定义壁纸3", "preview": "/img/wallpaper/3.jpg", "url": "/img/wallpaper/3.jpg" },
			{ "title": "自定义壁纸4", "preview": "/img/wallpaper/4.jpg", "url": "/img/wallpaper/4.jpg" },
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },

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
			text: "该项目为个人项目，从零到一策划垂直摄影社交平台，主要产出物为PRD文档和高保真产品原型。点击详情查看完整原型演示。",
			show: false,
			detailType: 'iframe',
			detailData: [
				"/shejiao-proto/总览模式.html"
			]
		},
		{
			go: "🗂️ 查阅文档",
			img: "/img/image2.png",
			title: "Project 2: 用户全生命周期管理",
			subtitle: "需求分析 / 方案输出",
			text: "实习期间围绕提升会员页面触达率与商城积分核销率的目标，梳理体验断点与流失漏斗，输出结构化产品策划方案。",
			show: false,
			detailType: 'iframe',
			detailData: [
				"/docs/用户全生命周期管理.pdf"
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
				"https://proj3.my-home-page.xyz"
			]
		},
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Leleo"],
}

export default config