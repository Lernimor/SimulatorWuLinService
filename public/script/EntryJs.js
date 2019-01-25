/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */
var whenReady = (function() {               //这个函数返回whenReady()函数
    var funcs = [];             //当获得事件时，要运行的函数
    var ready = false;          //当触发事件处理程序时,切换为true
    
    //当文档就绪时,调用事件处理程序
    function handler(e) {
        if(ready) return;       //确保事件处理程序只完整运行一次
        //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
        if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
            return;
        }
        //运行所有注册函数
        //注意每次都要计算funcs.length
        //以防这些函数的调用可能会导致注册更多的函数
        for(var i=0; i<funcs.length; i++) {
            funcs[i].call(document);
        }
        //事件处理函数完整执行,切换ready状态, 并移除所有函数
        ready = true;
        funcs = null;
    }
    //为接收到的任何事件注册处理程序
    if(document.addEventListener) {
        document.addEventListener('DOMContentLoaded', handler, false);
        document.addEventListener('readystatechange', handler, false);            //IE9+
        window.addEventListener('load', handler, false);
    }else if(document.attachEvent) {
        document.attachEvent('onreadystatechange', handler);
        window.attachEvent('onload', handler);
    }
    //返回whenReady()函数
    return function whenReady(fn) {
        if(ready) { fn.call(document); }
        else { funcs.push(fn); }
    }
})();

function loadPlugin(){
    //loadCss 
    LoadFile.StyleLoader.load("/public/style/common.css");
    LoadFile.StyleLoader.load("/public/style/index.css");
    LoadFile.StyleLoader.load("/public/style/main-panel.css");
    LoadFile.StyleLoader.load("/public/style/vue-components/skill-icon.css");
    LoadFile.StyleLoader.load("/public/style/vue-components/detail-dialog.css");
    LoadFile.StyleLoader.load("/public/style/vue-components/level-scroll.css");
    
    LoadFile.StyleLoader.load("/public/style/OtherPlugin/MsgBox/demo.css");
    LoadFile.StyleLoader.load("/public/style/OtherPlugin/MsgBox/ns-default.css");
    LoadFile.StyleLoader.load("/public/style/OtherPlugin/MsgBox/ns-style-growl.css");

    //load messageBox related
    LoadFile.JsLoader.load("/public/script/OtherPlugin/MsgBox/classie.js", false);
    LoadFile.JsLoader.load("/public/script/OtherPlugin/MsgBox/notificationFx.js", false);
    //load customed component
    LoadFile.JsLoader.load("/public/script/vue-components/skill-icon.js", false);
    LoadFile.JsLoader.load("/public/script/vue-components/detail-dialog.js", false);
    LoadFile.JsLoader.load("/public/script/vue-components/level-scroll.js", false);
    //load main App
    LoadFile.JsLoader.load("/public/script/main.js", false);

    LoadFile.JsLoader.load("/public/script/tools/exportTools.js", false);
}

window.onload = function(){
    createVueApp();
}

window.showMsgDialog = function(message, effect, type, time ){
    let msgArray = message.split('\n');
    let msg = "";
    for (let i in msgArray){
        msg += "<p>"+msgArray[i]+"</p>";
    }
   
    let notification = new NotificationFx({
        message : msg,
        layout : 'growl',
        effect : effect,
        type : type, 
        ttl : time,
        onClose : function() {
        }
    });
    notification.show();
} 

whenReady(loadPlugin);