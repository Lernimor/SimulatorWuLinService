function getProfessionJson(fun) { 
    let list = {
        "qh" : {
            "name" : "枪豪",
            "type" : "qh",
            "icondef" : "/public/file/img/main/qh.png",
            "icon" : "/public/file/img/main/xiuluo.png",
            "list" : {
                "dj":{
                    "name" :"刀君",
                    "type" : "dj",
                    "icon" : "/public/file/img/main/icon/dj.png",
                    "p-type" : "qh"
                },
                "js":{
                    "name" :"戟神",
                    "type" : "js",
                    "icon" : "/public/file/img/main/icon/qs.png",
                    "p-type" : "qh"
                },
                "xl":{
                    "name" :"修罗",
                    "type" : "xl",
                    "icon" : "/public/file/img/main/icon/xl.png",
                    "p-type" : "qh"
                }
            }
        },
        "jk" : {
            "name" : "剑客",
            "type" : "jk",
            "icondef" : "/public/file/img/main/jk.png",
            "icon" : "/public/file/img/main/tianjian.png",
            "list" : {
                "tj":{
                    "name" :"天剑",
                    "type" : "tj",
                    "icon" : "/public/file/img/main/icon/tj.png",
                    "p-type" : "jk"
                },
                "js1":{
                    "name" :"剑圣",
                    "type" : "js1",
                    "icon" : "/public/file/img/main/icon/js.png",
                    "p-type" : "jk"
                },
                "xh":{
                    "name" :"邪皇",
                    "type" : "xh",
                    "icon" : "/public/file/img/main/icon/xh.png",
                    "p-type" : "jk"
                }
            }
        },
        "ss" : {
            "name" : "术士",
            "type" : "ss",
            "icondef" : "/public/file/img/main/ss.png",
            "icon" : "/public/file/img/main/mozun.png",
            "list" : {
                "ts":{
                    "name" :"天师",
                    "type" : "ts",
                    "icon" : "/public/file/img/main/icon/ts.png",
                    "p-type" : "ss"
                },
                "gw":{
                    "name" :"蛊王",
                    "type" : "gw",
                    "icon" : "/public/file/img/main/icon/gw.png",
                    "p-type" : "ss"
                },
                "mz":{
                    "name" :"魔尊",
                    "type" : "mz",
                    "icon" : "/public/file/img/main/icon/mz.png",
                    "p-type" : "ss"
                }
            }
        },
        "ys" : {
            "name" : "医生",
            "type" : "ys",
            "icondef" : "/public/file/img/main/ys.png",
            "icon" : "/public/file/img/main/mingwang.png",
            "list" : {
                "yx":{
                    "name" :"医仙",
                    "type" : "yx",
                    "icon" : "/public/file/img/main/icon/yx.png",
                    "p-type" : "ys"
                },
                "ss1":{
                    "name" :"神算",
                    "type" : "ss1",
                    "icon" : "/public/file/img/main/icon/ss.png",
                    "p-type" : "ys"
                },
                "mw":{
                    "name" :"明王",
                    "type" : "mw",
                    "icon" : "/public/file/img/main/icon/mw.png",
                    "p-type" : "ys"
                }
            }
        }
    };
    fun(list);
}