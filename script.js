var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function liEvent(){
	for(i=0;i<li.length;i++){
		li[i].addEventListener("click",cross);
	}
}

function cross(){
	this.classList.toggle("done");
}

liEvent();

function deleteListElement(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove();
	}
}

deleteListElement();

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement('button');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button)
	button.innerHTML = "delete";
	input.value = "";

	liEvent();
	deleteListElement();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);