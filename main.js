"use strict";
var num1, num2, operator;
var buttonList = document.querySelector('.buttons');
var showme = document.querySelector('#shown');


function clearout() {
	showme.textContent = " ";
}

function setValueOne() {
	num1 = Number(document.getElementById('btn').value);
	console.log(num1);
	//return num1;
}

function setValueTwo () {
	num2 = Number(document.getElementById('btn').value);
	console.log(num2);
	//return num2;
}

function getOperator() {
	operator = document.getElementsByClassName('other');
	console.log(operator);
	//return operator;
}

function perfCalc(operator, num1, num2) {
	var response;
	if (operator === "+") {
		response = num1 + num2;
	} else if (operator === "-") {
		response = num1 - num2; 
	} else if (operator === "*") {
		response = num1 * num2;
	} else if (operator === "/") {
		response = num1 / num2;
	} else {
		response = "I don't know what you are doing!"
	}
	showme.textContent = response;
}

buttonList.addEventListener('click', function(event) {
	var type = event.target.textContent;
	showme.textContent = type;
	console.log(type);

	
	if (type === "C") {
		clearout();
	} else if (type === "+" || type === "-" || type === "*" || type === "/") {
		getOperator();
	} else if (type === "=") {
		perfCalc();
	} else if (type === 'number') {
		setValueOne();
	} else {
		return "I don't know what the hell I'm doing!"
	}

});


