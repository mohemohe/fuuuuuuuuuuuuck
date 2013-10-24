// ==UserScript==
// @name        fucker
// @namespace   net.ghippos.fucker
// @description yep, im page fucker.
// @include     *
// @version     1
// ==/UserScript==

(function() {
    //Zenkaku 
	document.body.innerHTML = document.body.innerHTML.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(str) {
		return String.fromCharCode(str.charCodeAt(0) - 0xFEE0);
	});
	
	//wired.jp
	document.body.innerHTML = document.body.innerHTML.replace(/ヴァ/g, function(str) {
		return 'バ';
	});
	document.body.innerHTML = document.body.innerHTML.replace(/ヴィ/g, function(str) {
		return 'ビ';
	});
	document.body.innerHTML = document.body.innerHTML.replace(/ヴェ/g, function(str) {
		return 'ベ';
	});
	document.body.innerHTML = document.body.innerHTML.replace(/ヴォ/g, function(str) {
		return 'ボ';
	});
})();