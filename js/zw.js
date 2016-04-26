
var times = 0,setT;
function add_time(){times++;}

$("#zw_area").get(0).addEventListener("touchstart",function(event){
	 event.stopPropagation();
	 event.preventDefault();
	setT = setInterval("add_time()",1000);
},false);

$("#zw_area").get(0).addEventListener("touchend", function (event){
	clearInterval(setT);
	if(times>1){
	       $("#zw_bg").remove();
		   $("#zw_area").remove();
		    $(".u-arrow,.jt_left,.jt_up").show();
		    if($("#audio_btn").attr("url").indexOf("mp3")>1){
			   $("#media").get(0).play();
			   $("#audio_btn").show().attr("class","on");
			}
			setTimeout(function(){daub_over();},1000);	
	};
	
},false);