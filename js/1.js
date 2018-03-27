let c = 0;
let win_height = window.innerHeight;
let total = $('.box').length;
let win_width = window.innerWidth;
let jiChuKuanDu =Math.round(win_width / total) ;
$('.pr').css('width',jiChuKuanDu);
$('#fenmu').text(total);

$('body').swipeUp(function() {
	c += 1;
	
	if(c == total) {
		c = total - 1;
		return
	}
	
	$('.container .box').eq(c).find('.ani').hide().removeClass('.animated');
	setTimeout(function() {
		$('.container .box').eq(c).find('.ani').show().addClass('.animated')
	}, 300);
	let t = c * -win_height;
	$('.container').css('top', t);
    //	上滑进度条
    let jindu = (c+1)*jiChuKuanDu;
	$('.pr').css('width',jindu);
    //	上滑数字分页器
	let fenzi = c+1;
	$('#fenzi').text(fenzi);
	

	
});
$('body').swipeDown(function() {
	c -= 1;
	if(c == -1) {
		c = 0;
		return
	}
	$('.container .box').eq(c).find('.ani').hide().removeClass('.animated');
	setTimeout(function() {
		$('.container .box').eq(c).find('.ani').show().addClass('.animated')
	}, 300);
	let t = c * -win_height;
	$('.container').css('top', t);
	//	下滑进度条
	let jindu = (c+1)*jiChuKuanDu;
	$('.pr').css('width',jindu);
    //	数字分页器
	let fenzi = c+1;
	$('#fenzi').text(fenzi);
	

	
});
let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmldom = document.getElementsByTagName('html')[0];
let bodydom = document.getElementsByTagName('body')[0];
htmldom.style.fontSize = htmlwidth / 10 + 'px';
bodydom.style.height   = win_height + 'px';
window.addEventListener('resize', (e) => {
	let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmldom.style.fontSize = htmlwidth / 10 + 'px';
	bodydom.style.height   = win_height + 'px';
});
$('#qq').tap(function() {
	window.open("http://wpa.qq.com/msgrd?v=3&uin=312873340&site=qq&menu=yes")
});

//加载页
document.onreadystatechange = function(){
	if(document.readyState == 'complete') {
		$('.lod').css('z-index','-1');
		
	}
}

