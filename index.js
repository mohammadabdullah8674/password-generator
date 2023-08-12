const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@","#","$","%","&","*","(",")","_","-","+","=","<",">","."];

const arrowRight = document.querySelector('.arrow-right')
const arrowLeft = document.querySelector('.arrow-left')
const errorEl = document.querySelector('.error')
let scroll = document.querySelector('#scroll')
let range = document.querySelector('#range')
let firstPwdEl = document.getElementById('pwd-1')
let secondPwdEl = document.getElementById('pwd-2')

let lengthOfArray = characters.length;

const getRandom = ()=> Math.floor(Math.random() * lengthOfArray)


function getPassword() {
   let passwordRange = range.value;
  if (passwordRange) {
    let pwd1 = generatePassword(passwordRange)
    let pwd2 = generatePassword(passwordRange)
    firstPwdEl.textContent = pwd1
    secondPwdEl.textContent = pwd2
  } else {
      showError();
  }
}
function showError(){
    errorEl.classList.toggle('hide')
}

 
function generatePassword(r) {
    let password = ""
    for(let i=1; i<=r; i++) {
        password += characters[getRandom()]
    }
    return password
}

function copy(e) {
    // console.log(firstPwdEl.textContent)
    console.log(e)

    if (e == "1") {
        navigator.clipboard.writeText(firstPwdEl.textContent);
        // console.log(firstPwdEl);
    } else {
        navigator.clipboard.writeText(secondPwdEl.textContent);
        // console.log(secondPwdEl);
    }
    
}

arrowRight.addEventListener('click',()=> {
    scroll.classList.remove("hide") 
})
arrowLeft.addEventListener('click',()=> {
    showError()
    scroll.classList.add("hide") 
})


console.log(range.value);
