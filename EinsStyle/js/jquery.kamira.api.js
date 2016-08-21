function NoMoreIE(){
	if($.browser.msie && $.browser.version <= 9  ){
		$('body').html('<div id="noie" style="background:white;color:black;width:auto;margin:0 auto;text-align:center;padding:20px;vertical-align:middle;box-shadow:white 0 0 5px 10px;font-size:20px;">' +
		'<h2 style="font-size:40px">OOPS! 出錯了!</h2><br>' + 
		'IE瀏覽器不能完全支援本網站<br>' + 
		'請使用以下瀏覽器代替<br><br>' + 
		'IE browser cannot totally support the website.<br>' + 
		'Please use Chrome, Firefox, or Opera instead.<br><br><br><br><a href="http://www.google.com/intl/zh-TW/chrome/browser/"><img src="http://i.imgur.com/oiEkI.png" title="Chrome" /></a><a href="http://moztw.org/"><img src="http://i.imgur.com/to9Lr.png" title="Firefox" /></a><a href="http://www.opera.com/"><br><img src="http://i.imgur.com/r1Xbh.png" alt="" title="Opera" /></a><a href="http://www.apple.com/safari/"><img src="http://i.imgur.com/J1d7s.png" alt="" title="Safari" /></a></div>');
		$('#noie a').css('padding','10px');
		$('#noie a img').css('width','250px');
	}
}

function AprilFoolsDay(){
    var a=new Date();
    var m=a.getMonth()+1;
    var d=a.getDate();
    if( (m == 4) && (d == 1) ) {
      $('body').prepend('<div id="noie" style="height:' + $(window).height()  + 'px;background:white;color:black;width:auto;margin:0 auto;text-align:center;padding:20px;vertical-align:middle;box-shadow:white 0 0 5px 10px;font-size:20px;">' +
                '<h2 style="font-size:40px">401 Fools Found!</h2><hr>');
     }
}
