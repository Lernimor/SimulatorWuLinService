let LoadFile=new Object();
/**
 * 判断浏览器
 */
LoadFile.Browser={   
    ie:/msie/.test(window.navigator.userAgent.toLowerCase()),   
    moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),   
    opera:/opera/.test(window.navigator.userAgent.toLowerCase()),   
    safari:/safari/.test(window.navigator.userAgent.toLowerCase())   
};
/**
 * JsLoader对象用来加载外部的css文件
 */
LoadFile.StyleLoader={
    /**
     * 加载外部的css文件
     * @param sUrl 要加载的css的路径
     * @fCallback js加载完成之后的处理函数
     */
    load:function(sUrl, fCallback){   
        var _link=document.createElement("link"); 
        _link.setAttribute("rel", "stylesheet"); 
        _link.setAttribute("type", "text/css"); 
        _link.setAttribute("href", sUrl); 
        var heads = document.getElementsByTagName("head"); 
        if(heads.length) 
            heads[0].appendChild(_link); 
        else 
            document.documentElement.appendChild(_link); 

        if(LoadFile.Browser.ie){   
            _link.onreadystatechange=function(){   
                if(this.readyState=='loaded'||this.readyStaate=='complete'){ 
                    //fCallback();
                    if(fCallback!=undefined){
                        fCallback(); 
                    }
                     
                }   
            };   
        }else if(LoadFile.Browser.moz){   
            _link.onload=function(){   
                if(fCallback!=undefined){
                    fCallback(); 
                }
            };   
        }else{   
            if(fCallback!=undefined){
                fCallback(); 
            }
        }   
    }
}

/**
 * JsLoader对象用来加载外部的js文件
 */
LoadFile.JsLoader={
    /**
     * 加载外部的js文件
     * @param sUrl 要加载的js的url地址
     * @flag 加载完成后是否需要清除-缓存
     * @fCallback js加载完成之后的处理函数
     */
    load:function(sUrl, flag, fCallback){   
        let _script=document.createElement('script');   
        _script.setAttribute('charset','utf8');   
        _script.setAttribute('type','text/javascript');   
        _script.setAttribute('src',sUrl);   
        document.getElementsByTagName('head')[0].appendChild(_script);   
        if(LoadFile.Browser.ie){   
            _script.onreadystatechange=function(){   
                if(this.readyState=='loaded'||this.readyStaate=='complete'){ 
                    //fCallback();
                    if(fCallback!=undefined){
                        fCallback(); 
                    }
                     
                }   
            };   
        }else if(LoadFile.Browser.moz){   
            _script.onload=function(){   
                if(fCallback!=undefined){
                    fCallback(); 
                }
            };   
        }else{   
            if(fCallback!=undefined){
                fCallback(); 
            }
        }   
        if (flag)
            document.getElementsByTagName('head')[0].removeChild(_script);   
    }
};