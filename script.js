alert("Welcome to My Portfolio Website!");

document.getElementById("date").innerHTML =
"Today's Date: " + new Date().toLocaleDateString();
function darkMode() {
    document.body.classList.toggle("dark");
}