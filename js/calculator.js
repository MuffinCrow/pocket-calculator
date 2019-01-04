var check = 0;
var variable1 = 0;
var variable2 = 0;
var variableV1 = 0;
var variableV2 = 0;
var calculate = 0;
var scientific = 0;
var scientificNote = 0;

//check = 0 (first number)(for numbers)
//check = 1 (second number)(for numbers)
//check = 2 (operator after =)(for operators)
//check = 3 (operator after operator)(for operators)
//check = 4 (3 numbers, 6 numbers, 9 numbers)(for numbers)
//scientificNote = 1 (exceeds 9 numbers / scientific notation rounded to second decimal)(for numbers & operators)

function AC() {
  var ac = document.getElementById("output");
  ckeck = 0;
  variable1 = 0;
  variable2 = 0;
  calculate = 0;
  scientific = 0;
  scientificNote = 0;
  ac.innerHTML = (`${calculate}`)
}

function zero() {
  var zero = document.getElementById("output");
  if (scientificNote == 1 || calculate.toString().length == 9) {
    if (check == 0) {
      scientific = 6;
      variableV1 = (variableV1 * 10);
//add variable being scientific notation
      calculate = variable1;
      zero.innerHTML = (`${calculate}`)
    } else if (check == 1) {
      variableV2 = (variableV2 * 10);
      variable2 = (variable2 * 10);
      calculate = variable2;
      zero.innerHTML = (`${calculate}`)
    }
  } else if (check == 4 || calculate.toString().length == 3 || calculate.toString().length == 6) {
    if (check == 0) {
      variableV1 = (variableV1 * 10);
      variable1 = (variable1 * 10);
      calculate = variable1;
      zero.innerHTML = (`${calculate}`)
    } else if (check == 1) {
      variableV2 = (variableV2 * 10);
      variable2 = (variable2 + "," + "0");
      calculate = variable2;
      zero.innerHTML = (`${calculate}`)
    }
  } else if (check == 0) {
    variableV1 = (variable1 * 10);
    variable1 = (variable1 * 10);
    calculate = variable1;
    zero.innerHTML = (`${calculate}`)
  } else if (check == 1) {
    variableV2 = (variable2 * 10);
    variable2 = (variable2 * 10);
    calculate = variable2;
    zero.innerHTML = (`${calculate}`)
  }
}

function one() {
  var one = document.getElementById("output");
  if (check == 0) {
    variable1 = ((variable1 * 10) + 1);
    calculate = variable1;
    console.log(calculate);
    console.log(check);
    one.innerHTML = (`${calculate}`)
  } else if (check == 1) {
    variable2 = ((variable2 * 10) + 1);
    calculate = variable2;
    one.innerHTML = (`${calculate}`)
  }
}
