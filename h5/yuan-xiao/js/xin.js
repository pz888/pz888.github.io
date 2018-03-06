// 在全局范围内创建主动画控制器与子动画控制器
var myAC_main1 = new animateControl("main1_ani_");
//		var myAC_child1 = new animateControl("child1_ani_");
				// 在文档结构加载完成之后，载入swiper幻灯片，并初始化所有的动画控制器
		$(document).ready(function(){
			// 第 1 个子swiper幻灯片
//			var mySwiper_child1 = new Swiper('.swiper-container-child1',{
//				direction: 'horizontal',
//				grabCursor : true,
//				loop : true,
//				onInit: function(swiper){
//					myAC_child1.init(swiperAnimateParam_child1, swiper);
//				},
//				onSlideChangeEnd: function(swiper){
//					myAC_child1.play();
//				},
//			});
						// 主swiper幻灯片
			var mySwiper = new Swiper('.swiper-container-main1',{
				direction: 'vertical',
				grabCursor : true,
				loop: true,
				nextButton: '.swiper-button-next',
				onInit: function(swiper){
					myAC_main1.init(swiperAnimateParam_main1, swiper);
//					myAC_main1.addChild(2, myAC_child1);
//					myAC_main1.addChild(3, myAC_child2);
//					myAC_main1.addChild(4, myAC_child3);
//					myAC_main1.addChild(5, myAC_child4);
					myAC_main1.play(); // 如果页面中未使用Loading效果，则必须取消本行代码的注释，以开启myAC_main1主动画控制器中动画的播放
				},
				onSlideChangeEnd: function(swiper){
					myAC_main1.play();
				},
			});
				});
		//音乐停放
var music = document.getElementById("music");
var music_pic = music.getElementsByClassName('music_pic')[0];
var aud = music.getElementsByClassName('aud')[0];
//音乐开关
var music_sta = 1;
 music.onclick = function(){
 	if (music_sta==1) {
 		music_pic.style.animation = 'none';
 		aud.pause();
 		music_sta = 2;
 	 	}else if (music_sta == 2) {
 		music_pic.style.animation = 'music 2s linear infinite';
 		aud.play();
 		music_sta = 1;
 	 	}}