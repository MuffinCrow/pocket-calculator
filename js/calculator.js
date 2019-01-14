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
var decimal = -1;
var negation = 0;
var first = 0;
var temp = 0;
var z = 0;
var equals = 0;


let varb = -0.0000000000000000000000000000000000000000000000000345;
console.log(varb.toExponential(5))
//number = 0 (first number)(for numbers)
//number = 1 (second number)(for numbers)
//check = 1 (are in decimals and scientific notation should turn off)(for numbers)
//operation = 1 (the last clicked operator was addition)(for operators & equals)
//operation = 2 (the last clicked operator was subtraction)(for operators & equals)
//operation = 3 (the last clicked operator was multiplication)(for operators & equals)
//operation = 4 (the last clicked operator was division)(for operators & equals)
//decimal = x (number of decimal places)(for numbers and operators)
//scienific = 1 (number is exponential / scietific notation)(for numbers)
//negation = 1 (the number was turned negative)(for numbers)
//equals = 1 (clears)(for numbers because of equals)

function AC() {
  var ac = document.getElementById("output");
  number = 0;
  check = 0;
  variable1 = 0;
  variable2 = 0;
  variableV1 = 0;
  variableV2 = 0;
  calculate = 0;
  scientific = 0;
  scientificNote = 0;
  operation = 0;
  decimal = -1;
  negation = 0;
  first = 0;
  temp = 0;
  z = 0;
  equals = 0;
  ac.innerHTML = (`${calculate}`)
}

//function zero() {
//  var zero = document.getElementById("output");
//  if (decimal >= 0) {
//    if (number == 0) {
//      decimal++;
//      variableV1 = (variable1 * 10);
//      variable1 = variableV1;
//      variable1 = variable1 / Math.pow(10, decimal);
//      calculate = variable1;
//      zero.innerHTML = (`${calculate}`)
//    } else if (number == 1) {
//      decimal++;
//      variableV2 = (variable2 * 10);
//      variable2 = variableV12;
//      variable2 = variable2 / Math.pow(10, decimal);
//      calculate = variable2;
//      zero.innerHTML = (`${calculate}`)
//    }
//  } else if (calculate.toString().length >= 9 || scientific == 1) {
//    if (number == 0) {
//      scientific = 1;
//      variableV1 = (variableV1 * 10);
//      variable1 = variableV1;
//      variable1 = variable1.toExponential(4)
//      calculate = variable1;
//      zero.innerHTML = (`${calculate}`)
//      calculate = variableV1
//    } else if (number == 1) {
//      scientific = 1;
//      variableV2 = (variableV2 * 10);
//      variable2 = variableV2;
//      variable2 = variable2.toExponential(4)
//      calculate = variable2;
//      zero.innerHTML = (`${calculate}`)
//      calculate = variableV2
//    }
//  } else if (calculate.toString().length >= 3 && calculate.toString().length < 9) {
//    if (number == 0) {
//      variableV1 = (variableV1 * 10);
//      variable1 = variableV1;
//      calculate = variable1.toLocaleString();
//      zero.innerHTML = (`${calculate}`)
//      calculate = variableV1;
//    } else if (number == 1) {
//      variableV2 = (variableV2 * 10);
//      variable2 = variableV2;
//      calculate = variable2.toLoaleString();
//      zero.innerHTML = (`${calculate}`)
//      calculate = variableV2;
//    }
//  } else if (number == 0) {
//    variableV1 = (variable1 * 10);
//    variable1 = variableV1;
//    calculate = variable1;
//    zero.innerHTML = (`${calculate}`)
//  } else if (number == 1) {
//    variableV2 = (variable2 * 10);
//    variable2 = variableV2;
//    calculate = variable2;
//    zero.innerHTML = (`${calculate}`)
//}
//}

//if (calculate.toString().length >= 9 || scientific == 1) {
//  if (number == 0) {
//    scientific = 1;
//    variableV1 = (variableV1 * 10 + z);
//    variable1 = variableV1;
//    variable1 = variable1.toExponential(4)
//    calculate = variable1;
//    one.innerHTML = (`${calculate}`)
//    calculate = variableV1
//  } else if (number == 1) {
//    scientific = 1;
//    variableV2 = (variableV2 * 10 + z);
//    variable2 = variableV2;
//    variable2 = variable2.toExponential(4)
//    calculate = variable2;
//    one.innerHTML = (`${calculate}`)
//    calculate = variableV2
//  }







function display(z=0) {
  var one = document.getElementById("output");
  if (equals == 1) {
    AC();
  }
  if (negation == 1) {
    AC();
  }
  if (calculate.toString().length < 9) {
  if (decimal >= 0) {
    if (number == 0) {
      decimal++;
      variableV1 = (variable1 * 10 + z);
      variable1 = variableV1;
      variable1 = variable1 / Math.pow(10, decimal);
      calculate = variable1;
      one.innerHTML = (`${calculate}`)
    } else if (number == 1) {
      decimal++;
      variableV2 = (variable2 * 10 + z);
      variable2 = variableV12;
      variable2 = variable2 / Math.pow(10, decimal);
      calculate = variable2;
      one.innerHTML = (`${calculate}`)
    }
  }
  if (calculate.toString().length >= 3) {
    if (number == 0) {
      variableV1 = (variableV1 * 10 + z);
      variable1 = variableV1;
      calculate = variable1.toLocaleString();
      one.innerHTML = (`${calculate}`)
      calculate = variableV1;
    } else if (number == 1) {
      variableV2 = (variableV2 * 10 + z);
      variable2 = variableV2;
      calculate = variable2.toLoaleString();
      one.innerHTML = (`${calculate}`)
      calculate = variableV2;
    }
  } else if (number == 0) {
    variableV1 = (variable1 * 10 + z);
    variable1 = variableV1;
    calculate = variable1;
    one.innerHTML = (`${calculate}`)
  } else if (number == 1) {
    variableV2 = (variable2 * 10 + z);
    variable2 = variableV2;
    calculate = variable2;
    one.innerHTML = (`${calculate}`)
  }
}
}

//number = 0 (first number)(for numbers)
//number = 1 (second number)(for numbers)
//check = 1 (are in decimals and scientific notation should turn off)(for numbers)
//operation = 1 (the last clicked operator was addition)(for operators & equals)
//operation = 2 (the last clicked operator was subtraction)(for operators & equals)
//operation = 3 (the last clicked operator was multiplication)(for operators & equals)
//operation = 4 (the last clicked operator was division)(for operators & equals)
//first = 1 (need to perform divide/multiply first then add)(for operators)
//first = 2 (need to perform divide/multiply first then subtract)(for operators)
//decimal = x (number of decimal places)(for numbers and operators)
//scienific = 1 (number is exponential / scietific notation)(for numbers)
//negation = 1 (the number was turned negative)(for numbers)
//equals = 1 (clears)(for numbers because of equals)

function countDecimals(value) {
    if (Math.floor(value) !== value) {
        return value.toString().split(".")[1].length || 0;
    } else {
    return 0;
  }
}

function decimal() {
  if (number == 0) {
    variable1 = variableV1 / Math.pow(10, decimal);
  } else if (number == 1) {
  variableV2 = variableV2 / Math.pow(10, decimal);
  }
}

function operation() {
  var operate = document.getElementById("output");
  if (first == 1) {
    decimal();
    if (operation == 3) {
      variable2 = (temp * variableV2);
      variableV1 = (variableV2 + variableV1);
      variable1 = variableV1;
      calculate = variable1;
        if ((calculate.toString().length - countDecimals(calculate)) > 9 || countDecimals(calculate) > 9) {
        calculate = Number(variable1.toExponential(4))
        number = 1;
      }else {
        number = 1;
    }
      operate.innerHTML = (`${calculate}`);
      calculate = variableV2;
    } else if (operation == 4){
      variableV2 = (temp * variableV2);
      variableV1 = (variableV2 + variableV1);
      variable1 = variableV1
      calculate = variable1.toLoaleString();
      operate.innerHTML = (`${calculate}`);
      calculate = variableV2;
    }
  } else if (first == 2) {

  } else if (operation == 1) {

  } else if (operation == 2) {

  } else if (operation == 3) {

  } else if (operation == 4) {

  }
}
