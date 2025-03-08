const uInput = document.getElementById("text-input");
const fresult = document.getElementById("result")

const chkBtn = document.getElementById("check-btn");
chkBtn.addEventListener("click",()=>{let userInput = uInput.value;
if (uInput.value === ""){
  alert("Please input a value")
}

let answer= userInput.toLowerCase().replace(/[^a-z0-9]/g,'');

let reverse= answer.split("").reverse().join("")

if(answer===reverse){
  fresult.innerText = uInput.value+" is a palindrome."
} else {
  fresult.innerText = uInput.value+" is not a palindrome."
}


})