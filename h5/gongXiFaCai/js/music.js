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