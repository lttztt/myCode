# 18/8/28
---
## padStart()，padEnd()

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于补全头部，`padEnd`用于补全尾部。

```javascript
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
```

## layui框架

可以引入layui.all.js直接使用。但这样的体积较大，如果想要模块化的：

```javascript
layui.use(['layer','jquery'], function () {
    var layer = layui.layer;
	var $ = layui.jquery;
	})
```

> 推荐在一个js按需use所用到的模块然后在其中书写的的业务代码。

其中layer 是layui的代表作。也可以单独使用

## 笔记整理问题及纠正：
之前的markdown文件夹中的 命名都是日期 这样做本来是想着尽量每天记录一下
可是这根本没法复习。无法索引到相应的知识点 让之前的记录毫无作用。
> 纠正

把笔记放到一个文件中， 遇到有用的知识点 即刻记下来。一天提交一次以做管理
 
 # 18/8/29

## linux和ssr

ssr 可用教程：
使用`sudo -i`切换到root用户

## 谷歌插件

1. 可以执行脚本的[Tampermonkey](https://sspai.com/post/40485)
2. 换肤插件：stylish

