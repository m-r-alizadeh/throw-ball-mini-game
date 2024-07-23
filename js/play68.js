function play68_init() {
	updateShare(0);
}

function play68_submitScore(score) {
	updateShareScore(score);
	Play68.shareFriend(); 
}

function updateShare(bestScore) {
	
	var descContent = "چقدر پرت می کنید";
	switch(true){
		case bestScore > 1500 :
			shareTitle = bestScore + " متر،  سکته قلبی ، که به اوج زندگی رسیده است ، در تاریخ ثبت شده است!";
			break;
		case bestScore > 1200 :
			shareTitle = bestScore + " متر،  توقف بعدی در مریخ！";
			break;
		case bestScore > 900 :
			shareTitle = bestScore + " متر،  من به یک ستاره کوچک تبدیل شده ام و رفته ام!";
			break;
		case bestScore > 700 :
			shareTitle = bestScore + " متر،  این ریتم جاذبه زمین است!";
			break;
		case bestScore > 500 :
			shareTitle = bestScore + " متر،  از سبک خود خارج شوید!";
			break;
		case bestScore > 300 :
			shareTitle = bestScore + " متر،  خارق العاده!";
			break;
		case bestScore > 100 :
			shareTitle = bestScore + " متر،  مقصد کجاست؟";
			break;
		case bestScore > 0 :
			shareTitle = bestScore + " متر،   اگر سردرد دارم از من نپرس！";
			break;
		default: shareTitle = "چقدر پرت می کنید";
		
	}
	document.title = shareTitle + ' | شبکه هزاره';
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}

function updateShareScore(bestScore) {
	updateShare(bestScore);
}