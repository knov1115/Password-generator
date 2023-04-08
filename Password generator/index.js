const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("button-el")
let passwordOne = document.getElementById("result-btn1")
let passwordTwo = document.getElementById("result-btn2")
let copyButton = document.getElementById("result-btn1")
let copiedToClipboard = document.getElementById("copiedToClipboard-el")


function generatePassword() {
    passwordOne.innerHTML = ""
    passwordTwo.innerHTML = ""
    for (let i = 0; i < 15; i++) {
        passwordOne.textContent += characters[Math.floor(Math.random()*characters.length) + 1]
        passwordTwo.textContent += characters[Math.floor(Math.random()*characters.length) + 1]
    }
    
}

function copyPasswordOne() {
    const copiedPasswordOne = document.getElementById("result-btn1").textContent
    navigator.clipboard.writeText(copiedPasswordOne)
    copiedToClipboard.textContent = "Copied to clipboard"
}

function copyPasswordTwo() {
    const copiedPasswordTwo = document.getElementById("result-btn2").textContent
    navigator.clipboard.writeText(copiedPasswordTwo)
    copiedToClipboard.textContent = "Copied to clipboard"
}