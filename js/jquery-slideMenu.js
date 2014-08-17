$(function(){
	
	/*------------------------------------*\
		レスポンス時のメニュー
	\*------------------------------------*/	
	
	//menu関数
	//windowのサイズによってnavの移動範囲を取得し設定する
	function menu(){
		$gnav = $(".g-nav");
		$navWidth = $gnav.width();
		$navWidth = "-" + $navWidth + "px";
		$gnav.css("right", $navWidth);
		
		//toggle
		var flag = 0;
		$(".menu-btn").on("click",function(){
			if(flag == 0){
				$gnav.stop().animate({
					right: 0
				},400)
				flag = flag+1;
			}else{
				$gnav.stop().animate({
					right: $navWidth
				},400)
				flag = 0;
			}
		})
	}
	
	//画面がリサイズされたらmenu関数を実行
	var timer = false;
	$(window).resize(function() {
	    if (timer !== false) {
	        clearTimeout(timer);
		}
		timer = setTimeout(function() {
			menu();
    	}, 200);
	});
})