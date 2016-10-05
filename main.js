
var buttonList = document.querySelector('.buttons');
var showme = document.querySelector('#screen');

buttonList.addEventListener('click', function(event) {
	var number = event.target.textContent;
	showme.textContent = number;
})
