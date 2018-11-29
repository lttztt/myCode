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



## 9/7

### emacs



### 哔哩哔哩视频下载

在视频页的 地址栏 www.bilibili.com 改为 www.bilibilijj.com

实际上是 [jj下载](http://client.jijidown.com/)

### telegram

**贴吧两个代理**

```
tg://proxy?server=45.77.97.94&port=400&secret=5788c35845a9d6c9e8a0db182c60765e
tg://proxy?server=74.120.175.43&port=400&secret=bbd3d8c677df2c657bed1a1094a7e75a
```

**简书两个代理**

```
https://t.me/proxy?server=lancitou.net&port=9527&secret=de731d1e955150d03ae40579efdfb3a3
tg://proxy?server=lancitou.net&port=9527&secret=de731d1e955150d03ae40579efdfb3a3

作者：yestyle
链接：https://www.jianshu.com/p/d40209b94586
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
```

### 自己vps配置

f6f7e5c619afc273a222eda1d78d98bf

./mtproto-proxy -u nobody -p 8888 -H 443 -S f6f7e5cnobody afc273a222eda1d78d98bf --aes-pwd proxy-secret proxy-multi.conf -M 0 &



## 9/8

### 单词

1. draft: 草稿
2. subtitle: 副标题
3. front-matter: 前页
4. scaffold: 脚手架、模板

### hexo

**扁平化theme**

Powered by [Hexo](https://hexo.io/) Theme - [Material](https://github.com/viosey/hexo-theme-material)



**适合书写**

[Hexo](http://hexo.io/) Theme [Yilia](https://github.com/litten/hexo-theme-yilia) by Litten



### techmessage的macos教学

## 9-10

apprise 弹出插件

## 9-11

### gitHub的API

1. 获取用户的点赞 `https://api.github.com/users/liuzheGit/starred`



## svg图

[simpleIcons](https://simpleicons.org/)

## 9-13

### svg-symbol (用到了svg的use和阿里图标)
找到了直接生成svg的雪碧图js.[Iconfont帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code)
用Iconfont的矢量图标。把要使用的图标添加到一个项目中。
然后生成symbol代码：如:`//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js`
用的时候分三步：
1. 直接引入（注意前面加https:）这个js文件
2. 引入通用的css 代码
```css
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
```

3. 用相应图标的id名加到href中:
```js
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-xxx"></use>
</svg>
```
这样就可以使用多色的icon了，还可以自己调整大小，而且引入的文件还很少，简直太好用了。


### vim学习
学习 vim 并且其会成为你最后一个使用的文本编辑器。没有比这个更好的文本编辑器了，非常地难学，但是却不可思议地好用。

## 基本用法

**移动:**
hjkl: 分别对应左下上右

** 切换操作模式**
要始终记得按`esc`来退回Normal模式,已下要说的前提都是在Normal模式开始。

按esc键 → Normal模式，在VIM的Normal模式下，所有的键就是功能键了。

i → insrt模式，相当于其他编辑器正常的输入模式。

: → 后面接命令，进入vim的命令模式。

:! → 调用外部的命令行。

→ 注: 凡是`:`开始的命令你需要输入`<enter>`回车来结束（执行）

## 需要记忆的知识点

**插入**

a → 光标后插入
o → 当前行后插入一行
O → 当前行前插入一行
cw → 替换从光标位置到单词结尾的字符

**位移动**

0 → 到行头
^ → 和0差不多，到本行第一个不是blank字符的位置（blank: 空格、tab、换行、回车等看不见的字符）
$ → 到行尾
g下换线 → 到本行最后一个不是blank字符的位置

**单词间移动**
w → 到下一个单词的开头。
e → 到下一个单词的结尾。

**块内移动**
% : 匹配括号移动，包括 (, {,[

* 和 #:  全局匹配光标当前所在的单词，移动光标到下一个（或上一个）匹配单词（*是下一个，#是上一个)
***
**行移动**
NG → 到第 N 行
gg → 到第一行
G → 到最后一行

**搜索**

/pattern → 搜索`pattern`的字符，如果有多个在enter后 按n 向后，N 先前。

**撤销和取消撤销**

u → undo
<C-r> → redo

**打开/保存/退出/改变文件**
:e <path/to/file> → 打开一个文件
:x/ZZ/:wq → 都是保存并退出
:bn和: bp → 当有多个文件打开时，可以切换 n 是next p是previous

**重复**
. → 重复上一次的命令
N<command> → 重复某个命令N次

如：
2dd → 删除2行
3p → 粘贴文本3次
接着上次按 . 可以再次粘贴文本3次，
但是 3. 则是粘贴文本3次而不是9次

##  Vim 超能力

fa → 到下一个为a的字符处，你也可以fs到下一个为s的字符。
t, → 到逗号前的第一个字符。逗号可以变成其它字符。
3fa → 在当前行查找第三个出现的a。
F 和 T → 和 f 和 t 一样，只不过是相反方向。
dt" → 删除所有的内容，直到遇到双引号—— "。



## visual模式下的操作
> 可视选择模式。此时可用hjkl 移动

**选择后的操作**
d → (删除 )
gU → (变大写)
gu → (变小写)
J → 把所有的行连接起来（变成一行）
< 或 > → 左右缩进
= → 自动给缩进

**visual模式的命令**
<action>a<object> 和 <action>i<object>  v模式的命令
action可以是任何的命令，如 d (删除), y (拷贝), v (可以视模式选择)。
object 可能是： w 一个单词， W 一个以空格为分隔的单词， s 一个句字， p 一个段落。也可以是一个特别的字符："、 '、 )、 }、 ]。

假设你有一个字符串 (map (+) ("foo")).而光标键在第一个 o 的位置。

```
vi" → 会选择 foo.
va" → 会选择 "foo".
vi) → 会选择 "foo".
va) → 会选择("foo").
v2i) → 会选择 map (+) ("foo")
v2a) → 会选择 (map (+) ("foo"))
```

**块操作: <C-v>**
块操作，典型的操作： 0 <C-v> <C-d> I-- [ESC]

^ → 到行头
<C-v> → 开始块操作
<C-d> → 向下移动 (你也可以使用hjkl来移动光标，或是使用%，或是别的)
I-- [ESC] → I是插入，插入“--”，按ESC键来为每一行生效。

## 分屏

:vs 水平分屏
:sv 垂直分屏
<C-w>w 顺序切换
<C-w><dir> : dir就是方向，可以是 hjkl 或是 ←↓↑→ 中的一个，其用来切换分屏。
<C-w>_ (或 <C-w>|) : 最大化尺寸 (<C-w>| 垂直分屏)
<C-w>+ (或 <C-w>-) : 增加尺寸

**启动时分屏**

使用大写的O参数来垂直分屏。
`vim -On file1 file2 ...`
> 使用小写的o参数来水平分屏。n 代表分几屏
**关闭分屏**
Ctrl+W c

## 自动提示  <C-n> 和 <C-p>

在 Insert 模式下，你可以输入一个词的开头，然后按 <C-p>或是<C-n>，自动补齐功能就出现了……



## 其他
ye 当前位置拷贝到本单词的最后一个字符。
y2/foo 来拷贝2个 “foo” 之间的字符串。



### vim 插件by FrankFang
- Shutnik/jshint2.vim - 用于[JSHint](http://jshint.com/)集成的轻量级，可定制且功能强大的Vim插件。

- rhysd/committia.vim - 可以更好地编辑提交消息（git）

- dbakker/vim-projectroot - 找出文件属于哪个项目，在脚本/映射中易于使用

- posva/vim-vue - 语法高亮显示Vue.js组件

- mhinz/vim-startify - Vim的花哨启动屏幕。

- mxw/vim-jsx - 为vim反应JSX语法高亮和缩进。

- Yggdroot/indentLine - 用于显示带有细垂直线的缩进级别

- vim-scripts/vim-auto-save - 自动将更改保存到磁盘

- jiangmiao/auto-pairs - 插入或删除括号，parens，引号对

- othree/html5.vim - HTML5 +内联SVG omnicomplete函数，缩进和Vim的语法

- vimoutliner/vimoutliner -

  ```
  VimOutliner是一款具有许多相同功能的轮廓处理器
  如Grandview，More，Thinktank，Ecco等。功能包括树
  展开/折叠，树木升级/降级，水平敏感的颜色，
  内线链接和正文。
  ```

- junegunn/fzf.vim  - vim中用fzf

  ```bash
  Plug 'junegunn/fzf.vim'
  Plug 'tpope/vim-repeat'
  ```

- vim-airline/vim-airline - （底部状态美化）精简和平均状态/标签为vim，轻如空气

  ```bash
  Plug 'vim-airline/vim-airline'
  Plug 'vim-airline/vim-airline-themes'
  ```

- wting/gitsessions.vim - 基于目录和git分支自动保存/加载vim会话。

- godlygeek/tabular - 用于文本过滤和对齐的Vim脚本

- plasticboy/vim-markdown -

- reedes/vim-colors-pencil - 浅色（和深色）配色方案

- xolox/vim-misc - 杂项自动加载Vim脚本

- hail2u/vim-css3-syntax - CSS3语法（以及一些国外规范中定义的语法）支持Vim的内置语法/ css.vim

- groenewege/vim-less - LESS的vim语法（动态CSS）

- mikewest/vimroom - 在Vim中模拟一个模糊的WriteRoom环境。

- sjl/gundo.vim - 可以显示您的Vim撤消树。

- altercation/vim-colors-solarized - Solarized主题

- ervandew/supertab - 使用Tab执行所有vim插入模式完成

- pangloss/vim-javascript - 在Vim中大大改进了Javascript缩进和语法支持。

- ctrlpvim/ctrlp.vim - 文件，缓冲区，mru，tag等查找器的活动分叉。

- romainl/flattened - vim配色

- scrooloose/nerdcommenter - 快速注释代码

- scrooloose/nerdtree -  vim的树资源管理器插件。

- Xuyuanp/nerdtree-git-plugin - 一个显示git状态的NERDTree插件

- airblade/vim-rooter - 将Vim工作目录更改为项目根目录（由已知目录或文件的存在标识）。

- vim-scripts/gitignore

- elzr/vim-json - im的更好的JSON：关键字与值的明确突出显示，JSON特定（非JS）警告，引用隐藏

# 9-14

### js之iframe子页面与父页面通信

### 一、同源下的父子页面

**方法调用**

父页面调用子页面方法：FrameName.window.childMethod();

子页面调用父页面方法：parent.window.parentMethod();

**DOM元素访问**

获取到页面的window.document对象后，即可访问DOM元素

**注意事项**

要确保在iframe加载完成后再进行操作，如果iframe还未加载完成就开始调用里面的方法或变量，会产生错误。判断iframe是否加载完成有两种方法：

1. iframe上用onload事件

2. 用document.readyState=="complete"来判断

### 二、跨域父子页面

**父页面向子页面传递数据**

实现的技巧是利用location对象的hash值，通过它传递通信数据。在父页面设置iframe的src后面多加个data字符串，然后在子页面中通过某种方式能即时的获取到这儿的data就可以了，例如：

1. 在子页面中通过setInterval方法设置定时器，监听location.href的变化即可获得上面的data信息

2. 然后子页面根据这个data信息进行相应的逻辑处理

**子页面向父页面传递数据**

实现技巧就是利用一个代理iframe，它嵌入到子页面中，并且和父页面必须保持是同域，然后通过它充分利用上面第一种通信方式的实现原理就把子页面的数据传递给代理iframe，然后由于代理的iframe和主页面是同域的，所以主页面就可以利用同域的方式获取到这些数据。使用 window.top或者window.parent.parent获取浏览器最顶层window对象的引用。

## 9-17

1. [应用的介绍库](https://introjs.com/) - 使用动画来一步步引导用户熟悉网站功能

## 9-18

### sublime text3 中Mac下ctrl+e的功能被emmet覆盖。



因为已经习惯ctrl+e快捷键跳转到行尾的功能，所以需要自定义快捷键。

> 自定义的原理是，用一个命令去覆盖emmet的快捷键ctrl+e的自动补全功能，再把ctrl+e快键键设置成mac原有的跳转到行尾的功能。

**找到sublime text -> Perferences -> Package Settings -> Emmet -> Key Bindings-User**

添加代码：

```
[
    {
        "keys": [
            "super+j"
        ],
        "args": {
            "action": "expand_abbreviation"
        },
        "command": "run_emmet_action",
        "context": [
            {
                "key": "emmet_action_enabled.expand_abbreviation"
            }
        ]
    },
    {
        "keys": [
            "ctrl+e"
        ],
        "command": "move_to",
        "args": {"to": "eol", "extend": false}
    }
]
```
## 9-23

### 再学CSS
# css

## CSS盒模型中的`box-sizing`

`box-sizing`:的值默认为content-box；这个时候如果border/padding变大 就会撑大内容；

例如：如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。

设为：`border-box`后，css中如何设置内容区(width,height)的大小，最终就多大。



## background-clip

> 设置元素的背景（背景图片或颜色）是否延伸到边框下面。

默认值： border-box 。背景延伸到边框外沿（但是在边框之下）。

padding-box : 边框下没有背景，背景延伸到内边距的外沿。无padding的时候和content-box效果一样。

content-box： 背景裁剪到内容区 (`content-box) `外沿。



## background-attachment

> 如果指定了background-image，那么`bakcground-attachment` 决定背景是在视口中固定的还是虽包含他的区块滚动的。

scroll : 初始值。背景相对于视口固定，而不是随着它的内容滚动。

fixed: 背景相对于视口固定。 即使一个元素可以滚动，背景也不会随着元素的内容滚动。

local： 背景相对于视口固定。如果元素可以滚动，背景也不会随着元素的内容滚动。但是如果内容可滚动，则背景会随着内容的滚动而滚动。



## background-orgin

> 指定背景图片的原点位置的背景相对区域。
>
> 注意：当使用 [`background-attachment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment) 为fixed时，该属性将被忽略不起作用。

border-box: 默认值。 背景图片的摆放以border区域为参考。

padding-box: 背景图片的摆放以padding区域为参考。

content-box: 背景图片的摆放以content区域为参考。



## background-position

> 指定背景图片的初始位置 。 相对于background-origin来说

取值：

关键字： top、button、left、right、center

百分之值：25% 75%

尺寸值：0 0;  1cm 2cm; 10ch 8em;...

多个背景（逗号分隔）: 0 0, center；

距离边界的偏移： bottom 10px right 20px;



## background-size

> 设置背景图片大小。图片可以保持原有尺寸或拉伸到新的尺寸，亦或者在保持原有比例的同时缩放到元素的可用空间的尺寸.

关键字： cover contain

cover:  缩放背景图片以完全覆盖背景区（背景图可能显示不全）

contain：缩放背景图片以完全装入背景区，可能背景区部分空白。（可能背景区部分空白）

一个值： 50%、3em、12px、auto ： 指定图片的宽度，高度隐式的为auto

两个值： 50% auto; 第一个是宽度，第二个是高度。

多背景：20%,50% 50%; 用逗号分隔。

> 注意： 其中数值如果是百分比的时候：指定背景图片相对于背景区的百分比。

## border-style

可以设置多个，对应 top right bottom left;

可用值：

hidden：不显示边框、优先级最高。

none：不显示边框、优先级最低。如果有其他重叠边框，则会显示那个。

dotted：一系列圆点。

solid：实线。

double：双实线。

groove：有雕刻效果的边框。

ridge：有浮雕效果的边框。

inset： 显示有陷入效果。

outset： 显示有突出效果。



## border-image

>  可以用图片也可以用渐变。

语法：

` border-image: image-source image-height image-width image-repeat `

Image-source: 图片源。 路径或是渐变`linear-gradient(red, yellow)`

image-height：图片源的高度

image-repeat：重复

## 9-25

1. 之前用过的一个UI库 : [materialize](https://materializecss.com/)
## CSS 深入浅出

1. 永远不要定父级的高度。用padding撑
2. outline 是不占位的。


### CSS的宽度和高度
**文档流（Normal Flow） 普通流 常规流**
​    内联元素的宽高
​    块级元素的宽高
​    水平居中
​    垂直居中
​    文字溢出省略（多行）
**盒模型**
​    一比一的 div
​    outline
​    border 调试大法
### 总结
1. 如果div中只有内联元素。那么它的高度是内联元素的行高。（字体默认行高 是字体设计者确定的）
2. &nbsp； --no break space; 不换行的空格
3. text-align: justify ? 在多行中 行首和行尾对齐
4. html解析代码时会把内联元素之内的显示 之外的不显示
5. inline元素之间用空格或回车 则他们之间会显示间隙
6. css的调试是加border
7. word-break: break-all; 只要到行尾就断开
8. div的宽度不是由文字决定的
9. margin能不能使父元素变高取决于margin有没有被东西包着(如： border、padding、overflow：hidden)
10. margin合并
11. overflow：hidden； 不到万不得已，不要用；

div的高度是由它内部的文档流中元素的总和决定的。
**文档流**：其实是叫普通流（normal-flow）元素按照其在HTML中的位置顺序决定排布过程。
内联元素从左到右 ，块级元素从上到下,只要不是float和绝对定位的，都在普通流中。

脱离文档流：就是计算高度不叫我。
相对定位： 计算高度计算他。
内联元素的margin和padding会影响父级的宽度，但不会影响高度。
1个1：1的div用 ： padding-top: 100%;




中文字的对齐：
![](media/15378384261294/15378408191332.jpg)

清楚浮动
![](media/15378384261294/15378410630358.jpg)

    ### 堆叠上下文
    学会 调试（实验） text-indent/ margin: -5px;
    ![](media/15378384261294/15378500552333.jpg)

### icon
sprites 精灵图
1. 把ps中的单个图层导出为PNG。
2. 如果是PNG，扣图是用选择工具选中然后右键copy；
3. html 实体编号entity；

### 移动端

用 @media，一个条件是一个括号
```css
@media (max-width: 320px) { /* 0-320px */
    ...
}

@media (min-width: 321px) and (max-width: 375px) { /*321px - 275px*/
    ...
}
```

@media 可以作用到css文件上 如： `<link rel="stylesheet" media="only screen and (max-width:320px)">`

mobile first 移动优先

classList.toggle('active') 原生的toggle class

980px 是业界 移动端模拟pc的大小。

### 移动端滑动
[jquery模拟的](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin)，vue 也有对应的。
移动端是没有滚动条的，他有的是位置指示器。


## 9-26

### zsh技巧
1. zsh的`d`命令可以列出这个会话中访问的目录，然后输入对应的编号即可进入。
2. 直接输入当前目录下的目录即可进入，甚至不需要cd。输入.. 也可是返回上一级目录。


### 书籍
1. MacTalk 池建强

### html css

1. emmet的移动端的meta快捷键： meta:vp
2. calc属性中如果用`-`或`+`号，必须前后添加空格，`*`和`/`可以不加，但是建议都加上。前缀:
```css
.elm {
	/*Firefox*/
	-moz-calc(expression);
	/*chrome safari*/
	-webkit-calc(expression);
	/*Standard */
	calc();
 }
```

### shell 命令
1. tree . ?

## 9-27

1.js.bin的fake百度 http://js.jirengu.com/rovas/8/edit
 学到用flex来做布局，classList的用法。

2.js.bin的图片上传美化 http://js.jirengu.com/gazag/3/edit

3.js.bin的按钮涟漪效果 http://js.jirengu.com/wivux/2/edit
给一个元素的css加上`pointer-events:none`那么它将不会响应任何的鼠标点击事件，被穿透了一样。
ontransitionend事件是在动画结束后的监听事件。

## 9-30

## 我的配置习惯

1. 在`~/`目录配置 `~/repos` 文件库



## 10-8

### good word

Learn something of everything, Learn everything of something.

积少成多

**git**

本地git项目和github代码建立关系

```bash
git remote add ortgin xxx/xxx.git
git push -u origin master
```

## 10-10

**js的lastIndexOf**

> 返回一个字符串指定字符串值最后出现的位置，从后向前搜索。
>
> 如果没有出现，则返回`-1`

**js的substr**

> 返回一个字符串从指定位置到 `提取的字符个数` 的子字符串。首位从0开始，可接受负数。
>
> 负数是从后往前数。但还是向后截取。

**js的substring**

> 返回一个字符串从开始索引值到结束索引值的子字符串(不含此位)，或者不传第二个参数（到末尾），不接受负数。

## 10-11

###虎牙lol赛事答题api

- https://activity.huya.com/faithbadge/cache.php?callback=getQuestionsList&m=FaithBadgeApi&do=getQuestionsList&pid=1346609715

### git常用命令复习

**恢复暂存区的所有文件到工作区**

> git checkout .

**重置暂存区和工作区的所有变动,到上一次commmit**

> git reset --hard





## 10-15

### es6的对象

**es5的对象**

直接在字面量中声名属性, key 不能用变量, 因为他会直接被解析为字符串.

所以要用必须:  先声明 后添加属性

```js
//错误示范
var name = 'a';
var object = {name: 1};
object // {name: 1}

// 正确的
var name = 'a';
var object = {};
object[name] = 1;
object // {a: 1}
```

**es6 动态属性名**

```js
var name = 'a';
var object = { [name]: 1};
objecct // {a: 1}
```

其中`[name]`中可以用运算符等等.

js中对象的key可以不加引号是一个巨坑, 而JSON则剔除了它的坑

### 浅拷贝

```js
var obj = {a: 1, b: 2, c: 3};

// 方法一  用for循环赋值
var newObj = {};
for(let key in obj){
    newObj[key] = obj[key]
}

// 方法二 Object.assign
var newObj = Object.assign({}, obj);

// 方法三  ...运算符
var newObj = {...obj}

```



### undefined 是一个只读的变量


## 学习套路 copy run modify (CRM)

## 10-17

### 好看的loading动画js.**bin**



## 10-18

### 我的博客

1. 更改了主题
2. 在theme的fexo的layout的post中添加了 网易音乐播放器 和 点击出现心的动态效果.



### 大牛

- [孟坤](https://mkblog.cn/)
  - [孟坤编程笔记](http://lab.mkblog.cn/learnweb/)
  - [孟坤实验室](http://lab.mkblog.cn/)



### 工具

1. [H5 播放器](https://github.com/Wayou/HTML5_Audio_Visualizer)
2. [十款精心挑选的在线CSS3代码生成工具](http://www.chinaz.com/free/2012/0928/276927.shtml)
3. [可以学习的效果网址](http://lab.mkblog.cn/mouse_hover/)
4.


## 10-22

### BOM api
writeln: 向文档中写入一串文本,并紧跟着一个换行符.

### 一个jquery的form提交插件[jquery.form](https://github.com/jquery-form/form)

### 乔布斯2015演讲
 - Stay Hungry Stay Follish

### 添加~/.lz 来储存我的小本本

### 一个简单的REST API 的库 [json-server](https://www.npmjs.com/package/json-server)
特性: 可以解析json文件,然后开启服务做自己本地的接口测试

## 10-29

### 页面中跳转到另一个页面提示与其qq交谈, 是一个qq推广的服务;[地址](http://shang.qq.com/v3/index.html)

### css技巧
- 把页面中的a链接加上`outline: none`

## 11-12

- 用nodejs的express配合heroku搭建一个在线部署的接口, 可以上传图片 接口: https://upload-1.herokuapp.com/
  - [github](https://github.com/liuzheGit/server-herku)

- 发现了一特别好的图片资源地[picsum](https://picsum.photos/)
  - 加上后缀 图片尺寸, 直接返回相应的美图

- 一个轮播插件 [vegas](https://github.com/jaysalvat/vegas)
- 在服务器上使用forever来维持,退出服务器依然可以访问接口

## 11-13
- 发现一个数据api服务[rap](http://rapapi.org/platform/home.do)

## 11-15
- 用了方方老师的dot-file, 有一个zsh的[框架](https://github.com/sorin-ionescu/prezto)
- 用了命令行的git conifg 没有了, zsh的主题没有生效

## 11- 26

- npm 中 移除npm -D 和-S 安装的 都用 `npm unstall package-name`
- js的坑, return后面不用括号 会返回`undefined`
- 把全局安装的`babel-cli`卸载了,以后要用就用`npm install --save-dev babel-cli`

- Gitbook 开源markdown转html
- 一个动态生成图片的网站 [dummyimage](https://dummyimage.com/)
- 安利一各种格式转gif的在线工具 [ezgif](https://ezgif.com/) 













