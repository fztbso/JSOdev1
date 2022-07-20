let userName = prompt("Adınızı giriniz.")
let myName = document.querySelector("#myName")
myName.innerHTML = userName

document.getElementById("myClock").innerHTML = Date();