
var buttonList = document.querySelector('.buttons');
var showme = document.querySelector('#shown');

buttonList.addEventListener('click', function(event) {
	var number = event.target.textContent;
	showme.textContent = number;
})
