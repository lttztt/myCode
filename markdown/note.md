# 8/28
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

# 8/30

## linux

less 可翻页的cat

grep 过滤   ps aux | grep node
ls | grep xx 

## 两款markdown软件

1. typora 多平台 
2. MWeb mac收费



# 蔡嘉琳简历
137-xxxx-6136 | caijialinxx@foxmail.com | 深圳
Wechat：137xxxx6136 | Github: https://github.com/Caijialinxx
应届生 | 前端工程师

## 专业技能
- HTML5, CSS3 & JavaScript
    - 能够使用原生 JavaScript 独立制作精美网页
    - 掌握 HTML5 语义化标签如 canvas 、 nav 及 WebStorage API 等
    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术
- React & React Native
    - 有 React 的开发经历，理解 JSX 、组件、 props 、 state 及生命周期等
    - 有 React Native 移动端开发的经历，掌握原生 UI 组件、 React Navigation 、动画等 API 的使用
- 移动端开发
    - 会使用 REM 、 vw / vh 、 媒体查询等技术制作适配手机设备的页面
- Node.js
    - 搭配 Express 和 Socket.IO 开发在线聊天室，并已将项目部署上线
- Webpack
    - 有使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 file-loader 等
- 其他
    - 掌握 JQuery 的使用
    - 掌握 Scss 、 Less 的使用
    - 理解 MVC 、 MVVM 思想
    - 掌握 HTTP 基础

## 项目经验
### 简历生成器
- 关键词：\`JavaScript\`、\`CSS3\`、\`Promise\`、\`Markdown\`
- 源码链接：https://github.com/Caijialinxx/animating-resume/blob/master/main.js
- 预览链接：https://caijialinxx.github.io/animating-resume/
- 描述：该项目实现了一个 Markdown 简历的制作过程，在原生 JS 中使用 Promise 处理异步操作，利用 CSS3 实现过渡、动画、阴影和弹性布局等。

### 极简清单
- 关键词：\`React\`、\`React Native\`、\`组件化思想\`、\`3D 转换\`、\`动画\`、\`渐变\`、\`内外阴影\`
- 源码链接：[PC 端源码(React)](https://github.com/Caijialinxx/todo-react) [移动端源码(React Native)](https://github.com/Caijialinxx/todo-mobile)
- 预览链接：[PC 端预览(React)](https://caijialinxx.github.io/todo-react/build/) [移动端预览(React Native)](https://expo.io/@caijialinxx/ToDo)
- 描述：该项目由个人独立开发，功能有用户登录/注册、待办的添加/删除/标记完成状态。其中 PC 端还实现了移动待办、更换背景的功能，更换背景的按钮使用 3D 转换、动画、渐变和盒阴影等；移动端实现了顶部导航随键盘行为和滚动行为而缩放的功能。

### 彩色涂鸦
- 关键词：\`HTML5\`、\`Canvas\`、\`ES6\`、\`JavaScript\`
- 源码链接：https://github.com/Caijialinxx/Canvas/blob/master/main.js
- 预览链接：https://caijialinxx.github.io/Canvas/
- 描述：使用 HTML5 的 Canvas 元素及其相关 API ，实现支持多指同时画图（可选色/粗细）、橡皮擦、一键清空、保存至本地的功能。

### 幻灯片放映室
- 关键词：\`jQuery\`、\`Loop模式\`、\`缩略图模式\`、\`Rem\`、\`适配移动端\`、\`ES6\`
- 源码链接：https://github.com/Caijialinxx/Slides/blob/master/main.js
- 预览链接：https://caijialinxx.github.io/Slides/
- 描述：本项目展示了两种不同风格的轮播，功能有上一张、下一张、可点击的原点/缩略图导航、自动循环播放。使用了 Rem 单位，以及适配移动端。

### 炫主页
- 关键词：\`jQuery\`、\`CSS3 过渡动画\`、\`组件化思想\`、\`MVC 思想\`、\`媒体查询\`
- 源码链接：https://github.com/Caijialinxx/resume
- 预览链接：https://caijialinxx.github.io/resume/
- 描述：此项目是本人的一个信息介绍页，包含基础信息、技能、项目展示以及留言板功能。有大量精美的动画，例如滚动时的导航栏及模块的浮起、导航栏 hover 动画、响应式设计等。

### 壹号聊天室
- 关键词：\`Node.js\`、\`Socket.IO\`、\`Express\`
- 源码链接：https://github.com/Caijialinxx/IMsystem
- 预览链接：https://arcane-mountain-17783.herokuapp.com/
- 描述：该项目后端使用 Node.js 实现一个在线聊天室，有登录、添加好友、单聊/群聊、发送消息（文本/表情/文件）等功能。使用 Express 实现路由功能，由个人独立开发，已部署到 Heroku 上。

## 教育经历
### 广东第二师范学院
2014/9 - 2018/6
- 专业学历：计算机科学与技术 大学本科
- GPA：3.6 / 4.0
- 荣誉：校二、三奖学金、优秀学生（2014-2015、2016-2017共两学年）、优秀学生干部（2014-2015、2016-2017共两学年）
- 相关课程：网络应用开发（PHP）、数据结构与算法、数据库系统原理、计算机网络等

## 8/31

## EventHub 

**方方**

```javascript
class EventHub {
        constructor() {
            this.events = {}
        }
        on(eventName, fn) {
            if (!this.events[eventName]) {
                this.events[eventName] = []
            }
            this.events[eventName].push(fn)
        }
        emit(eventName, params) {
            let fnList = this.events[eventName]
            fnList.map((fn) => {
                fn.apply(null, params)
            })
        }
        off(eventName, fn) {
            let fnList = this.events[eventName]
            for (let i = 0; i < fnList.length; i++) {
                if (fnList[i] === fn) {
                    delete fnList[i]
                    break
                }
            }
        }
    }
    var event = new EventHub();
    $('#app').on('click',function(){
        event.emit('test');
    })
    event.on('test',()=>{			
        console.log('触发了');
    })
```



## javascript碎知识



**数组的空位**

1. 数组的空位会反映在`length`属性，也就是说空位有自己的位置，但是这个位置的值是未定义，即这个值是不存在的。如果一定要读取，结果就是`undefined`
2. `undefined`在JavaScript语言中表示不存在
3. 这就解释了为什么`in`运算符、数组的`hasOwnProperty`方法、`Object.keys`方法，都取不到空位的属性名。因为这个属性名根本就不存在，规格里面没说要为空位分配属性名(位置索引），只说要为下一个元素的位置索引加1。

## css小效果

```css
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
```

可以制作出多层底纹的效果。如下：

![](E:\liuzhe\git\myCode\markdown\document\multiBoxshadow.png)

## leancloud

通过别人的项目实战了解： [react 代办清单](https://github.com/Caijialinxx/todo-react/)

# 9/3

## 片段

好看的颜色：#E5302F

<div style="width:50px;height:20px;background: #E5302F"></div>

[web安全色](http://www.bootcss.com/p/websafecolors/)



## 什么是vue的运行时版本和vue-cli生成的有什么区别



- proposal-object-rest-spread [es6对象展开运算符](https://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread/)

# 9-4

## 网站和资源

- JetBrains 系列软件汉化包 [TranslatorX](https://github.com/pingfangx/TranslatorX)

- webStorm 破解 [激活码和补丁](http://idea.lanyus.com/) 和  [参考CSDN](https://blog.csdn.net/voke_/article/details/76418116)

  > `用补丁在bin/WebStorm.exe.vmoptions和WebStorm.exe.vmoptions文件最后加入`

  - `-javaagent:D:/Program Files (x86)/JetBrains/WebStorm/bin/破解补丁名字.jar`
  - 保存后打开webstorm选择`**activation code**` 输入刚才的这句
  - 破解完成

## 番薯问题解决

### 新版的 element-ui的 select组件 如果传入的是一个对象的话。需要给select 加一个value-key绑定一个唯一的值



## 9/5

### 键盘圈4大神器

1. 赛睿7g黑轴
2. Das MolelS 青轴
3. cherry3494 红轴
4. Filco 茶轴

### 实质上任何在回调函数中进行的状态的改变都是不可追踪的。



## 9/6

### element-ui中el-input添加 `.enter`修饰符不生效

**解决**：给后面加上`.native`

