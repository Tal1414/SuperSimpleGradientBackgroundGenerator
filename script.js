var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementsByTagName('body');
var h3 = document.querySelector('h3');

function backgroundColor() {
	body[0].style.background = "linear-gradient(to right, "
	 + color1.value +", " + color2.value +")";

	 h3.innerHTML = body[0].style.background + ";";
}

color1.addEventListener("input", backgroundColor);
color2.addEventListener("input", backgroundColor);