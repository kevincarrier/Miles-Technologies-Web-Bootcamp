let operation = "add";

window.onload = clearValues();

document.getElementById("btnClear").addEventListener("click", clearValues);
document.getElementById("btnCalculate").addEventListener("click", calculate);

function clearValues() {
  document.getElementById("lblResult").classList.add("hideResult");
  document.getElementById("txtFirstNumber").value = "";
  document.getElementById("txtSecondNumber").value = "";
  document.getElementById("txtFirstNumber").classList.remove("invalid-input");
  document.getElementById("txtSecondNumber").classList.remove("invalid-input");
  document.getElementById("txtFirstNumber").focus();
  document.getElementById("add").checked = true;
}

function calculate() {
  let firstNum = parseInt(document.getElementById("txtFirstNumber").value);
  let secondNum = parseInt(document.getElementById("txtSecondNumber").value);

  if(isNaN(firstNum) || isNaN(secondNum)){
    alert("Both inputs need to be a valid number. Please try again.");
  }
  else if (operation === "divide" && secondNum === 0) {
    alert("You cannot divide by 0. Please change the second number.");
  } else {
    let finalAnswer = "";
    switch (operation) {
      case "add":
        finalAnswer = `The result of adding ${firstNum} and ${secondNum} is ${firstNum + secondNum}`;
        break;
      case "subtract":
        finalAnswer = `The result of subtracting ${firstNum} and ${secondNum} is ${firstNum - secondNum}`;
        break;
      case "multiply":
        finalAnswer = `The result of multiplying ${firstNum} and ${secondNum} is ${firstNum * secondNum}`;
        break;
      case "divide":
        finalAnswer = `The result of dividing ${firstNum} and ${secondNum} is ${Math.round((firstNum / secondNum) * 100) / 100}`;
        break;
      default:
        finalAnswer = "";
    }
    document.getElementById(
      "lblResult"
    ).innerHTML = finalAnswer;
    document.getElementById("lblResult").classList = "";
  }
}

var radios = document.querySelectorAll('input[type=radio][name="operation"]');
radios.forEach((radio) =>
  radio.addEventListener("change", () => (operation = radio.value))
);

function validNumber(enteredValue, textboxChanged){
    if(isNaN(parseInt(enteredValue))){
      document.getElementById(textboxChanged).classList.add("invalid-input");
    }
    else{
      document.getElementById(textboxChanged).classList.remove("invalid-input");
    }
}
