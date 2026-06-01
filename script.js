alert("Welcome to My Portfolio Website!");

document.getElementById("date").innerHTML =
"Today's Date: " + new Date().toLocaleDateString();
function darkMode() {
    document.body.classList.toggle("dark");
}
let count = localStorage.getItem("visits");

if(count == null){
    count = 1;
}
else{
    count++;
}

localStorage.setItem("visits", count);

document.getElementById("counter").innerHTML =
"Visitors: " + count;