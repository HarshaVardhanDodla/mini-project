
function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
	form.display.value = Math.log(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}

function equals(form) {
	if ((form.display.value).indexOf("^") > -1) {
	  var base = (form.display.value).slice(0, (form.display.value).indexOf("^"));
	  var exponent = (form.display.value).slice((form.display.value).indexOf("^") + 1);
	  form.display.value = eval("Math.pow(" + base + "," + exponent + ")");
	} else {
	  form.display.value = eval(form.display.value);
	}
  }

function square(form) {
	form.display.value = (form.display.value) + "^"
}

function factorial(form) {
	var result = 1;
	if (form.display.value === 0) {
	  form.display.value = "1";
	} else if (form.display.value < 0) {
	  form.display.value = "undefined";
	} else {
	  var result = 1;
	  for (var i = form.display.value; i > 0; i--) {
		result = result * i;
	  }
	  form.display.value = result;
	}
  }


function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "." && ch != "(" && ch!= ")") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}