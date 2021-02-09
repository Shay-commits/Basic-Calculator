
let operand = "";
let firstDigit = "";
let display = document.getElementById('display');
let calculate = document.getElementById('equals');
let total = null;
let secondDigit = "";



function operate () {

  let secondDigitt =  parseInt(secondDigit)

  if ( operand == '*' ) {
    total = multiply(firstDigit,secondDigitt)
    operand = ""
    firstDigit = total
    secondDigit = ""
  }

  else if (operand == '+') {

    total = add(firstDigit,secondDigitt);
    operand = ""
    firstDigit = total
    secondDigit = ""
  }

  else if (operand == '-') {

   total = subtract(firstDigit,secondDigitt)
   operand = ""
   firstDigit = total
   secondDigit = ""
  }

  else if (operand == '/') {
    total = divide(firstDigit,secondDigitt)
    operand = ""
    firstDigit = total
    secondDigit = ""
  }

  else {
    return total
  }

  display.innerHTML = `${total}`
}

calculate.addEventListener('click', operate )



// adding type function to digits on click
function type(e) {
  if (operand == "") {
    display.innerHTML += `${e.target.outerText}`
    console.log(`${e.target.outerText}`)
  }

  else {
    secondDigit += `${e.target.outerText}`
    display.innerHTML = ""
    display.innerHTML = secondDigit;
  }



}


let keys = document.getElementsByClassName('click')

for (i=0; i < keys.length; i++)  {

keys[i].addEventListener('click', type)


}

//adding action function to operators on click

function action(e) {
  firstDigit = parseFloat(display.innerHTML)
  operand = e.target.outerText; }

let operators = document.getElementsByClassName('operator')

for (i=0; i < operators.length; i++)  {

operators[i].addEventListener('click', action)


}

// percentage button function
function percentage() {
  let initialNumber = parseFloat(display.innerHTML) / 100;
  display.innerHTML = initialNumber;
}

let percentageElement = document.getElementById('percentage');
percentageElement.addEventListener('click', percentage);


// Minus plus button function
function changeSign() {

  let initialNumber = parseFloat(display.innerHTML) * -1
  display.innerHTML = initialNumber;

}

let minusplusElement = document.getElementById('minusplus')
minusplusElement.addEventListener('click', changeSign)

// Clearing the calculator display
function wipeScreen() {
  display.innerHTML = "";
  firstDigit = "";
  operand= "";
  secondDigit = "";
}

let clear = document.getElementById('AC');
clear.addEventListener('click', wipeScreen)


// Operators
function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}
