// var num1 = document.querySelector('#num1');
// console.log(num1);
// var btn = document.querySelector('.btn');
// var number = btn.textContent;
// var numVal = number.value;
// // console.log(what);
// var all = document.querySelector('body');


// all.addEventListener('click', showNumber);

// function showNumber() {
// 	var insideScreen = document.getElementsbyClassName("screen").innerHTML;
// 	return insideScreen;
// }

var buttonList = document.querySelector('.buttons');

buttonList.addEventListener('click', function(event) {
	// event.currentTarget === buttonList;
	// event.Target === button that was clicked

	var number = event.target.textContent;
	console.log(number);

	function insideScreen() {
		var showme = document.getElementbyId('#screen').innerHTML;
		showme = number;
		return showme;
	};

	insideScreen();
})
