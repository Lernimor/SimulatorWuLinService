Vue.component('level-scroll',{
    data(){
        return {
            startX : 0, startY : 0, endX : 0, endY : 0,
            startTop : 0, stratLevel : 0,
            height : 0, unitHeight : 0,
            can : false, timeOutEvent : null,
            level : 0,
            minLevel : 0,
            maxLevel : 20,
        }
    },
    methods : {
        showScoll : function (e){
            let _touch = e.targetTouches[0];
            let v = this;
            this.timeOutEvent = setTimeout(function(){
                v.can = true;
                v.startX = _touch.pageX;
                v.startY = _touch.pageY;

                let t = v.$el;
                let t1 = v.$el.querySelector(".level-scroll-progress");
                t.style.display = "block";

                let text = v.$el.querySelector(".level-scroll-text");

                v.height = t.clientHeight;
                v.unitHeight = v.height / 20;
                v.stratLevel = parseInt(v.level)
                v.startTop = -v.unitHeight * v.stratLevel;

                t.style.top = 16 + "px";
                t.style.left = _touch.target.offsetLeft + "px";
                text.style.fontSize  = _touch.target.style.fontSize;
            },500);
        },

        changeLevel : function(e){
            if (!this.can) return;
            var _touch = e.targetTouches[0];
            this.endX = _touch.pageX;
            this.endY = _touch.pageY;
    
            let t = this.$el.querySelector(".level-scroll-progress");
    
            let cj = Math.abs(this.endY-this.startY);
            let level = this.stratLevel + parseInt((this.endY-this.startY)/this.unitHeight);
            if (level >=this.minLevel && level <= this.maxLevel){
                if (this.endY - this.startY < 0)
                    t.style.top = this.startTop + cj + "px";
                else  
                    t.style.top = this.startTop - cj + "px";
               this.level = level;
            }
        },

        hideScroll : function (e){
            clearTimeout(this.timeOutEvent);
            let t = this.$el;
            t.style.display = "none";
            this.can = false;
            this.startX = 0; 
            this.startY = 0; 
            this.endX = 0;
            this.endY = 0;   
            
            
        }
    },
    template : 
    '<div class="level-scroll-panel">'
       +'<div class="level-scroll-progress"></div>'
       +'<span class="level-scroll-text">{{level}}级</span>'
    +'</div>'
});