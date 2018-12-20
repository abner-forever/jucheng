module.exports = {
	presets: [
		'@vue/app'
	],
	//min-ui 按需加载需要使用的
	"plugins": [["component",
		{
			"libraryName": "mint-ui",
			"style": true
		}
	]]
}