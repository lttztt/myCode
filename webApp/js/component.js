// by LiuZhe in 2018/7/6
class Dialog{
    constructor(options){
        this.options = options
        this.init()
    }
    
    init(){
        let {title, content, buttons} = this.options;

        if(title == undefined){
            title = '提示'
        }
        var template = `
        
        <div class="dialog-oy">
            <div class="dialog-oy-wrap">
               <div class="dialog-oy-header">${title}</div>
                <div class="dialog-oy-main">${content}</div>
                <div class="dialog-oy-footer"></div> 
            </div>   
        </div>
        `
        var $dialog = $(template);

        if(buttons !== undefined){
            let $buttons = buttons.map((buttonOption) =>{
                let $b = $('<button></button>');
                $b.text(buttonOption.text);
                $b.on('click',buttonOption.action)
                return $b
            })
    
            $dialog.find('.dialog-oy-footer').append($buttons);
        }else{
            let $button = $('<button>确定了</button>');
            $button.on('click',function(){
                $(this).parents('.dialog-oy').detach();
            });
            $dialog.find('.dialog-oy-footer').append($button);
        }

        this.$dialog = $dialog;
        
    }
    open(){
        $('body').append(this.$dialog)
    }
    close(){
        this.$dialog.detach();
    }
}
// 简洁版的dialog组件 只需传入一个提示内容
function Dialog2(text) {
    this.oButton = null;
    this.oDiv = null;
    this.text = text;
    this.template = `<div class="popup_box" style="display: block;">
        <div class="public_popup">
            <h1 class="popup_h1">
                <span>温馨提示</span>
                <i class="iconfont"></i>
            </h1>
            <div class="popup_nav">
                <p>${this.text}</p>
            </div>
            <a href="javascript:void(0)" class="buttonName">确认</a>
        </div>
    </div>`;
    this.init();
    this.open();
}

Dialog2.prototype.init = function () {
    this.oDiv = $(this.template);
    this.oButton = this.oDiv.find('.buttonName, .iconfont');
    var that = this;
    // es6 写法
    // this.oButton.on('click', () => {
    //     this.oDiv.detach();
    // })
    this.oButton.on('click',function(){
        that.oDiv.detach();
    })
}
Dialog2.prototype.open = function () {
    this.oDiv.appendTo('body');
}