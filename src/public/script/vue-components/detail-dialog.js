Vue.component('detail-dialog',{
    data : function(){
        return {
            id : '',
            name : '',
            isNew : true,
            rolaLevel : 0,
            lavePoint : 0,
            initLevel : 0,
            level : 0,
            desc : '',
            skillState : 'passive',
            icon : "/public/file/img/skill/jx/jk/bmqsj-jk.png",
            skillList : {},
            skillModel : {
                AtkProp : '',//攻击
                DefProp : '',//防御
                HpProp : '',//生命上限
                MpProp : '',//真气
                CriProp : '',//暴击
                CriDefProp : '',//暴抗
                CriAtkProp : '',//暴击伤害
                CriAtkDefProp : '',//暴伤抗性
                HitProp : '',//命中
                DuckProp : '',//躲闪
                DizProp : '',//击晕
                DizDefProp : '',//眩晕抗性
                SleepProp : '',//睡眠
                SleepDefProp : '',//睡眠抗性
                SilProp : '',//沉默
                SilDefProp : '',//沉默抗性
                WrapProp : '',//缠绕
                WrapDefProp : '',//缠绕抗性
               
                TimeConsum : '',//技能耗时
                Distance : '',//射程
                Atk : '',//附加攻击
                AtkByHp : '',//附加攻击-生命
                AtkByMp : '',//附加攻击-真气
                AtkByCri : '',//附加攻击-暴击
                AtkByCriAkt : '',//附加攻击-暴伤
                AtkByMove : '',//附加攻击-每次移动
                AtkByHit : '',//附加攻击-命中
                AtkPer : '',//伤害系数
                AtkAfter : '',//额外伤害系数
                OtherOdds: '',//额外效果概率
                AtkAfterFireCir : '',//额外伤害-火圈
                AtkMore : '',//伤害加深
                AtkBack : '',//伤害反弹
                HpHeal : '',//恢复生命
                MpHeal : '',//恢复真气
                ReduceAtk : '',//防御攻击
                ReduceDef : '',//防御降低
                ReduceCri : '',//暴抗降低
                ReduceSpd : '',//暴抗降低
                ReduceHit : '',//命中降低
                ReduceBuff : '',//全精通削弱
                ReduceDebuff : '',//全抗性削弱
                ReduceMp : '',//真气削减
                ReduceCD : '',//冷却缩短
                ReduceMpAfter : '',//额外真气削减
                ExemptAtk : '',//免伤
                DefByHP : '',//气血护盾
                DefByMP : '',//真气抵伤
                MpToHp : '',//真气转换比例
                Def : '',//防御提升
                Hit : '',//增加命中
                Spd : '',//移动速度
                Duck : '',//闪躲
                Debuff : '',//全抗性
                Cri : '',//暴抗
                KeepTime : '',//持续时间
                SleepKeepTime : '',//持续睡眠时间
                WrapKeepTime : '',//持续缠绕时间
                CD : '',//冷却时间
                HpSuck : '',//吸血比例
                HpConsum : '',//生命消耗
                MpConsum : '', //真气消耗

                QianBookConsum : '',//乾书消耗
                KunBookConsum : '',//坤书消耗
                ZhenBookConsum : '',//震书消耗
                XunBookConsum : '',//巽书消耗
                KanBookConsum : '',//坎书消耗

                Level : ''
            }
        }
    },
    computed: {
        canAdd : function(){
            return parseInt(this.lavePoint) - parseInt(this.level) > 0;
        }
    },
    watch: {
        level (nv,ov){
            if (this.id.indexOf("ptgj") != -1 && nv < 1){
                this.level = nv = parseInt(1);
            }
            else if (nv < 0){
                this.level = nv = parseInt(0);
            }
            if (nv > 20){
                this.level = nv = parseInt(20);
            }
            if (!this.isNew && nv > this.initLevel){
                if (this.lavePoint - nv + this.initLevel <= 0){
                    this.level = nv = parseInt(this.lavePoint + this.initLevel);
                }
            }
        }
    },
    methods: {
        showDialog : function(){
            if (this.id){
                let vc = this;
                LoadFile.JsLoader.load("/public/file/skill.js", true, function(){
                    let list = searchSkill(vc.id);
                    if (list){
                        vc.skillList = list;
                        vc.desc = list['desc'];
                        vc.name = list['name'];
                        vc.skillState = list['state'];
                        vc.isNew = false;
                     }
                     else{
                        vc.isNew = true;
                     }
                });
            }
            document.querySelector(".mask").style.display = "block";
            this.$el.style.display = "block";
            this.$refs['skillicon'].reload();
        },
        commitDialog : function (){
            if (this.level == 0)
                return;
            let vc = this;
            LoadFile.JsLoader.load("/public/file/skill.js", true, function(){
                let list = searchSkill(vc.id);
                if (!list){
                   list = {};
                }
                list['id'] = vc.id;
                list['desc'] = vc.desc;
                list['name'] = vc.name;
                list['state'] = vc.skillState;
                if (!list['growing']){
                    list['growing'] = {};
                }
                for (let key in vc.skillModel){
                    let skill = vc.skillModel[key];
                    if (skill == null || skill == "") continue;
                    if (!list['growing'][key]){
                        list['growing'][key] = new Array(20);
                    }
                    let index = vc.level-1;
                    if (!list['growing'][key][index]){
                        list['growing'][key].splice(vc.level-1,1,skill);
                    }
                }
                pushToSkill(vc.id, list);
                vc.level = parseInt(vc.level) + 1;
            });  
        },
        closeDialog : function (){
            if (this.isNew){
                document.querySelector(".mask").style.display = "none";
                this.$el.style.display = "none";
                return;
            }
            let levelLabel = this.$el.querySelector(".levelLabel");
            if (!this.isNew && levelLabel){
                if (levelLabel.className.indexOf('error-level') != -1){
                    window.showMsgDialog("所需等级大于当前等级",'jelly','error',5000);
                    return;
                }
            }
            document.querySelector(".mask").style.display = "none";
            this.$el.style.display = "none";
            if (!this.level || this.level == ""){
                this.level = this.initLevel;
            }
            this.$emit('changelevel', this.id, this.level, this.initLevel); 
        },
        exportJson : function (){
            LoadFile.JsLoader.load("/public/file/skill.js", true, function(){
                showSkill();
            });  
        },
        getRefSkill : function (refInfo){
            let list = searchSkill(refInfo.refId);
            let nLev = refInfo.refLevel[this.level];
            if (nLev == null) nLev = 0;
            return list.name + "  " + nLev + "级";
        },
        translateRoleLevel : function (roleLevel){
            if(!roleLevel){
                roleLevel = "0";
            }
            let needLevel = roleLevel.replace('+', '');
            if (roleLevel && roleLevel.indexOf('+') != -1){
                roleLevel = "涅槃" + needLevel;
                needLevel = parseInt(needLevel) + 150;
            }
            let levelLabel = this.$el.querySelector(".levelLabel");
            if (levelLabel){
                levelLabel.classList.remove('error-level');
                if (parseInt(needLevel) > this.roleLevel){
                    levelLabel.classList.add('error-level');
                }
            }
            return roleLevel;
        }
    },
    template : 
    '<div class="detail-dialog">'
        +'<div class="detail-header">'
        +   '<p class="commit" v-if="isNew" @click="commitDialog">提交</p> '
        +    '<input v-if="isNew" type="text" v-model="id"/>'
        +    '<input v-if="isNew" type="text" v-model="name"/>'
        +    '<span v-if="!isNew">{{name}}</span>'
        +    '<p @click="closeDialog">x</p> '
        + '</div>'
        + '<div class="detail-container">'
        +    '<div class="detail-desc-panel">'
        +        '<div>'
        +          '<div class="img">'
        +               '<skill-icon ref="skillicon"'
        +                   ':img-radius="35" '
        +                   'x="0.45"'
        +                   'y="0.2"'
        +                   ':img-url="icon" '
        +                   ':is-main="false">'
        +               '</skill-icon>'
        +           '</div>'
        +            '<h5>等级：</h5>'  
        +            '<div class="detail-level">'
        +                '<div @click="level= parseInt(level) + 1">+</div><input type="text" v-model="level"/><div @click="level= parseInt(level) - 1">-</div>'
        +            '</div>'
        +            '<h5 v-if="isNew || skillList.state == \'initiative\'">主动技能</h5><input v-if="isNew" type="radio" value="initiative" name="skill-state" v-model="skillState"/><br v-if="isNew">'
        +            '<h5 v-if="isNew || skillList.state == \'passive\'">被动技能</h5><input v-if="isNew" type="radio" value="passive" name="skill-state" v-model="skillState"/><br v-if="isNew">'
        +            '<h5 v-if="isNew || skillList.state == \'buff\'">状态技能</h5><input v-if="isNew" type="radio" value="buff" name="skill-state" v-model="skillState"/><br v-if="isNew">'
        +            '<textarea :disabled="isNew==false" v-model="desc"></textarea>'
        +            '<button v-if="isNew==true" @click="exportJson">导出</button>'
        +        '</div>'
        +    '</div>'
        +    '<div class="profession-list-panel">'
        +        '<ul>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkProp">'
        +                '<span>攻击增加:</span><span v-if="isNew==false">{{skillList.growing.AtkProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.DefProp">'
        +                '<span>防御增加:</span><span v-if="isNew==false">{{skillList.growing.DefProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.DefProp"/>'
        +           ' </li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.HpProp">'
        +                '<span>生命上限增加:</span><span v-if="isNew==false">{{skillList.growing.HpProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.HpProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.MpProp">'
        +                '<span>真气上限增加:</span><span v-if="isNew==false">{{skillList.growing.MpProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.MpProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.CriProp">'
        +                '<span>暴击增加:</span><span v-if="isNew==false">{{skillList.growing.CriProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.CriProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.CriDefProp">'
        +                '<span>暴抗增加:</span><span v-if="isNew==false">{{skillList.growing.CriDefProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.CriDefProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.CriAtkProp">'
        +                '<span>爆伤增加:</span><span v-if="isNew==false">{{skillList.growing.CriAtkProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.CriAtkProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.CriAtkDefProp">'
        +                '<span>爆伤减免增加:</span><span v-if="isNew==false">{{skillList.growing.CriAtkDefProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.CriAtkDefProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.HitProp">'
        +                '<span>命中增加:</span><span v-if="isNew==false">{{skillList.growing.HitProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.HitProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.DuckProp">'
        +                '<span>躲闪增加:</span><span v-if="isNew==false">{{skillList.growing.DuckProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.DuckProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.DizProp">'
        +                '<span>眩晕精通增加:</span><span v-if="isNew==false">{{skillList.growing.DizProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.DizProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.DizDefProp">'
        +                '<span>眩晕抗性增加:</span><span v-if="isNew==false">{{skillList.growing.DizDefProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.DizDefProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.SleepProp">'
        +                '<span>睡眠精通增加:</span><span v-if="isNew==false">{{skillList.growing.SleepProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.SleepProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.SleepDefProp">'
        +                '<span>睡眠抗性增加:</span><span v-if="isNew==false">{{skillList.growing.SleepDefProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.SleepDefProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.SilProp">'
        +                '<span>沉默精通增加:</span><span v-if="isNew==false">{{skillList.growing.SilProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.SilProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.SilDefProp">'
        +                '<span>沉默抗性增加:</span><span v-if="isNew==false">{{skillList.growing.SilDefProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.SilDefProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.WrapProp">'
        +                '<span>缠绕精通增加:</span><span v-if="isNew==false">{{skillList.growing.WrapProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.WrapProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.WrapDefProp">'
        +                '<span>缠绕抗性增加:</span><span v-if="isNew==false">{{skillList.growing.WrapDefProp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.WrapDefProp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.TimeConsum">'
        +                '<span>技能耗时:</span><span v-if="isNew==false">{{skillList.growing.TimeConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.TimeConsum"/>秒'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Distance">'
        +                '<span>技能射程:</span><span v-if="isNew==false">{{skillList.growing.Distance[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Distance"/>码'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkByHp">'
        +                '<span>攻击附加-生命:</span><span v-if="isNew==false">{{skillList.growing.AtkByHp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkByHp"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkByMp">'
        +                '<span>攻击附加-真气:</span><span v-if="isNew==false">{{skillList.growing.AtkByMp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkByMp"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkByCri">'
        +                '<span>攻击附加-暴击:</span><span v-if="isNew==false">{{skillList.growing.AtkByCri[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkByCri"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkByCriAkt">'
        +                '<span>攻击附加-爆伤:</span><span v-if="isNew==false">{{skillList.growing.AtkByCriAkt[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkByCriAkt"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkByMove">'
        +                '<span>攻击附加-移动:</span><span v-if="isNew==false">{{skillList.growing.AtkByMove[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkByMove"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkByHit">'
        +                '<span>攻击附加-命中:</span><span v-if="isNew==false">{{skillList.growing.AtkByHit[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkByHit"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Atk">'
        +                '<span>攻击附加:</span><span v-if="isNew==false">{{skillList.growing.Atk[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Atk"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkPer">'
        +                '<span>伤害系数:</span><span v-if="isNew==false">{{skillList.growing.AtkPer[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkPer"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkAfter">'
        +                '<span>额外伤害:</span><span v-if="isNew==false">{{skillList.growing.AtkAfter[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkAfter"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.OtherOdds">'
        +                '<span>特效概率:</span><span v-if="isNew==false">{{skillList.growing.OtherOdds[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.OtherOdds"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkAfterFireCir">'
        +                '<span>火圈伤害:</span><span v-if="isNew==false">{{skillList.growing.AtkAfterFireCir[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkAfterFireCir"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkMore">'
        +                '<span>伤害加深:</span><span v-if="isNew==false">{{skillList.growing.AtkMore[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkMore"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.AtkBack">'
        +                '<span>反弹伤害:</span><span v-if="isNew==false">{{skillList.growing.AtkBack[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.AtkBack"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.HpHeal">'
        +                '<span>生命恢复:</span><span v-if="isNew==false">{{skillList.growing.HpHeal[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.HpHeal"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.MpHeal">'
        +                '<span>真气恢复:</span><span v-if="isNew==false">{{skillList.growing.MpHeal[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.MpHeal"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceAtk">'
        +                '<span>攻击降低:</span><span v-if="isNew==false">{{skillList.growing.ReduceAtk[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceAtk"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceDef">'
        +                '<span>防御降低:</span><span v-if="isNew==false">{{skillList.growing.ReduceDef[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceDef"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceCri">'
        +                '<span>暴抗降低:</span><span v-if="isNew==false">{{skillList.growing.ReduceCri[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceCri"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceBuff">'
        +                '<span>精通降低:</span><span v-if="isNew==false">{{skillList.growing.ReduceBuff[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceBuff"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceDebuff">'
        +                '<span>抗性降低:</span><span v-if="isNew==false">{{skillList.growing.ReduceDebuff[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceDebuff"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceSpd">'
        +                '<span>速度降低:</span><span v-if="isNew==false">{{skillList.growing.ReduceSpd[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceSpd"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceHit">'
        +                '<span>命中降低:</span><span v-if="isNew==false">{{skillList.growing.ReduceHit[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceHit"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceMp">'
        +                '<span>真气削减:</span><span v-if="isNew==false">{{skillList.growing.ReduceMp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceMp"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ReduceMpAfter">'
        +                '<span>额外损失真气:</span><span v-if="isNew==false">{{skillList.growing.ReduceMpAfter[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ReduceMpAfter"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Def">'
        +                '<span>防御提升:</span><span v-if="isNew==false">{{skillList.growing.Def[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Def"/>%'
        +            '</li>'
        
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Spd">'
        +                '<span>速度增加:</span><span v-if="isNew==false">{{skillList.growing.Spd[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Spd"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Hit">'
        +                '<span>命中增加:</span><span v-if="isNew==false">{{skillList.growing.Hit[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Hit"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Debuff">'
        +                '<span>全抗性增加:</span><span v-if="isNew==false">{{skillList.growing.Debuff[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Debuff"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Cri">'
        +                '<span>暴抗增加:</span><span v-if="isNew==false">{{skillList.growing.Cri[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Cri"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.Duck">'
        +                '<span>闪避增加:</span><span v-if="isNew==false">{{skillList.growing.Duck[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Duck"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ExemptAtk">'
        +                '<span>伤害减免:</span><span v-if="isNew==false">{{skillList.growing.ExemptAtk[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ExemptAtk"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.DefByHP">'
        +                '<span>生命护盾:</span><span v-if="isNew==false">{{skillList.growing.DefByHP[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.DefByHP"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.DefByMP">'
        +                '<span>真气抵伤:</span><span v-if="isNew==false">{{skillList.growing.DefByMP[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.DefByMP"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.MpToHp">'
        +                '<span>真气回血比例:</span><span v-if="isNew==false">{{skillList.growing.MpToHp[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.MpToHp"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.KeepTime">'
        +                '<span>持续时间:</span><span v-if="isNew==false">{{skillList.growing.KeepTime[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.KeepTime"/>秒'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.SleepKeepTime">'
        +                '<span>睡眠时间:</span><span v-if="isNew==false">{{skillList.growing.SleepKeepTime[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.SleepKeepTime"/>秒'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.WrapKeepTime">'
        +                '<span>缠绕时间:</span><span v-if="isNew==false">{{skillList.growing.WrapKeepTime[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.WrapKeepTime"/>秒'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.CD">'
        +               ' <span>冷却时间:</span><span v-if="isNew==false">{{skillList.growing.CD[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.CD"/>秒'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.HpSuck">'
        +                '<span>吸血比例:</span><span v-if="isNew==false">{{skillList.growing.HpSuck[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.HpSuck"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.HpConsum">'
        +                '<span>生命消耗:</span><span v-if="isNew==false">{{skillList.growing.HpConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.HpConsum"/>%'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.MpConsum">'
        +                '<span>真气消耗:</span><span v-if="isNew==false">{{skillList.growing.MpConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.MpConsum"/>'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.QianBookConsum">'
        +                '<span>乾书消耗:</span><span v-if="isNew==false">{{skillList.growing.QianBookConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.QianBookConsum"/>本'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.KunBookConsum">'
        +                '<span>坤书消耗:</span><span v-if="isNew==false">{{skillList.growing.KunBookConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.KunBookConsum"/>本'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.ZhenBookConsum">'
        +                '<span>震书消耗:</span><span v-if="isNew==false">{{skillList.growing.ZhenBookConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.ZhenBookConsum"/>本'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.XunBookConsum">'
        +                '<span>巽书消耗:</span><span v-if="isNew==false">{{skillList.growing.XunBookConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.XunBookConsum"/>本'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.KanBookConsum">'
        +                '<span>坎书消耗:</span><span v-if="isNew==false">{{skillList.growing.KanBookConsum[parseInt(level - 1)] || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.KanBookConsum"/>本'
        +            '</li>'
        +            '<li class="detail-skill-property" v-if="isNew==true || skillList.growing.RefSkill">'
        +                '<span>技能需求:</span><span v-if="isNew==false">{{getRefSkill(skillList.growing.RefSkill) || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.RefSkill"/>'
        +            '</li>'
        +            '<li class="detail-skill-property levelLabel" v-if="isNew==true || skillList.growing.Level">'
        +                '<span>等级需求:</span><span v-if="isNew==false">{{translateRoleLevel(skillList.growing.Level[parseInt(level - 1)]) || "0"}}</span><input type="text" v-if="isNew==true" v-model="skillModel.Level"/>级'
        +            '</li>'
        +        '</ul>'
        +  '</div>'
        +'</div>'
    +'</div>'
})