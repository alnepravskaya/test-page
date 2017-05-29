var notClick = document.getElementsByClassName('notClick');
var markClick = function (e) {
	var parentnotClick = e.target.parentNode;
	parentnotClick.classList.add("markedAnswer");
	e.preventDefault();

};
for (var i = 0; i < notClick.length; i++) {
	notClick[i].addEventListener('click', markClick, false);
}
var undo = document.getElementsByClassName('undo');
var markable = function (e) {
	var parentnotClick = e.target.parentNode;
	parentnotClick.classList.remove("markedAnswer");
	parentnotClick.classList.add("markableAnswer");
	e.preventDefault();


};
for (i = 0; i < undo.length; i++) {
	undo[i].addEventListener('click', markable, false);
}
var hamburger = document.getElementById('hamburger');
var menuOpen = function (e) {
	var body = document.body;
	body.classList.add("menuOpenSite");
	e.preventDefault();
	return false;
};

hamburger.addEventListener('click', menuOpen, false);

var close = document.getElementById('close');
var menuClose = function (e) {
	var body = document.body;
	body.classList.remove("menuOpenSite");
	e.preventDefault();
	return false;

};

close.addEventListener('click', menuClose, false);


var popupButton=$('.popupButton');
var popupOpen=function (e) {
	 var valuepopuptype= $(e.target).attr( "popuptype");
	$('.popup[popuptype='+valuepopuptype+']').fadeIn(300);
	var body=$('body');
	body.addClass('popupOpen');


}
$('body').on('click','.popupButton',popupOpen);

var popupclose = function (e) {
	$('body').removeClass('popupOpen');
	$('.popup').fadeOut(300);
	e.preventDefault();
	e.stopPropagation();

};

$('body').on('click','.popup .close , .overlay' ,popupclose);

