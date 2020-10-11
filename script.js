var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body  = document.getElementById("grad")

// INITIAL CODE BEFORE REFACTOR

// color1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")"
// });
// color2.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")"
// });
//-----------------------------------------------------//

//REFACTORED CODE

function setGrad() {
    body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")"
    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGrad)
color2.addEventListener("input", setGrad)

// Also could use "oninput" on html. oninput="setGrad()"
//     <input oninput="setGrad()" class="color1" type="color" name="color1" value="#00ff00">
//     <input oninput="setGrad()" class="color2" type="color" name="color2" value="#ff0000">