let Exports=new Object();

function rList(list, skillList){
    for (let i in list){
        if (list[i]['layout']){
            rList(list[i]['layout'], skillList);
        }
        else {
            if (list[i] && list[i].length > 0){
                for (let a=0; a<list[i].length; a++){
                    skillList.push(list[i][a]);
                }
            }
        }
    }
}

Exports.export = function(list, type){
    if (!list) return;
    let id = type.type;
    let name = type.name;
    let fileName = name + ".txt";
    let txtStr = "";
    txtStr += (name+"\r\n \r\n \r\n ");

    let skillList = [];

    rList(list, skillList);
    if (skillList.length > 0){
        for (let i=0; i<skillList.length; i++){
            txtStr += skillList[i].name + " —— " +  skillList[i].level + "级";
            txtStr += "\r\n\r\n";
        }
        txtStr += "\r\n";
    }
    this.downloadFile(txtStr,fileName);
}

Exports.downloadFile = function (content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};
