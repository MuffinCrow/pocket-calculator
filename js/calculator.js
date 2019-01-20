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
var end = 0;
var index = [];
var i = 0;
var indexOut = [];
var button = 0;
var b = 0;
var percent = 0;
var isaac = 0;


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
  variableV1 = 0;
  calculate = 0;
  operation = 0;
  decimal = -1;
  negation = 0;
  first = 0;
  temp = 0;
  z = 0;
  end = 0;
  index = [];
  i = 0;
  indexOut = [];
  button = 0;
  percent = 0;
  isaac = 0;
  ac.innerHTML = (`${calculate}`)
}

function display(z=0) {

  if (end == 1) {
    AC();
    end = 0;
  }
  if (negation == 1) {
    AC();
    negation = 0;
  }
  if (percent == 1) {
    AC();
    percent = 0;
  }
  if (operation == 1) {
    index.push("+");
    decimal = -1;
    button = 0;
    operation = 0;
    check = 0;
  } else if (operation == 2) {
    index.push("-")
    decimal = -1;
    button = 0;
    operation = 0;
    check = 0;
  } else if (operation == 3) {
    index.push("*");
    decimal = -1;
    button = 0;
    operation = 0;
    check = 0;
  } else if (operation == 4) {
    index.push("/");
    decimal = -1;
    button = 0;
    operation = 0;
    check = 0;
  }
  var one = document.getElementById("output");

  if (variableV1.toString().replace(".", "").length < 9) {
  if (decimal >= 0) {
    console.log("A");
      decimal++;
      b = variableV1[0];
      if (variableV1 == 0 && decimal == 1) {
        variableV1 = (variableV1 * 10 + z);
        console.log("why " + variableV1)
        variable1 = variableV1;
        variable1 = variable1 / Math.pow(10, decimal);
        console.log("what " + variable1)
      } else if (variableV1 == 0 && decimal == 1 && z == 0) {
        variableV1 = ("0.0");
        variable1 = variableV1;
        isaac = 1
      } else if (variableV1 == 0) {
        variableV1 = (variableV1 + z);
        variable1 = variableV1;
        isaac = 1
      } else {
        console.log("D");
        console.log(decimal);
      variableV1 = (variableV1 * 10 + z);
      variable1 = variableV1;
      variable1 = variable1 / Math.pow(10, decimal);
      if (variable1 < 10 && z == 0 && check == 0) {
        console.log("E");
        variable1 = (variable1.toString() + "." + variableV1.toString().slice(1, variableV1.toString().length));
      } else if (variable1 < 100 && z == 0 && check == 0) {
        console.log("F");
        variable1 = (variable1.toString() + "." + variableV1.toString().slice(2, variableV1.toString().length));
      } else if (variable1 < 1000 && z == 0 && check == 0) {
        console.log("G");
        variable1 = (variable1.toString() + "." + variableV1.toString().slice(3, variableV1.toString().length));
      } else if (variable1 > 999 && z == 0 && check == 0) {
        console.log("C");
        b = variableV1.toString().length;
        var k = 0;
        do {
          console.log("b: " + b);
          b--;
          k = variableV1.toString()[b];
          if (k != 0) {
            console.log("k: " + k);
            console.log("code: " + variableV1.toString().slice(b + 1, variableV1.toString().length))
            variable1 = variable1.toLocaleString();
            variable1 = (variable1 + "." + variableV1.toString().slice(b + 1, variableV1.toString().length))
          }
        } while (k == 0)
      } else {
        console.log("B");
        check = 1;
        variable1 = variable1.toLocaleString();
        variable1 = variable1.replace(/,/g, "");
        b = variableV1.toString().length;
        console.log(b);
        var k = 0;
        do {
          b--;
          console.log(b);
          k = variable1.toString()[b];
          console.log(k);
          if (k == ".") {
            var temp = variable1.slice(0, b);
            temp = Number(temp);
            temp = temp.toLocaleString();
            console.log(temp);
            console.log(variableV1);
            console.log(variableV1.toString().slice(b, variableV1.toString().length));
            var o = Math.floor(variableV1 / Math.pow(10, decimal));
            if (o != 0) {
            variable1 = (temp + "." + variableV1.toString().slice(b, variableV1.toString().length))
          } else {
            variable1 = variableV1 / Math.pow(10, decimal);
          }
            console.log(variable1);
          }
        } while (k != ".")
      }
//      calculate = variable1;
//      one.innerHTML = (`${calculate}`)

//      console.log("variableV1: "  + variableV1)
//      variable1 = variableV1;
//      variable1 = variable1 / Math.pow(10, decimal);
//    console.log(variable1);
//      let u = Math.floor(variable1);
//      u = u.toString().length;
//      if (u > 3) {
//        variable1 = variable1.toLocaleString();
//        if (variable1 == Math.floor(variable1)) {
//          variable1 = variable1 + ".0";
//        }
//        b = variable1.length;
//        while (u != ".") {
//          b--;
//          u = variable1[b];
//          if (u == ".") {
//            variable1 = variable1.slice(0, b + 1)
//            b = variable1.replace(/,/g, "");
//            b = b.replace(".", "");
//            b = b.length;
//            let x = variableV1.toString();
//            b = x.slice(b, x.length);
//            variable1 = (variable1 + b);
//          }
//        }
//      }
    }
      calculate = variable1;
      one.innerHTML = (`${calculate}`)
      console.log(variable1);
      console.log(variableV1);
  } else if (calculate.toString().length >= 3) {
      variableV1 = (variableV1 * 10 + z);
      variable1 = variableV1;
      calculate = variable1.toLocaleString();
      one.innerHTML = (`${calculate}`)
      calculate = variableV1;
  } else{
    variableV1 = (variable1 * 10 + z);
    variable1 = variableV1;
    calculate = variable1;
    one.innerHTML = (`${calculate}`)
  }
}
console.log(variableV1);
console.log(index);
}

//number = 0 (first number)(for numbers)
//number = 1 (second number)(for numbers)
//check = 1 (are in decimals and scientific notation should turn off)(for numbers)
//operation = 1 (adds + to the array)(for operators)
//operation = 2 (adds - to the array)(for operators)
//operation = 3 (adds * to the array))(for operators)
//operation = 4 (adds / to the array)(for operators & equals)
//first = 1 (plus/minus is being clicked)(for operators)
//first = 2 (divide/multiply is being clicked)(for operators)
//decimal = x (number of decimal places)(for numbers and operators)
//scienific = 1 (number is exponential / scietific notation)(for numbers)
//negation = 1 (the number was turned negative)(for numbers)
//equals = 1 (clears)(for numbers because of equals)

function plus() {
  negation = 0;
  var m = (index.length - 1);
  var n = (variableV1);
  if (index[m] == "/" && n == "0") {
    index = "ERROR";
    var one = document.getElementById("output");
    one.innerHTML = index;
    end = 1;
  } else {
  variableV1 = Number(variableV1);
  console.log("v1 is " + variableV1);
  first = 1;
  operation = 1;
  if (decimal >= 0 && isaac != 1) {
    variableV1 = variableV1 / Math.pow(10, decimal);
    decimal = -1;
  }
  isaac = 0;
variableV1 = variableV1.toString();

  if (button == 0) {
    index.push(variableV1.toString());
    button = 1;
  }

  indexOut = index;
  console.log(index);
  console.log(indexOut);
    variableV1 = 0;
    variable1 = 0;
    if (end == 1) {
      end = 0;
      indexout = Number(indexOut);
    } else {
    indexOut = indexOut.join();
    indexOut = indexOut.replace(/,/g, " ");
    indexOut = eval(indexOut);
    }

    var k = Math.floor(indexOut);
    b = indexOut.toString().length;

    if (k != indexOut) {
      if (indexOut.toString().length > 9) {
        let whole = k.toString().length;
        whole = (9 - whole);
        indexOut = indexOut.toFixed(whole);
      }
    } else if (b >= 10 && decimal > 0) {
      indexOut = indexOut.toExponential(4);
    } else if (b > 9) {
      indexOut = indexOut.toExponential(4);
    } else if (b > 3) {
      indexOut = indexOut.toLocaleString();
    }

  var one = document.getElementById("output");
  one.innerHTML = indexOut;
  calculate = 0;
}
}

function minus() {
  negation = 0;
  var m = (index.length - 1);
  var n = (variableV1);
  if (index[m] == "/" && n == "0") {
    index = "ERROR";
    var one = document.getElementById("output");
    one.innerHTML = index;
    end = 1;
  } else {
  variableV1 = Number(variableV1);
  first = 2;
  operation = 2;
  if (decimal >= 0 && isaac != 1) {
    variableV1 = variableV1 / Math.pow(10, decimal);
    decimal = -1;
  }
  isaac = 0;
variableV1 = variableV1.toString();

  if (button == 0) {
    index.push(variableV1.toString());
    button = 1;
  }

    indexOut = index;
    console.log(index);
    console.log(indexOut);
    variableV1 = 0;
    variable1 = 0;
    if (end == 1) {
      end = 0;
      indexout = Number(indexOut);
    } else {
    indexOut = indexOut.join();
    indexOut = indexOut.replace(/,/g, " ");
    indexOut = eval(indexOut);
    }


    var k = Math.floor(indexOut);
    b = indexOut.toString().length;

    if (k != indexOut) {
      if (indexOut.toString().length > 9) {
        let whole = k.toString().length;
        whole = (9 - whole);
        indexOut = indexOut.toFixed(whole);
      }
    } else if (b >= 10 && decimal > 0) {
      indexOut = indexOut.toExponential(4);
    } else if (b > 9) {
      indexOut = indexOut.toExponential(4);
    } else if (b > 3) {
      indexOut = indexOut.toLocaleString();
    }

  var one = document.getElementById("output");
  one.innerHTML = indexOut;
  calculate = 0;
}
}

function multiply() {
  negation = 0;
  var m = (index.length - 1);
  var n = (variableV1);
  if (index[m] == "/" && n == "0") {
    index = "ERROR";
    var one = document.getElementById("output");
    one.innerHTML = index;
    end = 1;
  } else {
  operation = 3;
  if (decimal >= 0 && isaac != 1) {
    variableV1 = variableV1 / Math.pow(10, decimal);
    decimal = -1;
  }
  isaac = 0;
variableV1 = variableV1.toString();
  if (button == 0) {
    index.push(variableV1.toString());
    button = 1;
  }
    variableV1 = 0;
    variable1 = 0;
    indexOut = index;
    console.log(index);
    console.log(indexOut);
  b = (indexOut.length - 2);
  console.log("A");
  var h = 0;
  var slicey = 0;
  if(((indexOut[b] == "*") || (indexOut[b] == "/")) && indexOut.length >= 3) {
      b = indexOut.length;
      while (h != "+" && h != "-") {
        b--;
        h = indexOut[b]
        if (b == 0) {
          h = "+";
          slicey = 1;
        }
      }
    if (end == 1) {
      end = 0;
      indexout = Number(indexOut);
    } else if (slicey == 0) {
    indexOut = indexOut.slice(b+1, indexOut.toString().length);
    indexOut = indexOut.join();
    indexOut = indexOut.replace(/,/g, " ");
    indexOut = eval(indexOut);
  } else {
    indexOut = indexOut.join();
    indexOut = indexOut.replace(/,/g, " ");
    indexOut = eval(indexOut);
  }
  } else {
    var y = indexOut.length - 1
    indexOut = indexOut[y];
  }
  end = 0;

  var k = Math.floor(indexOut);
  b = indexOut.toString().length;

  if (k != indexOut) {
    if (indexOut.toString().length > 9) {
      let whole = k.toString().length;
      whole = (9 - whole);
      indexOut = indexOut.toFixed(whole);
    }
  } else if (b >= 10 && decimal > 0) {
    indexOut = indexOut.toExponential(4);
  } else if (b > 9) {
    indexOut = indexOut.toExponential(4);
  } else if (b > 3) {
    indexOut = indexOut.toLocaleString();
  }
  var one = document.getElementById("output");
  one.innerHTML = indexOut;
  calculate = 0;
  console.log(index);
  console.log(indexOut);
}
}

function divide() {
  negation = 0;
  var m = (index.length - 1);
  var n = (variableV1);
  if (index[m] == "/" && n == "0") {
    index = "ERROR";
    var one = document.getElementById("output");
    one.innerHTML = index;
    end = 1;
  } else {
  operation = 4;
  if (decimal >= 0 && isaac != 1) {
    variableV1 = variableV1 / Math.pow(10, decimal);
    decimal = -1;
  }
  isaac = 0;
variableV1 = variableV1.toString();
  if (button == 0) {
    index.push(variableV1.toString());
    button = 1;
  }
    variableV1 = 0;
    variable1 = 0;
    indexOut = index;
    console.log(index);
    console.log(indexOut);
  b = (indexOut.length - 2);
  var h = 0;
  var slicey = 0;
  if(((indexOut[b] == "*") || (indexOut[b] == "/")) && indexOut.length > 3) {
      b = indexOut.length;
      while (h != "+" && h != "-") {
        b--;
        h = indexOut[b]
        if (b == 0) {
          h = "+";
          slicey = 1;
        }
      }
    if (end == 1) {
      end = 0;
      indexout = Number(indexOut);
    } else if (slicey == 0) {
    indexOut = indexOut.slice(b+1, indexOut.toString().length);
    indexOut = indexOut.join();
    indexOut = indexOut.replace(/,/g, " ");
    indexOut = eval(indexOut);
  } else {
    indexOut = indexOut.join();
    indexOut = indexOut.replace(/,/g, " ");
    indexOut = eval(indexOut);
  }
  } else {
    var y = indexOut.length - 1
    indexOut = indexOut[y];
  }
  end = 0;

  var k = Math.floor(indexOut);
  b = indexOut.toString().length;

  if (k != indexOut) {
    if (indexOut.toString().length > 9) {
      let whole = k.toString().length;
      whole = (9 - whole);
      indexOut = indexOut.toFixed(whole);
    }
  } else if (b >= 10 && decimal > 0) {
    indexOut = indexOut.toExponential(4);
  } else if (b > 9) {
    indexOut = indexOut.toExponential(4);
  } else if (b > 3) {
    indexOut = indexOut.toLocaleString();
  }
  var one = document.getElementById("output");
  one.innerHTML = indexOut;
  calculate = 0;
  console.log(index);
  console.log(indexOut);
}
}

function result() {

  var m = (index.length - 1);
  var n = (variableV1);
  if (index[m] == "/" && n == "0") {
    index = "ERROR";
    var one = document.getElementById("output");
    one.innerHTML = index;
    end = 1;
  } else {
  if (button == 0) {
    if (decimal >= 0 && isaac != 1) {
      variableV1 = variableV1 / Math.pow(10, decimal);
      decimal = -1;
    }
    isaac = 0;
    variableV1 = Number(variableV1);
    index.push(variableV1.toString());
    button = 1;
  }
  indexOut = index;
  console.log(index);
  console.log(indexOut);
  indexOut = indexOut.join();
  indexOut = indexOut.replace(/,/g, " ");
  indexOut = eval(indexOut);
  index = [];
  index[0] = indexOut;

  var k = Math.floor(indexOut);
  b = indexOut.toString().length;

  if (k != indexOut) {
    if (indexOut.toString().length > 9) {
      let whole = k.toString().length;
      whole = (9 - whole);
      indexOut = indexOut.toFixed(whole);
    }
  } else if (b >= 10 && decimal > 0) {
    indexOut = indexOut.toExponential(4);
  } else if (b > 9) {
    indexOut = indexOut.toExponential(4);
  } else if (b > 3) {
    indexOut = indexOut.toLocaleString();
  }

  var one = document.getElementById("output");
  one.innerHTML = indexOut;
  end = 1;

  number = 0;
  check = 0;
  variable1 = 0;
  variableV1 = 0;
  calculate = 0;
  operation = 0;
  decimal = -1;
  negation = 0;
  first = 0;
  temp = 0;
  z = 0;
  equals = 0;
  i = 0;
}
}

function dot() {
  if (decimal < 0) {
    decimal = 0;
    indexOut = variableV1.toLocaleString();
    indexOut = (indexOut + ".0");
    var one = document.getElementById("output");
    one.innerHTML = indexOut;
  }
}

function percentage() {
    indexOut = index;
    console.log(indexOut);
  if (decimal >= 0 && isaac != 1) {
    variableV1 = variableV1 / Math.pow(10, decimal);
    decimal = -1;
  }else {
    isaac = 0
    variableV1 = Number(variableV1);
  }
  if (index.length < 1) {
    console.log(indexOut, index);
    variableV1 = (variableV1 / 100);
    indexOut = variableV1;
    var one = document.getElementById("output");
    one.innerHTML = indexOut;
  } else if (index.length <= 2) {
    console.log(indexOut, index);
    variableV1 = (index[0] * (variableV1 / 100));
    indexOut = variableV1;
    var one = document.getElementById("output");
    one.innerHTML = indexOut;
  } else {
  b = (indexOut.length - 1);
  console.log(indexOut);
  var slicey = 0;
  var h = 0;
  if((indexOut[b] == "*") || (indexOut[b] == "/")) {
    console.log("A");
    while (h != "+" && h != "-") {
      b--;
      h = indexOut[b]
      if (b == 0) {
        h = "+";
        slicey = 1;
      }
  }
  if (slicey == 1) {
    indexOut = indexOut.slice(0, indexOut.length - 1);
    indexOut = eval(indexOut.join().replace(/,/g, ""));
    variableV1 = (indexOut * (variableV1 / 100));
  } else {
    indexOut = indexOut.slice(b, indexOut.length - 1);
    indexOut = eval(indexOut.join().replace(/,/g, ""));
    variableV1 = (indexOut * (variableV1 / 100));
  }
  indexOut = variableV1;
  var one = document.getElementById("output");
  one.innerHTML = indexOut;
} else if ((indexOut[b] == "+") || (indexOut[b] == "-")) {
  console.log("B");
  indexOut = indexOut.slice(0, indexOut.length - 1);
  indexOut = eval(indexOut.join().replace(/,/g, ""));
  variableV1 = (indexOut * (variableV1 / 100));
  indexOut = variableV1
  console.log(indexOut);
  var one = document.getElementById("output");
  one.innerHTML = indexOut;
}
}
}

function negate() {
  negation = 1;

  if (decimal >= 0 && isaac != 1) {
    variableV1 = variableV1 / Math.pow(10, decimal);
    decimal = -1;
  }else {
    isaac = 0
    variableV1 = Number(variableV1);
  }

  variableV1 = (variableV1 - (variableV1 * 2))
  indexOut = variableV1;
  var one = document.getElementById("output");
  one.innerHTML = indexOut;
}
