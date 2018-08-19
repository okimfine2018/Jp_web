  function getScrollTop(){ 
                    var scrollTop=0; 
                    if(document.documentElement&&document.documentElement.scrollTop){ 
                        scrollTop=document.documentElement.scrollTop; 
                    }else if(document.body){ 
                        scrollTop=document.body.scrollTop; 
                    } 
                    return scrollTop; 
                } 
                document.onscroll = function(){
                 if ( getScrollTop()>=350) {

                        document.getElementById("gotop").style.display = "";

                 }

                    if ( getScrollTop()<350) {

                        document.getElementById("gotop").style.display = "none";

                 }
                
                }