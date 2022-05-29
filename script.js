'use strict';

function myFunction() {
  let myTop = document.getElementById("myTopnav");

	if (myTop.className === "topnav header") {
		myTop.className += " responsive";
	} else {
		myTop.className = "topnav header";
	}
}