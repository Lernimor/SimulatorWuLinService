let createVueApp = function(){
    let app = new Vue({
        el : "#app",
        data : function (){
            return {
                roleLevel : 1,
                levelState : 0,// 0-新手，1-涅槃
                usedPoint : 0,
                jnRadius : 50,
                pages : {},
                selProModel : {},
                selType : '',
                activeList : [],
                professionList : {},
                customedSkillMap : {}
            }
        },
        computed: {
            lavePoint : function(){
                let num = parseInt(this.roleLevel);
                if (!num || num < 0)
                    num = 0;
                else if (this.roleLevel > 150){
                    num = 150;
                }
                num = this.levelState == 1 ? num + 112 : num ;
                return (num - parseInt(this.usedPoint));
            }
        },
        watch: {
            roleLevel (nv){
                if (nv < 0){
                    this.roleLevel = nv = parseInt(0);
                }
                if (nv > 150){
                    this.roleLevel = nv = parseInt(150);
                }
            },
            levelState : function(val) {
                if (val == 1 && this.roleLevel < 50){
                    this.roleLevel = 50;
                }
            },
            lavePoint : function (val){
                if (!this.roleLevel || this.roleLevel == "")
                    return;
                if (val < 0)
                    window.showMsgDialog("可用技能点不足，请修改等级",'jelly','error',5000);
            }
        },
        created() {
            let v = this;
            LoadFile.JsLoader.load("/public/file/profession.js", true, function(){
                getProfessionJson(v.loadProfession);
                let msg = "谨以此纪念已经提前离开的披萨、仙儿、老庄！\n纪念曾经充满欢乐的<梧桐引>！\n纪念曾经51区<侠客行>的所有小伙伴们！\n特别感谢<鸡块、>提供的枪系账号！"
                window.showMsgDialog(msg,'jelly','notice',10000);
            });  
        },
        mounted : function(){
            let v = this;
        //点击菜单以外->关闭菜单
            document.onclick = function (e) {
                v.selType = '';
                let menu = document.querySelector(".profession-menu");
         　　　　menu.style.display = "none";

                menu = document.querySelector(".other-menu");
         　　　　menu.style.display = "none";
         　 }
         //end
            let bjt = document.querySelector('.container_backImg');
            if (document.querySelector('body').clientWidth > document.querySelector('body').clientHeight)  
                bjt.style.height = 50 + "%";
            else
                bjt.style.height = 50 + "%";
        },
        methods : {
            loadProfession(result){
                this.professionList = result;
                this.selProModel = result['jk'].list['js1'];
                this.changeProfession(this.selProModel);
            },
        //职业菜单显示逻辑
            showProfession : function(item, index, e){
                let menu = document.querySelector(".profession-menu");
                if (menu.style.display == 'none' || menu.style.display == '' || this.selType != item.type){
                    this.selType = item.type;
                    this.activeList = item.list;
                    let left = (index + 1) * 0.25;
                    let width = document.querySelector(".footer").clientWidth;
                    menu.style.display = "block";
                    menu.style.left = (width * left - width * 0.125 - menu.clientWidth/2 - 2) + "px";
                }
                else {
                    this.selType = '';　　　　　
                    menu.style.display = "none";
                }
                this.stopFunc(e);
            },
            stopFunc : function (e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;　　　　
            },
        //end

        //切换职业
            changeProfession : function (item){
                if (!item) 
                    return;
                let oldType = this.selProModel['type'];
                if (this.customedSkillMap[oldType])
                    this.customedSkillMap[oldType].usedPoint = this.usedPoint;
                this.selProModel = item;
                let type = this.selProModel['type'];
                if (!type || !this.customedSkillMap[type]){
                    let v = this;
                    let typeList = [];
                    if (this.selProModel['p-type']) 
                        typeList.push(this.selProModel['p-type']);
                    if (this.selProModel['type']) 
                        typeList.push(this.selProModel['type']);
                    if (this.selProModel['c-type']) 
                        typeList.push(this.selProModel['c-type']);
                    LoadFile.JsLoader.load("/public/file/profession-skill.js", true, function(){
                        getProfession_Skill(typeList, type, v.getProSkillLayout);
                    });  
                }
                else {
                    this.usedPoint = this.customedSkillMap[type].usedPoint;
                    delete this.customedSkillMap[type].usedPoint;
                    this.pages = this.customedSkillMap[type];
                    this.reBuildPage();
                }
            },
            getProSkillLayout : function (layoutList, type){
                this.usedPoint = 0;
                this.customedSkillMap[type] = layoutList;
                this.pages = this.customedSkillMap[type];
                this.reBuildPage();
            },
            reBuildPage : function (){
                let imgWidth = document.querySelector(".carouselContain").clientWidth;
                let size = (imgWidth > document.querySelector('.carouselContain').clientHeight) 
                    ? document.querySelector('.carouselContain').clientHeight : imgWidth;
                this.jnRadius = size * 0.1;
                document.querySelector(".prefession-panel").style.width = parseInt(imgWidth * this.pages.length) + 'px';
            },
        //end

        //技能页面滚动
            to_pic: function (index) {
                let wrap = document.querySelector(".prefession-panel");
                let w = document.querySelector(".carouselContain").clientWidth;
                let newLeft = 0 - w * index;
                if (newLeft + "px" == wrap.style.left ||
                    (newLeft == 0 && !wrap.style.left)) {
                    return;
                }
                this.addTranListener(wrap);
                wrap.style.left = newLeft + "px";
            },
            next_pic: function () {
                let wrap = document.querySelector(".prefession-panel");
                let w = document.querySelector(".carouselContain").clientWidth;
                let newLeft = parseInt(wrap.offsetLeft) - w;
                if (wrap.style.left == (0 - w * (this.pages.length - 1) + "px")) {
                    newLeft = 0;
                }
                let index = newLeft / w;
                this.to_pic(Math.abs(index));
            },
            prev_pic: function () {
                let wrap = document.querySelector(".prefession-panel");
                let w = document.querySelector(".carouselContain").clientWidth;
                let newLeft = parseInt(wrap.offsetLeft) + w;
                if (wrap.style.left == "0px" || wrap.style.left == "") {
                    newLeft = 0 - w * (this.pages.length - 1);
                }
                let index = newLeft / w;
                this.to_pic(Math.abs(index));
            },
            getTransition: function () {
                let el = document.createElement('surface'),
                    transitions = {
                        'transition': 'transitionend',
                        'OTransition': 'oTransitionEnd',
                        'MozTransition': 'transitionend',
                        'WebkitTransition': 'webkitTransitionEnd'
                    }
                for (let t in transitions) {
                    if (el.style[t] !== undefined) {
                        return transitions[t];
                    }
                }
            },
            addTranListener: function (el) {
                document.querySelector('.prefession-panel').classList.add('cancelClick');
                document.querySelector('.arrow_right').classList.add('cancelClick');
                document.querySelector('.arrow_left').classList.add('cancelClick');

                let transition = this.getTransition();
                let tranListener = function () {
                    document.querySelector('.prefession-panel').classList.remove('cancelClick');
                    document.querySelector('.arrow_left').classList.remove('cancelClick');
                    document.querySelector('.arrow_right').classList.remove('cancelClick');
                    el.removeEventListener(transition, tranListener, false);
                }
                el.addEventListener(transition, tranListener);
            },
        //end

        //技能编辑
            clickSkill (selSkillType, imgUrl, level){
                let detail = this.$refs['detail'];
                let userlevel = this.roleLevel;
                if (this.levelState == 1)
                    userlevel = parseInt(this.roleLevel) + 150;
                if (selSkillType){
                    detail.id = selSkillType;
                    detail.icon = imgUrl;
                    detail.roleLevel = userlevel;
                    detail.initLevel = level;
                    detail.level = level;
                    detail.lavePoint = this.lavePoint;
                }
                detail.showDialog();
            },
            changeSkillLevel : function (id, level, initLevel){
                let page = this.customedSkillMap[this.selProModel['type']];
                let skillLayout = this.findSkillByPageLayout(page, id);
                if (skillLayout != null){
                    let addLevel = parseInt(level) - parseInt(initLevel);
                    this.usedPoint = parseInt(this.usedPoint) + addLevel;
                    skillLayout.level = level;
                }
            },
            findSkillByPageLayout : function (page, id){
                for (let i=0; i<page.length; i++){
                    let layout = page[i].layout;
                    for (let a=0; a<layout.length; a++){
                        for (let t=0; t<layout[a].length; t++){
                            if (layout[a][t].key == id){
                                return layout[a][t];
                            }
                        }
                    }
                }
                return null;
            },
            //end

            //更多功能
            showMoreMenu : function (e){
                let menu = document.querySelector(".other-menu");
                if (menu.style.display == 'none' || menu.style.display == ''){
                    let left =  0.25;
                    let width = document.querySelector(".header").clientWidth;
                    let height = document.querySelector(".header").clientHeight;
                    menu.style.display = "block";
                    menu.style.left = (width * left - width * 0.125 - menu.clientWidth/2 - 2) + "px";
                    menu.style.top = height + 'px';
                }
                else {
                    menu.style.display = "none";
                }
                this.stopFunc(e);
            },
            exportSkill : function (type){
                if (type == 'all'){
                }
                let exportMap = this.customedSkillMap[this.selProModel['type']];
                let v = this;
                Exports.export(exportMap,v.selProModel);
            }
        }
    });
}