function getProfession_Skill(typeList, selType, fun){
    let list = {
//枪系
        qh : {
            name : '枪豪',
            layout : [
                {
                    type : 'qh',
                    typeName : '枪豪',
                    name : '回马枪',
                    layout : [
                        [
                            {key : 'ptgj-qh', name : '普通攻击', icon : '/public/file/img/skill/qx/qh/ptgj-qh.png', level : 1}
                        ],
                        [
                            {key : 'alp-qh', name : '暗雷破', icon : '/public/file/img/skill/qx/qh/alp-qh.png', level : 0}, 
                            {key : 'bylhq-qh', name : '暴雨梨花枪', icon : '/public/file/img/skill/qx/qh/bylhq-qh.png', level : 0}
                        ],
                        [
                            {key : 'xtgq-qh', name : '先天罡气', icon : '/public/file/img/skill/qx/qh/xtgq-qh.png', level : 0}, 
                            {key : 'ssbx-qh', name : '生生不息', icon : '/public/file/img/skill/qx/qh/ssbx-qh.png', level : 0},
                            {key : 'jfp-qh', name : '禁风破', icon : '/public/file/img/skill/qx/qh/jfp-qh.png', level : 0}
                        ]
                    ]
                },{
                    type : 'qh',
                    typeName : '枪豪',
                    name : '逆鳞枪',
                    layout : [
                        [
                            {key : 'nxp-qh', name : '凝血破', icon : '/public/file/img/skill/qx/qh/nxp-qh.png', level : 0},
                            {key : 'tzzx-qh', name : '挑战之心', icon : '/public/file/img/skill/qx/qh/tzzx-qh.png', level : 0},
                            {key : 'lfzs-qh', name : '烈风之伤', icon : '/public/file/img/skill/qx/qh/lfzs-qh.png', level : 0}
                        ],
                        [
                            {key : 'jjzx-qh', name : '静寂之心', icon : '/public/file/img/skill/qx/qh/jjzx-qh.png', level : 0}, 
                            {key : 'we-qh', name : '巍峨', icon : '/public/file/img/skill/qx/qh/we-qh.png', level : 0}
                        ],
                        [
                            {key : 'sxbb-qh', name : '神行百变', icon : '/public/file/img/skill/qx/qh/sxbb-qh.png', level : 0}, 
                            {key : 'yqgj-qh', name : '硬气功诀', icon : '/public/file/img/skill/qx/qh/yqgj-qh.png', level : 0},
                            {key : 'smyj-qh', name : '舍命一击', icon : '/public/file/img/skill/qx/qh/smyj-qh.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        dj : {
            name : '刀君',
            layout : [
                {
                    type : 'dj',
                    typeName : '刀君',
                    name : '噬魂刀',
                    layout : [
                        [
                            {key : 'smd-dj', name : '碎梦刀', icon : '/public/file/img/skill/qx/dj/smd-dj.png', level : 0},
                            {key : 'ysz-dj', name : '养生主·刀', icon : '/public/file/img/skill/qx/dj/ysz-dj.png', level : 0}
                        ],
                        [
                            {key : 'jlzq-dj', name : '巨灵之躯', icon : '/public/file/img/skill/qx/dj/jlzq-dj.png', level : 0}, 
                            {key : 'jzz-dj', name : '金钟罩', icon : '/public/file/img/skill/qx/dj/jzz-dj.png', level : 0}
                        ],
                        [
                            {key : 'jmd-dj', name : '寂寞刀', icon : '/public/file/img/skill/qx/dj/jmd-dj.png', level : 0}, 
                            {key : 'xwzx-dj', name : '虚无之心', icon : '/public/file/img/skill/qx/dj/xwzx-dj.png', level : 0},
                            {key : 'zyhld-dj', name : '真焰红莲刀', icon : '/public/file/img/skill/qx/dj/zyhld-dj.png', level : 0}
                        ]
                    ]
                },{
                    type : 'dj',
                    typeName : '刀君',
                    name : '噬魂刀',
                    layout : [
                        [
                            {key : 'jfp-dj', name : '禁风破·刀', icon : '/public/file/img/skill/qx/dj/jfp-dj.png', level : 0},
                            {key : 'tmjg-dj', name : '铁马金戈', icon : '/public/file/img/skill/qx/dj/tmjg-dj.png', level : 0}
                        ],
                        [
                            {key : 'bdrs-dj', name : '不动如山', icon : '/public/file/img/skill/qx/dj/bdrs-dj.png', level : 0}, 
                            {key : 'qzsh-dj', name : '气壮山河', icon : '/public/file/img/skill/qx/dj/qzsh-dj.png', level : 0},
                            {key : 'alp-dj', name : '暗雷破·刀', icon : '/public/file/img/skill/qx/dj/alp-dj.png', level : 0}
                        ],
                        [
                            {key : 'twzgd-dj', name : '天王斩鬼刀', icon : '/public/file/img/skill/qx/dj/twzgd-dj.png', level : 0}, 
                            {key : 'cfs-dj', name : '长风沙', icon : '/public/file/img/skill/qx/dj/cfs-dj.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        js : {
            name : '戟神',
            layout : [
                {
                    type : 'js',
                    typeName : '戟神',
                    name : '封天戟',
                    layout : [
                        [
                            {key : 'jszh-js', name : '戟髓之虎', icon : '/public/file/img/skill/qx/js/jszh-js.png', level : 0},
                            {key : 'ysz-js', name : '养生主·戟', icon : '/public/file/img/skill/qx/js/ysz-js.png', level : 0}
                        ],
                        [
                            {key : 'jgzq-js', name : '金刚之躯', icon : '/public/file/img/skill/qx/js/jgzq-js.png', level : 0}, 
                            {key : 'sflxz-js', name : '神风连檄阵', icon : '/public/file/img/skill/qx/js/sflxz-js.png', level : 0}
                        ],
                        [
                            {key : 'zs-js', name : '战世', icon : '/public/file/img/skill/qx/js/zs-js.png', level : 0}, 
                            {key : 'wsj-js', name : '无双戟', icon : '/public/file/img/skill/qx/js/wsj-js.png', level : 0},
                            {key : 'tlly-js', name : '天朗烈牙', icon : '/public/file/img/skill/qx/js/tlly-js.png', level : 0}
                        ]
                    ]
                },{
                    type : 'js',
                    typeName : '戟神',
                    name : '封天戟',
                    layout : [
                        [
                            {key : 'jfp-js', name : '禁风破·戟', icon : '/public/file/img/skill/qx/js/jfp-js.png', level : 0},
                            {key : 'fhlc-js', name : '烽火连城', icon : '/public/file/img/skill/qx/js/fhlc-js.png', level : 0}
                        ],
                        [
                            {key : 'jszx-js', name : '戟髓之熊', icon : '/public/file/img/skill/qx/js/jszx-js.png', level : 0}, 
                            {key : 'zmhs-js', name : '驻马横槊', icon : '/public/file/img/skill/qx/js/zmhs-js.png', level : 0},
                            {key : 'nxp-js', name : '凝血破·戟', icon : '/public/file/img/skill/qx/js/nxp-js.png', level : 0}
                        ],
                        [
                            {key : 'xj-js', name : '血祭', icon : '/public/file/img/skill/qx/js/xj-js.png', level : 0}, 
                            {key : 'tcsy-js', name : '天朝朔月', icon : '/public/file/img/skill/qx/js/tcsy-js.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        xl : {
            name : '修罗',
            layout : [
                {
                    type : 'xl',
                    typeName : '修罗',
                    name : '开山斧',
                    layout : [
                        [
                            {key : 'lhlds-xl', name : '罗皇凌地闪', icon : '/public/file/img/skill/qx/xl/lhlds-xl.png', level : 0},
                            {key : 'ysz-xl', name : '养生主·修', icon : '/public/file/img/skill/qx/xl/ysz-xl.png', level : 0}
                        ],
                        [
                            {key : 'gy-xl', name : '刚毅', icon : '/public/file/img/skill/qx/xl/gy-xl.png', level : 0}, 
                            {key : 'zhd-xl', name : '真红盾', icon : '/public/file/img/skill/qx/xl/zhd-xl.png', level : 0}
                        ],
                        [
                            {key : 'lbdz-xl', name : '临兵斗者', icon : '/public/file/img/skill/qx/xl/lbdz-xl.png', level : 0}, 
                            {key : 'xwzx-xl', name : '虚无之心·修', icon : '/public/file/img/skill/qx/xl/xwzx-xl.png', level : 0},
                            {key : 'lhzks-xl', name : '罗皇斩空闪', icon : '/public/file/img/skill/qx/xl/lhzks-xl.png', level : 0}
                        ]
                    ]
                },{
                    type : 'xl',
                    typeName : '修罗',
                    name : '开山斧',
                    layout : [
                        [
                            {key : 'jfp-xl', name : '禁风破·修', icon : '/public/file/img/skill/qx/xl/jfp-xl.png', level : 0},
                            {key : 'xsyz-xl', name : '血殇勇战', icon : '/public/file/img/skill/qx/xl/xsyz-xl.png', level : 0}
                        ],
                        [
                            {key : 'xmdst-xl', name : '血面斗神图', icon : '/public/file/img/skill/qx/xl/xmdst-xl.png', level : 0}, 
                            {key : 'xldh-xl', name : '修罗斗魂', icon : '/public/file/img/skill/qx/xl/xldh-xl.png', level : 0},
                            {key : 'bylhq-xl', name : '暴雨梨花枪·修', icon : '/public/file/img/skill/qx/xl/bylhq-xl.png', level : 0}
                        ],
                        [
                            {key : 'xlj-xl', name : '修罗劲', icon : '/public/file/img/skill/qx/xl/xlj-xl.png', level : 0}, 
                            {key : 'ljmsz-xl', name : '罗皇灭世斩', icon : '/public/file/img/skill/qx/xl/lhmsz-xl.png', level : 0}
                        ]
                    ]
                }
            ]
        },
//剑系
        jk : {
            name : '剑客',
            layout : [
                {
                    type : 'jk',
                    typeName : '剑客',
                    name : '凌霄剑',
                    layout : [
                        [
                            {key : 'ptgj-jk', name : '普通攻击', icon : '/public/file/img/skill/jx/jk/ptgj-jk.png', level : 1}
                        ],
                        [
                            {key : 'bmqsj-jk', name : '北冥秋水剑', icon : '/public/file/img/skill/jx/jk/bmqsj-jk.png', level : 0}, 
                            {key : 'tbdl-jk', name : '天崩地裂', icon : '/public/file/img/skill/jx/jk/tbdl-jk.png', level : 0}
                        ],
                        [
                            {key : 'jm-jk', name : '剑芒', icon : '/public/file/img/skill/jx/jk/jm-jk.png', level : 0}, 
                            {key : 'dxjm-jk', name : '点穴截脉', icon : '/public/file/img/skill/jx/jk/dxjm-jk.png', level : 0},
                            {key : 'hfwl-jk', name : '回风舞柳', icon : '/public/file/img/skill/jx/jk/hfwl-jk.png', level : 0}
                        ]
                    ]
                },{
                    type : 'jk',
                    typeName : '剑客',
                    name : '参天剑',
                    layout : [
                        [
                            {key : 'zfj-jk', name : '追风剑', icon : '/public/file/img/skill/jx/jk/zfj-jk.png', level : 0},
                            {key : 'lbwb-jk', name : '凌波微步', icon : '/public/file/img/skill/jx/jk/lbwb-jk.png', level : 0},
                            {key : 'tssm-jk', name : '天山神芒', icon : '/public/file/img/skill/jx/jk/tssm-jk.png', level : 0}
                        ],
                        [
                            {key : 'lkns-jk', name : '冷酷凝视', icon : '/public/file/img/skill/jx/jk/lkns-jk.png', level : 0}, 
                            {key : 'jryz-jk', name : '坚韧意志', icon : '/public/file/img/skill/jx/jk/jryz-jk.png', level : 0}
                        ],
                        [
                            {key : 'xjtm-jk', name : '心剑通明', icon : '/public/file/img/skill/jx/jk/xjtm-jk.png', level : 0}, 
                            {key : 'xljy-jk', name : '降龙剑意', icon : '/public/file/img/skill/jx/jk/xljy-jk.png', level : 0},
                            {key : 'bsky-jk', name : '崩山溃玉', icon : '/public/file/img/skill/jx/jk/bsky-jk.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        js1 : {
            name : '剑圣',
            layout : [
                {
                    type : 'js1',
                    typeName : '剑圣',
                    name : '迅疾剑',
                    layout : [
                        [
                            {key : 'klj-js1', name : '亢龙诀', icon : '/public/file/img/skill/jx/js/klj.png', level : 0},
                            {key : 'jmdz-js1', name : '剑魔斗志·圣', icon : '/public/file/img/skill/jx/js/jmdz-js.png', level : 0}
                        ],
                        [
                            {key : 'wgsxm-js1', name : '吴钩霜雪明·圣', icon : '/public/file/img/skill/jx/js/wgsmx-js.png', level : 0}, 
                            {key : 'zlst-js1', name : '真龙圣体', icon : '/public/file/img/skill/jx/js/zlst-js.png', level : 0}
                        ],
                        [
                            {key : 'jmjj-js1', name : '剑魔警戒', icon : '/public/file/img/skill/jx/js/jmjj-js.png', level : 0}, 
                            {key : 'jszx-js1', name : '剑圣之心', icon : '/public/file/img/skill/jx/js/jszx-js.png', level : 0},
                            {key : 'xxcyj-js1', name : '吸星纯阳剑', icon : '/public/file/img/skill/jx/js/xxcyj-js.png', level : 0}
                        ]
                    ]
                },{
                    type : 'js1',
                    typeName : '剑圣',
                    name : '迅疾剑',
                    layout : [
                        [
                            {key : 'tssm-js1', name : '天山神芒·圣', icon : '/public/file/img/skill/jx/js/tssm-js.png', level : 0},
                            {key : 'fjpm-js1', name : '飞剑破魔', icon : '/public/file/img/skill/jx/js/fjpm-js.png', level : 0}
                        ],
                        [
                            {key : 'slbw-js1', name : '神龙摆尾', icon : '/public/file/img/skill/jx/js/slbw-js.png', level : 0}, 
                            {key : 'zdqs-js1', name : '紫电清霜', icon : '/public/file/img/skill/jx/js/zdqs-js.png', level : 0},
                            {key : 'bsky-js1', name : '崩山溃玉·圣', icon : '/public/file/img/skill/jx/js/bsky-js.png', level : 0}
                        ],
                        [
                            {key : 'jzry-js1', name : '剑阵如云', icon : '/public/file/img/skill/jx/js/jzry-js.png', level : 0}, 
                            {key : 'hltx-js1', name : '黄龙天翔', icon : '/public/file/img/skill/jx/js/hltx-js.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        xh : {
            name : '邪皇',
            layout : [
                {
                    type : 'xh',
                    typeName : '邪皇',
                    name : '邪魅剑',
                    layout : [
                        [
                            {key : 'bsdh-xh', name : '匕髓荡魂', icon : '/public/file/img/skill/jx/xh/bsdh-xh.png', level : 0},
                            {key : 'jmdz-xh', name : '剑魔斗志·邪', icon : '/public/file/img/skill/jx/xh/jmdz-xh.png', level : 0}
                        ],
                        [
                            {key : 'wgsxm-xh', name : '吴钩霜雪明·邪', icon : '/public/file/img/skill/jx/xh/wgsmx-xh.png', level : 0}, 
                            {key : 'xhblz-xh', name : '邪皇碧磷阵', icon : '/public/file/img/skill/jx/xh/xhblz-xh.png', level : 0}
                        ],
                        [
                            {key : 'xm-xh', name : '邪魅', icon : '/public/file/img/skill/jx/xh/xm-xh.png', level : 0}, 
                            {key : 'yxsm-xh', name : '业血噬魔', icon : '/public/file/img/skill/jx/xh/yxsm-xh.png', level : 0},
                            {key : 'bslz-xh', name : '匕髓烈震', icon : '/public/file/img/skill/jx/xh/bslz-xh.png', level : 0}
                        ]
                    ]
                },{
                    type : 'xh',
                    typeName : '邪皇',
                    name : '邪魅剑',
                    layout : [
                        [
                            {key : 'tssm-xh', name : '天山神芒·邪', icon : '/public/file/img/skill/jx/xh/tssm-xh.png', level : 0},
                            {key : 'plxr-xh', name : '飘零血刃', icon : '/public/file/img/skill/jx/xh/plxr-xh.png', level : 0}
                        ],
                        [
                            {key : 'bsmp-xh', name : '匕髓磨魄', icon : '/public/file/img/skill/jx/xh/bsmp-xh.png', level : 0}, 
                            {key : 'flyy-xh', name : '风雷夜雨', icon : '/public/file/img/skill/jx/xh/flyy-xh.png', level : 0},
                            {key : 'zfj-xh', name : '追风剑·邪', icon : '/public/file/img/skill/jx/xh/zfj-xh.png', level : 0}
                        ],
                        [
                            {key : 'sxxm-xh', name : '神消形灭', icon : '/public/file/img/skill/jx/xh/sxxm-xh.png', level : 0}, 
                            {key : 'xmb-xh', name : '邪魅步', icon : '/public/file/img/skill/jx/xh/xmb-xh.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        tj : {
            name : '天剑',
            layout : [
                {
                    type : 'tj',
                    typeName : '天剑',
                    name : '彗星剑',
                    layout : [
                        [
                            {key : 'jszd-tj', name : '剑髓之蝶', icon : '/public/file/img/skill/jx/tj/jszd-tj.png', level : 0},
                            {key : 'jmdz-tj', name : '剑魔斗志·修', icon : '/public/file/img/skill/jx/tj/jmdz-tj.png', level : 0}
                        ],
                        [
                            {key : 'ysh-tj', name : '易水寒', icon : '/public/file/img/skill/jx/tj/ysh-tj.png', level : 0}, 
                            {key : 'zlgx-tj', name : '战立功勋', icon : '/public/file/img/skill/jx/tj/zlgx-tj.png', level : 0}
                        ],
                        [
                            {key : 'tjzy-tj', name : '天剑之意', icon : '/public/file/img/skill/jx/tj/tjzy-tj.png', level : 0}, 
                            {key : 'zlzy-tj', name : '战龙在野', icon : '/public/file/img/skill/jx/tj/zlzy-tj.png', level : 0},
                            {key : 'wjgz-tj', name : '万剑归宗', icon : '/public/file/img/skill/jx/tj/wjgz-tj.png', level : 0}
                        ]
                    ]
                },{
                    type : 'tj',
                    typeName : '天剑',
                    name : '彗星剑',
                    layout : [
                        [
                            {key : 'tssm-tj', name : '天山神芒·剑', icon : '/public/file/img/skill/jx/tj/tssm-tj.png', level : 0},
                            {key : 'xyjf-tj', name : '形意疾风', icon : '/public/file/img/skill/jx/tj/xyjf-tj.png', level : 0}
                        ],
                        [
                            {key : 'zhc-tj', name : '追魂刺', icon : '/public/file/img/skill/jx/tj/zhc-tj.png', level : 0}, 
                            {key : 'jqxx-tj', name : '剑气箫心', icon : '/public/file/img/skill/jx/tj/jqxx-tj.png', level : 0},
                            {key : 'bmqsj-tj', name : '北冥秋水剑·邪', icon : '/public/file/img/skill/jx/tj/bmqsj-tj.png', level : 0}
                        ],
                        [
                            {key : 'tdbr-tj', name : '天地不仁', icon : '/public/file/img/skill/jx/tj/tdbr-tj.png', level : 0}, 
                            {key : 'wsbz-tj', name : '无双霸斩', icon : '/public/file/img/skill/jx/tj/wsbz-tj.png', level : 0}
                        ]
                    ]
                }
            ]
        },
//术系
        ss : {
            name : '术士',
            layout : [
                {
                    type : 'ss',
                    typeName : '术士',
                    name : '秘流术',
                    layout : [
                        [
                            {key : 'ptgj-ss', name : '普通攻击', icon : '/public/file/img/skill/sx/ss/ptgj-ss.png', level : 1}
                        ],
                        [
                            {key : 'jhs-ss', name : '击魂术', icon : '/public/file/img/skill/sx/ss/jhs-ss.png', level : 0}, 
                            {key : 'clfx-ss', name : '重楼飞雪', icon : '/public/file/img/skill/sx/ss/clfx-ss.png', level : 0}
                        ],
                        [
                            {key : 'qsz-ss', name : '祈神咒', icon : '/public/file/img/skill/sx/ss/qsz-ss.png', level : 0}, 
                            {key : 'zqdl-ss', name : '紫气东来', icon : '/public/file/img/skill/sx/ss/zqdl-ss.png', level : 0},
                            {key : 'tjclz-ss', name : '天劫苍雷阵', icon : '/public/file/img/skill/sx/ss/tjclz-ss.png', level : 0}
                        ]
                    ]
                },{
                    type : 'ss',
                    typeName : '术士',
                    name : '天尊术',
                    layout : [
                        [
                            {key : 'smzh-ss', name : '三昧真火', icon : '/public/file/img/skill/sx/ss/smzh-ss.png', level : 0},
                            {key : 'zyht-ss', name : '真元护体', icon : '/public/file/img/skill/sx/ss/zyht-ss.png', level : 0},
                            {key : 'kxzb-ss', name : '客星之变', icon : '/public/file/img/skill/sx/ss/kxzb-ss.png', level : 0}
                        ],
                        [
                            {key : 'qxj-ss', name : '清心诀', icon : '/public/file/img/skill/sx/ss/qxj-ss.png', level : 0}, 
                            {key : 'xhz-ss', name : '吸魂咒', icon : '/public/file/img/skill/sx/ss/xhz-ss.png', level : 0}
                        ],
                        [
                            {key : 'jyb-ss', name : '疾云步', icon : '/public/file/img/skill/sx/ss/jyb-ss.png', level : 0}, 
                            {key : 'hsz-ss', name : '化神咒', icon : '/public/file/img/skill/sx/ss/hsz-ss.png', level : 0},
                            {key : 'qlbf-ss', name : '千里冰封', icon : '/public/file/img/skill/sx/ss/qlbf-ss.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        ts : {
            name : '天师',
            layout : [
                {
                    type : 'ts',
                    typeName : '天师',
                    name : '法魄术',
                    layout : [
                        [
                            {key : 'xbkl-ts', name : '雪崩昆仑', icon : '/public/file/img/skill/sx/ts/xbkl-ts.png', level : 0},
                            {key : 'qmj-ts', name : '清明诀·天', icon : '/public/file/img/skill/sx/ts/qmj-ts.png', level : 0}
                        ],
                        [
                            {key : 'fty-ts', name : '番天印', icon : '/public/file/img/skill/sx/ts/fty-ts.png', level : 0}, 
                            {key : 'njzs-ts', name : '凝劲之术', icon : '/public/file/img/skill/sx/ts/njzs-ts.png', level : 0}
                        ],
                        [
                            {key : 'qbzs-ts', name : '祛病之术', icon : '/public/file/img/skill/sx/ts/qbzs-ts.png', level : 0}, 
                            {key : 'cxzh-ts', name : '参修造化', icon : '/public/file/img/skill/sx/ts/cxzh-ts.png', level : 0},
                            {key : 'qxzl-ts', name : '群星坠落', icon : '/public/file/img/skill/sx/ts/qxzl-ts.png', level : 0}
                        ]
                    ]
                },{
                    type : 'ts',
                    typeName : '天师',
                    name : '法魄术',
                    layout : [
                        [
                            {key : 'smzh-ts', name : '三昧真火·天', icon : '/public/file/img/skill/sx/ts/smzh-ts.png', level : 0},
                            {key : 'lfhx-ts', name : '流风回雪', icon : '/public/file/img/skill/sx/ts/lfhx-ts.png', level : 0}
                        ],
                        [
                            {key : 'chb-ts', name : '沧海变', icon : '/public/file/img/skill/sx/ts/chb-ts.png', level : 0}, 
                            {key : 'bycx-ts', name : '白云出岫', icon : '/public/file/img/skill/sx/ts/bycx-ts.png', level : 0},
                            {key : 'tjclz-ts', name : '天劫苍雷阵·天', icon : '/public/file/img/skill/sx/ts/tjclz-ts.png', level : 0}
                        ],
                        [
                            {key : 'lsht-ts', name : '雷神护体', icon : '/public/file/img/skill/sx/ts/lsht-ts.png', level : 0}, 
                            {key : 'lhz-ts', name : '莲花葬', icon : '/public/file/img/skill/sx/ts/lhz-ts.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        gw : {
            name : '蛊王',
            layout : [
                {
                    type : 'gw',
                    typeName : '蛊王',
                    name : '图腾术',
                    layout : [
                        [
                            {key : 'bbcsg-gw', name : '百病催生蛊', icon : '/public/file/img/skill/sx/gw/bbcsg-gw.png', level : 0},
                            {key : 'qmj-gw', name : '清明诀·蛊', icon : '/public/file/img/skill/sx/gw/qmj-gw.png', level : 0}
                        ],
                        [
                            {key : 'wd-gw', name : '五毒', icon : '/public/file/img/skill/sx/gw/wd-gw.png', level : 0}, 
                            {key : 'tmjt-gw', name : '天魔解体', icon : '/public/file/img/skill/sx/gw/tmjt-gw.png', level : 0}
                        ],
                        [
                            {key : 'jzg-gw', name : '禁足蛊', icon : '/public/file/img/skill/sx/gw/jzg-gw.png', level : 0}, 
                            {key : 'bgft-gw', name : '百蛊附体', icon : '/public/file/img/skill/sx/gw/bgft-gw.png', level : 0},
                            {key : 'yysxg-gw', name : '怨狱噬心蛊', icon : '/public/file/img/skill/sx/gw/yysxg-gw.png', level : 0}
                        ]
                    ]
                },{
                    type : 'gw',
                    typeName : '蛊王',
                    name : '图腾术',
                    layout : [
                        [
                            {key : 'smzh-gw', name : '三昧真火·蛊', icon : '/public/file/img/skill/sx/gw/smzh-gw.png', level : 0},
                            {key : 'lxqg-gw', name : '灵心千蛊', icon : '/public/file/img/skill/sx/gw/lxqg-gw.png', level : 0}
                        ],
                        [
                            {key : 'xgy-gw', name : '血蛊印', icon : '/public/file/img/skill/sx/gw/xgy-gw.png', level : 0}, 
                            {key : 'hcym-gw', name : '红尘一梦', icon : '/public/file/img/skill/sx/gw/hcym-gw.png', level : 0},
                            {key : 'clfx-gw', name : '重楼飞雪·蛊', icon : '/public/file/img/skill/sx/gw/clfx-gw.png', level : 0}
                        ],
                        [
                            {key : 'dzxy-gw', name : '斗转星移', icon : '/public/file/img/skill/sx/gw/dzxy-gw.png', level : 0}, 
                            {key : 'hgjt-gw', name : '魂蛊浸天', icon : '/public/file/img/skill/sx/gw/hgjt-gw.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        mz : {
            name : '魔尊',
            layout : [
                {
                    type : 'mz',
                    typeName : '魔尊',
                    name : '趋魔术',
                    layout : [
                        [
                            {key : 'dyx-mz', name : '大陨星', icon : '/public/file/img/skill/sx/mz/dyx-mz.png', level : 0},
                            {key : 'qmj-mz', name : '清明诀·魔', icon : '/public/file/img/skill/sx/mz/qmj-mz.png', level : 0}
                        ],
                        [
                            {key : 'fty-mz', name : '番天印·魔', icon : '/public/file/img/skill/sx/mz/fty-mz.png', level : 0}, 
                            {key : 'bdtwz-mz', name : '霸道天威阵', icon : '/public/file/img/skill/sx/mz/bdtwz-mz.png', level : 0}
                        ],
                        [
                            {key : 'mqtsh-mz', name : '魔气吞山河', icon : '/public/file/img/skill/sx/mz/mqtsh-mz.png', level : 0}, 
                            {key : 'tsgx-mz', name : '天煞孤星', icon : '/public/file/img/skill/sx/mz/tsgx-mz.png', level : 0},
                            {key : 'xxym-mz', name : '新星陨灭', icon : '/public/file/img/skill/sx/mz/xxym-mz.png', level : 0}
                        ]
                    ]
                },{
                    type : 'mz',
                    typeName : '魔尊',
                    name : '趋魔术',
                    layout : [
                        [
                            {key : 'smzh-mz', name : '三昧真火·魔', icon : '/public/file/img/skill/sx/mz/smzh-mz.png', level : 0},
                            {key : 'mydl-mz', name : '魔元渡灵', icon : '/public/file/img/skill/sx/mz/mydl-mz.png', level : 0}
                        ],
                        [
                            {key : 'ryzh-mz', name : '日月争辉', icon : '/public/file/img/skill/sx/mz/ryzh-mz.png', level : 0}, 
                            {key : 'qjwl-mz', name : '驱驾魍魉', icon : '/public/file/img/skill/sx/mz/qjwl-mz.png', level : 0},
                            {key : 'jhz-mz', name : '击魂咒·魔', icon : '/public/file/img/skill/sx/mz/jhz-mz.png', level : 0}
                        ],
                        [
                            {key : 'bgsxz-mz', name : '百鬼随行阵', icon : '/public/file/img/skill/sx/mz/bgsxz-mz.png', level : 0}, 
                            {key : 'xkfb-mz', name : '虚空风暴', icon : '/public/file/img/skill/sx/mz/xkfb-mz.png', level : 0}
                        ]
                    ]
                }
            ]
        },
//医系
        ys : {
            name : '医师',
            layout : [
                {
                    type : 'ys',
                    typeName : '医师',
                    name : '医者有道',
                    layout : [
                        [
                            {key : 'ptgj-ys', name : '普通攻击', icon : '/public/file/img/skill/yx/ys/ptgj-ys.png', level : 1}
                        ],
                        [
                            {key : 'hdz-ys', name : '海底针', icon : '/public/file/img/skill/yx/ys/hdz-ys.png', level : 0}, 
                            {key : 'bxyh-ys', name : '冰心玉壶', icon : '/public/file/img/skill/yx/ys/bxyh-ys.png', level : 0}
                        ],
                        [
                            {key : 'dfzr-ys', name : '道法自然', icon : '/public/file/img/skill//yx/ys/dfzr-ys.png', level : 0}, 
                            {key : 'hdnj-ys', name : '黄帝内经', icon : '/public/file/img/skill/yx/ys/hdnj-ys.png', level : 0},
                            {key : 'ywd-ys', name : '阎王敌', icon : '/public/file/img/skill/yx/ys/ywd-ys.png', level : 0}
                        ]
                    ]
                },{
                    type : 'ys',
                    typeName : '医师',
                    name : '天地归一',
                    layout : [
                        [
                            {key : 'wyzd-ys', name : '无影之毒', icon : '/public/file/img/skill/yx/ys/wyzd-ys.png', level : 0},
                            {key : 'shz-ys', name : '赎魂咒', icon : '/public/file/img/skill/yx/ys/shz-ys.png', level : 0},
                            {key : 'pmzy-ys', name : '破魔箴言', icon : '/public/file/img/skill/yx/ys/pmzy-ys.png', level : 0}
                        ],
                        [
                            {key : 'ptbx-ys', name : '菩提本心', icon : '/public/file/img/skill/yx/ys/ptbx-ys.png', level : 0}, 
                            {key : 'hsgq-ys', name : '护身罡气', icon : '/public/file/img/skill/yx/ys/hsgq-ys.png', level : 0}
                        ],
                        [
                            {key : 'qxz-ys', name : '清心咒', icon : '/public/file/img/skill/yx/ys/qxz-ys.png', level : 0}, 
                            {key : 'xfht-ys', name : '仙风护体', icon : '/public/file/img/skill/yx/ys/xfht-ys.png', level : 0},
                            {key : 'cfhy-ys', name : '春风化雨', icon : '/public/file/img/skill/yx/ys/cfhy-ys.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        yx : {
            name : '医仙',
            layout : [
                {
                    type : 'yx',
                    typeName : '医仙',
                    name : '起死回生',
                    layout : [
                        [
                            {key : 'png-yx', name : '破衲功', icon : '/public/file/img/skill/yx/yx/png-yx.png', level : 0},
                            {key : 'yzzx-yx', name : '医者之心·仙', icon : '/public/file/img/skill/yx/yx/yzzx-yx.png', level : 0}
                        ],
                        [
                            {key : 'dehh-yx', name : '渡厄化红', icon : '/public/file/img/skill/yx/yx/dehh-yx.png', level : 0}, 
                            {key : 'qbxzz-yx', name : '祛病消灾咒', icon : '/public/file/img/skill/yx/yx/qbxzz-yx.png', level : 0}
                        ],
                        [
                            {key : 'wwz-yx', name : '无妄咒', icon : '/public/file/img/skill/yx/yx/wwz-yx.png', level : 0}, 
                            {key : 'tdrh-yx', name : '天地人魂', icon : '/public/file/img/skill/yx/yx/tdrh-yx.png', level : 0},
                            {key : 'pjlxz-yx', name : '普济莲心咒', icon : '/public/file/img/skill/yx/yx/pjlxz-yx.png', level : 0}
                        ]
                    ]
                },{
                    type : 'yx',
                    typeName : '医仙',
                    name : '起死回生',
                    layout : [
                        [
                            {key : 'wyzd-yx', name : '无影之毒·仙', icon : '/public/file/img/skill/yx/yx/wyzd-yx.png', level : 0},
                            {key : 'jjlq-yx', name : '橘井流泉', icon : '/public/file/img/skill/yx/yx/jjlq-yx.png', level : 0}
                        ],
                        [
                            {key : 'bdbq-yx', name : '百毒不侵', icon : '/public/file/img/skill/yx/yx/bdbq-yx.png', level : 0}, 
                            {key : 'xlyj-yx', name : '杏林雨霁', icon : '/public/file/img/skill/yx/yx/xlyj-yx.png', level : 0},
                            {key : 'cfhy-yx', name : '春风化雨·仙', icon : '/public/file/img/skill/yx/yx/cfhy-yx.png', level : 0}
                        ],
                        [
                            {key : 'jzhx-yx', name : '九转回心', icon : '/public/file/img/skill/yx/yx/jzhx-yx.png', level : 0}, 
                            {key : 'qfbh-yx', name : '群佛庇护', icon : '/public/file/img/skill/yx/yx/qfbh-yx.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        ss1 : {
            name : '神算',
            layout : [
                {
                    type : 'ss1',
                    typeName : '神算',
                    name : '妙笔生辉',
                    layout : [
                        [
                            {key : 'xwtt-ss1', name : '象罔图腾', icon : '/public/file/img/skill/yx/ss/xwtt-ss.png', level : 0},
                            {key : 'yzzx-ss1', name : '医者之心·神', icon : '/public/file/img/skill/yx/ss/yzzx-ss.png', level : 0}
                        ],
                        [
                            {key : 'fhtt-ss1', name : '风后图腾', icon : '/public/file/img/skill/yx/ss/fhtt-ss.png', level : 0}, 
                            {key : 'xntt-ss1', name : '玄鸟图腾', icon : '/public/file/img/skill/yx/ss/xntt-ss.png', level : 0}
                        ],
                        [
                            {key : 'amz-ss1', name : '安眠咒', icon : '/public/file/img/skill/yx/ss/amz-ss.png', level : 0}, 
                            {key : 'dftd-ss1', name : '道法天地', icon : '/public/file/img/skill/yx/ss/dftd-ss.png', level : 0},
                            {key : 'kftt-ss1', name : '夸父图腾', icon : '/public/file/img/skill/yx/ss/kftt-ss.png', level : 0}
                        ]
                    ]
                },{
                    type : 'ss1',
                    typeName : '神算',
                    name : '妙笔生辉',
                    layout : [
                        [
                            {key : 'wyzd-ss1', name : '无影之毒·神', icon : '/public/file/img/skill/yx/ss/wyzd-ss.png', level : 0},
                            {key : 'fyqq-ss1', name : '风玉敲秋', icon : '/public/file/img/skill/yx/ss/fyqq-ss.png', level : 0}
                        ],
                        [
                            {key : 'jytt-ss1', name : '九婴图腾', icon : '/public/file/img/skill/yx/ss/jytt-ss.png', level : 0}, 
                            {key : 'sxmf-ss1', name : '素心妙法', icon : '/public/file/img/skill/yx/ss/sxmf-ss.png', level : 0},
                            {key : 'pmzy-ss1', name : '破魔箴言', icon : '/public/file/img/skill/yx/ss/pmzy-ss.png', level : 0}
                        ],
                        [
                            {key : 'hytt-ss1', name : '后羿图腾', icon : '/public/file/img/skill/yx/ss/hytt-ss.png', level : 0}, 
                            {key : 'xttt-ss1', name : '刑天图腾', icon : '/public/file/img/skill/yx/ss/xttt-ss.png', level : 0}
                        ]
                    ]
                }
            ]
        },
        mw : {
            name : '明王',
            layout : [
                {
                    type : 'mw',
                    typeName : '明王',
                    name : '妙定乾坤',
                    layout : [
                        [
                            {key : 'rdlgz-mw', name : '燃灯灵光咒', icon : '/public/file/img/skill/yx/mw/rdlgz-mw.png', level : 0},
                            {key : 'yzzx-mw', name : '医者之心·明', icon : '/public/file/img/skill/yx/mw/yzzx-mw.png', level : 0}
                        ],
                        [
                            {key : 'dybk-mw', name : '地狱不空', icon : '/public/file/img/skill/yx/mw/dybk-mw.png', level : 0}, 
                            {key : 'jtlmz-mw', name : '军荼利明咒', icon : '/public/file/img/skill/yx/mw/jtlmz-mw.png', level : 0}
                        ],
                        [
                            {key : 'mxz-mw', name : '明心咒', icon : '/public/file/img/skill/yx/mw/mxz-mw.png', level : 0}, 
                            {key : 'mwjgl-mw', name : '明王金刚力', icon : '/public/file/img/skill/yx/mw/mwjgl-mw.png', level : 0},
                            {key : 'tnsh-mw', name : '天女散花', icon : '/public/file/img/skill/yx/mw/tnsh-mw.png', level : 0}
                        ]
                    ]
                },{
                    type : 'mw',
                    typeName : '明王',
                    name : '妙定乾坤',
                    layout : [
                        [
                            {key : 'wyzd-mw', name : '无影之毒·明', icon : '/public/file/img/skill/yx/mw/wyzd-mw.png', level : 0},
                            {key : 'cxcj-mw', name : '参修禅寂', icon : '/public/file/img/skill/yx/mw/cxcj-mw.png', level : 0}
                        ],
                        [
                            {key : 'bblhz-mw', name : '百八罗汉阵', icon : '/public/file/img/skill/yx/mw/bblhz-mw.png', level : 0}, 
                            {key : 'mzax-mw', name : '明烛暗香', icon : '/public/file/img/skill/yx/mw/mzax-mw.png', level : 0},
                            {key : 'bxyh-mw', name : '冰心玉壶·明', icon : '/public/file/img/skill/yx/mw/bxyh-mw.png', level : 0}
                        ],
                        [
                            {key : 'twbl-mw', name : '天舞宝轮', icon : '/public/file/img/skill/yx/mw/twbl-mw.png', level : 0}, 
                            {key : 'mssk-mw', name : '灭生死苦', icon : '/public/file/img/skill/yx/mw/mssk-mw.png', level : 0}
                        ]
                    ]
                }
            ]
        }
    }

    let selList = [];
    if (typeList && typeList.length > 0){
        for (let i=0; i<typeList.length; i++){
            let type = typeList[i];
            if (list[type]) { 
                let pages = list[type].layout;
                selList = selList.concat(pages);
            }
        }
    }

    fun(selList, selType);
}