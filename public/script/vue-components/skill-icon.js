Vue.component('skill-icon',{
    props:{
        imgRadius : {
            type : Number,
            default: 100
        },
        x : {
            type : String,
            default: '0.5'
        },
        y : {
            type : String,
            default: '0.15'
        },
        imgUrl : {
            type : String,
            default: ""
        },
        slillName : {
            type : String,
            default: ""
        },
        isMain : {
            type : Boolean,
            default : true
        },
        slillType : {
            type : String
        },
        level : {
            type : Number
        }
    },
    data (){
        return {
            radius : this.imgRadius,
            nameSize : 30,
        }
    },
    watch: {
        radius : {
            handler : function (val){
                if (val > 100){
                    val = 100
                    this.radius = 100;
                }
                else if (val < 30){
                    val = 30
                    this.radius = 30;
                }
                this.nameSize = 32 * val / 100;
            },
            immediate: true
        }
    },
    mounted :function() {
        this.reload();
    },
    methods: {
        openSkillDia : function (){
            if (this.isMain){
                this.$emit('listenclick', this.slillType, this.imgUrl, this.level); 
            }
        },
        reload :function(){
            let panel = this.$el;
            let border = this.$el.querySelector(".skill-border");
            
            border.style.width = this.radius + "px";
            border.style.height = this.radius + "px";
            panel.style.width = this.radius * 1.08 + "px";
            panel.style.height = this.radius * 1.08 + "px";

            let borderSize = this.radius * 0.05;
            border.style.borderSize = this.radius * 0.05 + "px"

            let cWidth = document.querySelector(".container").clientWidth;
            let cHeight = document.querySelector(".prefession-panel").clientHeight;

            if (!this.isMain){
                cWidth = document.querySelector(".detail-desc-panel").clientWidth;
                cHeight = document.querySelector(".detail-desc-panel").clientHeight;
            }
            panel.style.left = parseFloat(this.x) * cWidth - this.radius / 2 + borderSize/2 + 'px';
            panel.style.top = parseFloat(this.y) * cHeight + borderSize /2 + 'px';
        },

        getSkillInfo : function(list){
            let levelscroll = this.$refs['levelscroll'];
            levelscroll.minLevel = 0;
            if (list.growing.RefSkill){
                this.$emit('findrefinfo', list.growing.RefSkill.refId); 
            }
            levelscroll.minLevel = 0;
            if(this.slillType.indexOf("ptgj") != -1){
                levelscroll.minLevel = 1;
            }
        },

        startTouch : function(e){
            let levelscroll = this.$refs['levelscroll'];
            let v = this;
            if(!window.skills){
                LoadFile.JsLoader.load("/public/file/skill.js", true, function(){
                    v.getSkillInfo(searchSkill(v.slillType));
                });  
            }
            else {
                this.getSkillInfo(searchSkill(v.slillType));
            }
            
            levelscroll.showScoll(e);
        },
        moveTouch : function(e){
            this.$refs['levelscroll'].changeLevel(e);
        },
        endTouch : function(e){
            this.$refs['levelscroll'].hideScroll(e);
        },
    },
    template : 
    '<div class="skill-panel">'
        +'<img class="skill-img" :src="imgUrl"/>'
        +'<div class="skill-border" @click="openSkillDia"></div>'
        +'<p class="skill-name" v-if="isMain" :style="\'font-size:\'+ nameSize +\'px\'">'
            +'<span>{{slillName}}</span>'
            +'<br>'
            +'<span class="skill-name-level" @touchstart="startTouch($event)" @touchmove="moveTouch($event)" @touchend="endTouch($event)">'
                +'{{level}}级'
                +'<level-scroll ref="levelscroll"></level-scroll>'
            +'</span>'
        +'</p>'
    +'</div>'
})