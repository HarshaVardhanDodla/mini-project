

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

function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
    //need to change
}

function factorial() {
	var result = 1;
	if (display.value === 0) {
	  display.value = "1";
	} else if (display.value < 0) {
	  display.value = "undefined";
	} else {
	  var result = 1;
	  for (var i = display.value; i > 0; i--) {
		result = result * i;
	  }
	  display.value = result;
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