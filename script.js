"use strict";

function myFunction() {
  let myTop = document.getElementById("myTopnav");

  myTop.className === "topnav header"
    ? (myTop.className += " responsive")
    : (myTop.className = "topnav header");
}
