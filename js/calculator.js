// !!!!!!!!!!!!!!!!!!!!!!! dont forget to (check = 1) in decimal function !!!!!!!!!!!!
// https://github.com/rwilson-ucvts/principles-pocket-calculator-skeleton
var number = 0;
var check = 0;
var variable1 = 0;
var variable2 = 0;
var variableV1 = 0;
var variableV2 = 0;
var calculate = 0;
var scientific = 0;
var scientificNote = 0;
var operation = 0;
var decimal = 0;

//number = 0 (first number)(for numbers)
//number = 1 (second number)(for numbers)
//check = 1 (are in decimals and scientific notation should turn off)(for numbers)
//operation = 1 (the last clicked operator was addition)(for operators & equals)
//operation = 2 (the last clicked operator was subtraction)(for operators & equals)
//operation = 3 (the last clicked operator was multiplication)(for operators & equals)
//operation = 4 (the last clicked operator was division)(for operators & equals)
//decimal = x (number of decimal places)(for numbers and operators)
//scienific = 1 (number is exponential / scietific notation)(for numbers)

function AC() {
  var ac = document.getElementById("output");
  ckeck = 0;
  number = 0;
  variable1 = 0;
  variable2 = 0;
  variableV1 = 0;
  variableV2 = 0;
  calculate = 0;
  scientific = 0;
  scientificNote = 0;
  operation = 0;
  decimal = 0;
  ac.innerHTML = (`${calculate}`)
}

function zero() {
  var zero = document.getElementById("output");
  if (decimal > 0) {
    if (number == 0) {
      variableV1 = (variable1 * 10);
      variable1 = variableV1;
      variable1 = variable1 / Math.pow(10, decimal);
      calculate = variable1;
      decimal++;
      zero.innerHTML = (`${calculate}`)
    } else if (number == 1) {
      variableV2 = (variable2 * 10);
      variable2 = variableV12;
      variable2 = variable2 / Math.pow(10, decimal);
      calculate = variable2;
      decimal++;
      zero.innerHTML = (`${calculate}`)
    }
  } else if (calculate.toString().length >= 9 || scientific == 1) {
    if (number == 0) {
      scientific = 1;
      variableV1 = (variableV1 * 10);
      variable1 = variableV1;
      variable1 = variable1.toExponential(4)
      calculate = variable1;
      zero.innerHTML = (`${calculate}`)
      calculate = variableV1
    } else if (number == 1) {
      scientific = 1;
      variableV2 = (variableV2 * 10);
      variable2 = variableV2;
      variable2 = variable2.toExponential(4)
      calculate = variable2;
      zero.innerHTML = (`${calculate}`)
      calculate = variableV2
    }
  } else if (calculate.toString().length >= 3 && calculate.toString().length < 9) {
    if (number == 0) {
      variableV1 = (variableV1 * 10);
      variable1 = variableV1;
      calculate = variable1.toLocaleString();
      zero.innerHTML = (`${calculate}`)
      calculate = variableV1;
    } else if (number == 1) {
      variableV2 = (variableV2 * 10);
      variable2 = variableV2;
      calculate = variable2.toLoaleString();
      zero.innerHTML = (`${calculate}`)
      calculate = variableV2;
    }
  } else if (number == 0) {
    variableV1 = (variable1 * 10);
    variable1 = variableV1;
    calculate = variable1;
    zero.innerHTML = (`${calculate}`)
  } else if (number == 1) {
    variableV2 = (variable2 * 10);
    variable2 = variableV2;
    calculate = variable2;
    zero.innerHTML = (`${calculate}`)
  }
}

function one() {
  var one = document.getElementById("output");
  if (number == 0) {
    variable1 = ((variable1 * 10) + 1);
    calculate = variable1;
    console.log(calculate);
    console.log(check);
    one.innerHTML = (`${calculate}`)
  } else if (number == 1) {
    variable2 = ((variable2 * 10) + 1);
    calculate = variable2;
    one.innerHTML = (`${calculate}`)
  }
}
