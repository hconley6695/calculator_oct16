
var buttonList = document.querySelector('.buttons');
var showme = document.querySelector('#shown');

function perfCalc(num1, num2) {
		if (num === "+") {
			return num1 + num2;
		} else if (num === "-") {
			return num1 - num2; 
		} else if (num === "*") {
			return num1 * num2;
		} else if (num === "/") {
			return num1 / num2;
		} else {
			return "I don't know what you are doing!"
		}
}

function clearout() {
	showme.textContent = " ";
}

buttonList.addEventListener('click', function(event) {
	var num = event.target.textContent;
	showme.textContent = num;

	// if (num >= 0) {
		
	// }

	// var num1 = Number(num);
	// console.log(num1);

	// var num2 = Number(num);
	// console.log(num2);
	
	if (num === "C") {
		clearout();
	}



});


