	
//获取当前日期
function Cdate() {
    //获取日期
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    //获取时间
    var hour = "00" + date.getHours();
    hour = hour.substr(hour.length - 2);
    hour1=  date.getHours()+1;
    var minute = "00" + date.getMinutes();
    minute = minute.substr(minute.length - 2);
    var second = "00" + date.getSeconds();
    second = second.substr(second.length - 2);
    //获取当前星期
    var week = date.getDay();
    var week1 = date.getDay();
    switch (week) {
        case 1: week = "星期一 "; break;
        case 2: week = "星期二 "; break;
        case 3: week = "星期三 "; break;
        case 4: week = "星期四 "; break;
        case 5: week = "星期五 "; break;
        case 6: week = "星期六 "; break;
        case 0: week = "星期日 "; break;
        default: week = ""; break;
    }
    
     switch (week1) {
        case 1: week1 = "月曜日 "; break;
        case 2: week1 = "火曜日 "; break;
        case 3: week1 = "水曜日 "; break;
        case 4: week1 = "木曜日 "; break;
        case 5: week1 = "金曜日 "; break;
        case 6: week1 = "土曜日 "; break;
        case 0: week1 = "日曜日 "; break;
        default: week1 = ""; break;
    }
    //输入的内容
    document.getElementById("Chinanowdate").innerHTML = "<span>中国時間：</span>"+year + "年" + month + "月" + day+"日"+" "+hour+":"+minute+":"+second+" "+week;
    document.getElementById("Jpnowdate").innerHTML = "<span>日本時間：</span>"+year + "年" + month + "月" + day+"日"+" "+hour1+":"+minute+":"+second+" "+week1;
}
setInterval("Cdate()", 1000);  //每1000毫秒更新一次