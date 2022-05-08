console.log("Working");

//we can DOM manipulation for making dynamic changes.
//we can make changes by accesing an element via: id's,tags and classname.
const element1 = document.getElementById("text");
console.log(element1);
//document.getElementById("text").innerHTML = "Your buddy!!"

element1.innerHTML = "Good to hear that you are fine";
console.log(element1.innerHTML);

const element2 = document.getElementsByClassName("trip");
console.log(element2[0].innerText);
element2[0].innerText = "SIGNIN"
console.log(element2[0].innerText);

const element3 = document.getElementsByTagName("h1");
console.log(element3);
element3[0].style.color = "orange" 
//element3[1].style.color = "blue" 
//element3[2].style.color = "purple" 

function changeText(){
    const trying1 = document.getElementsByClassName("trip");
    trying1[0].innerText = "Welcome to home";
    console.log(trying1);
}
