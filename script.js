var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var span = document.getElementsByTagName("span");
var button2 = document.getElementsByClassName("del");

//adding new items with the delete button
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
  	btn.innerHTML = "Delete";
  	btn.onclick = deleteElement;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
  	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
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


function deleteElement(event) {
	event.target.removeEventListener("click", deleteElement, false);
	event.target.parentNode.remove();
}

function StrikeThroughListItem() {
	return this.classList.toggle("done");
}

for (var i = 0; i < button2.length; i++) {
	button2[i].addEventListener("click", deleteElement, false);
}

for (var i = 0; i <= span.length; i++) {
	span[i].addEventListener("click", StrikeThroughListItem);
}

