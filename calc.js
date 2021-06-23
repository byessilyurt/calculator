const displayedNum = document.querySelector(".displayedNum")
const buttons = document.querySelectorAll(".button")
const buttonOp = document.querySelectorAll(".button operator")
const clearButton = document.querySelectorAll(".clear")
displayedNum.defaultValue = "0"
let firstNum = null
let operator = null
let secondNum = null
let resultValue = 0



function add (firstNum, secondNum) {
    resultValue =  (firstNum + secondNum)
    return resultValue 
}
function subtract (firstNum, secondNum) {
    resultValue = (firstNum - secondNum)
    return resultValue 
}
function multiply (firstNum, secondNum) {
    resultValue = (firstNum * secondNum)
    return resultValue 
}
function divide(firstNum, secondNum){
    resultValue = (firstNum / secondNum)
    console.log(resultValue)
    return resultValue 
}
function operatorFunc(firstNum, operator, secondNum) {
    if (operator == "+"){
        return add(firstNum,secondNum)
    }
    else if (operator == "-"){
        return subtract(firstNum,secondNum)
    }
    else if (operator == "*"){
        return multiply(firstNum,secondNum)
    }
    else if (operator == "/"){
        return divide(firstNum,secondNum)
    }
}


buttons.forEach( button => button.addEventListener(
    "click", display
))

function display(e) {
    let clickedButtonValue = e.target.getAttribute('data-key')
    if(e.target.getAttribute('class') === 'button operator' ){
        if(firstNum == null){
        firstNum = parseFloat(displayedNum.value)
        operator = clickedButtonValue
        displayedNum.value = ""
        }else if(clickedButtonValue != '='){
            secondNum = parseFloat(displayedNum.value)
            firstNum = parseFloat(operatorFunc(firstNum, operator,secondNum))
            operator = clickedButtonValue
            displayedNum.value = ""
            }else{
                secondNum = parseFloat(displayedNum.value)
                let result = parseFloat(operatorFunc(firstNum, operator,secondNum))
                displayedNum.value= "Result is: " + result
                buttons.forEach(button => button.setAttribute("disabled", true))
            }    
        }
    else{
        if(displayedNum.value == "0") displayedNum.value= ""
        displayedNum.value += clickedButtonValue
        console.log("numbers", clickedButtonValue)
    }

}


clearButton.forEach(clearButton => clearButton.addEventListener('click', function(e){
    displayedNum.value = "0"
    firstNum = null
    secondNum = null
    console.log(displayedNum.value)
    buttons.forEach(button => button.removeAttribute("disabled"))
}
))
