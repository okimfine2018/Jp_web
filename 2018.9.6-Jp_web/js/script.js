window.onload=function(){
	var lunbotu_img=document.getElementById("lunbotu_img")
	
	
	dsq()
	dsq1()
}


function dsq1(){
	var i=1
	var tupian6_background=document.getElementById("tupian6_background").className
			t2=window.setInterval(refreshCount1, 1500);
			function refreshCount1(){
					if(i>=7){
						i=1
					}

						n=i-1
						b=i+1
				document.getElementById('tupian6_background5').style.opacity='0.4';
				document.getElementById('tupian6_background6').style.opacity='0.4';
						if(n>0&&n<=6&&b>0&&b<7){
							var tupian6_backgroundn=tupian6_background+n
							var tupian6_backgroundb=tupian6_background+b
				document.getElementById('tupian6_background5').style.opacity='0.4';
				document.getElementById('tupian6_background6').style.opacity='0.4';	
				document.getElementById(tupian6_backgroundn).style.opacity='0.4';
				document.getElementById(tupian6_backgroundb).style.opacity='0.4';

						}
				var tupian6_backgroundi=tupian6_background+i
			
				document.getElementById(tupian6_backgroundi).style.opacity='0';
				
				i++

			}

}


function dsq(){
	t1=window.setInterval(refreshCount, 1500);


    function refreshCount() {
     var alt=lunbotu_img.alt
    
    if(alt>5){
    	alt=0;
    }
     alt++
     lunbotu_img.src="./images/0"+alt+".jpg"
     lunbotu_img.alt=alt
 
    }
}	

// 清除定时器t1
function cInterval(){
	window.clearTimeout(t1);
}// 清除定时器t1


function lunbotu_jiantou_onclick_l(){
var alt=lunbotu_img.alt
if(alt==1){
	alt=6
}else{
	alt--
}
	lunbotu_img.src="./images/0"+alt+".jpg"
	lunbotu_img.alt=alt
}


function lunbotu_jiantou_onclick_r(){
 var alt=lunbotu_img.alt
 if(alt==6){
	alt=1
}else{
	alt++
}
 	lunbotu_img.src="./images/0"+alt+".jpg"
	lunbotu_img.alt=alt
}