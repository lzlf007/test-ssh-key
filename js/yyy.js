var isBrowser = true;
if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion',deviceMotionHandler, false);
}else{
  isBrowser = false;
  alert("对不起，您的手机落伍了，换个高端的手机来试试");	
}

var SHAKE_THRESHOLD = 1000,
    last_update = 0,
	x, y, z, last_x, last_y, last_z,
	isStar = false;
 
function deviceMotionHandler(eventData) {
  var acceleration =eventData.accelerationIncludingGravity;
  var curTime = new Date().getTime();

  if ((curTime - last_update)> 80) {
      var diffTime = curTime -last_update;
      last_update = curTime;
 
      x = acceleration.x;
      y = acceleration.y;
      z = acceleration.z;
 
      var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
       if (speed > SHAKE_THRESHOLD && isStar) {
		    $("#yyy,#yyy_area").remove();
		    $(".u-arrow,.jt_left,.jt_up").show();
		    if($("#audio_btn").attr("url").indexOf("mp3")>1){
			   $("#media").get(0).play();
			   $("#audio_btn").show().attr("class","on");
			}
			setTimeout(function(){daub_over();},1000);
			isStar = false;
       }else{
		    
	   }
      last_x = x;
      last_y = y;
      last_z = z;
    }
}   