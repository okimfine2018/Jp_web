
var img=document.getElementById("playBox_img");
var num=1;
function lbt(){


if (num==6) {
	num=1;
}else{
img.src="images/0"+num+".jpg";

num++;
}

}
window.setInterval("lbt()",2000);