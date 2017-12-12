var Model = {
  currentValue: ko.observable("0"),
  add: ko.observable("/add"),
  subtract: ko.observable("/subtract"),
  divide: ko.observable("/divide"),
  multiply: ko.observable("/multiply"),
  equals: ko.observable("#"),
  lastop: ko.observable()
};

function resetModel() {
	// Model.currentValue('0');
	Model.add('/add');
	Model.subtract('/subtract');
	Model.divide('/divide');
	Model.multiply('/multiply');
	Model.lastop('');
	Model.equals('#');
}
ko.applyBindings(Model);

var memory = 0;
var memorycalc;
var clearCurrentValue = false;
var decimalMutex = false;
var isDecimal = false;

function updateCurrentValue(p) {
  if (p == "." && decimalMutex == true) {
    return;
  }
  if (clearCurrentValue == true) {
    Model.currentValue("0");
    clearCurrentValue = false;
  }
  var newValue = Model.currentValue() + p;

  if (p == ".") {
    decimalMutex = true;
    isDecimal = true;
  } else {
    if (!isDecimal) {
      newValue = newValue * 1;
    }
  }
  Model.currentValue(newValue);
}

var calculate = function(op, end) {
  decimalMutex = false;
  isDecimal = false;

  clearCurrentValue = true;
  var current = Model.currentValue();
	var lastop = Model.lastop();
	var url = Model[op]() + '/' + current;
  if (lastop) {
	  var url = Model[lastop]() + '/' + current;
  }
  Model.lastop(op);
  fetch(url).then(
	  res => res.json().then(data => {
		  console.log(data)
		  data.links.forEach(link => Model[link.rel](link.href))
		  Model.currentValue(data.currentTotal);
		  Model.equals(Model.add())
		  if (op == 'equals') {
			resetModel();
			console.log('Resetting model')
		}
	  })
  )
  console.log(op)

  memorycalc = op;
};

$("#clear").click(function() {
  memory = 0;
  decimalMutex = false;
  isDecimal = false;
  Model.currentValue("0");
  resetModel();
});

$("#sign").click(function() {
  Model.currentValue(Model.currentValue() * -1);
});

$("#backspace").click(function() {
  var old = Model.currentValue() + "";
  var len = old.length;
  var current = old.substring(0, len - 1);
  if (current.length == 0) {
    current = 0;
  }
  Model.currentValue(current);
});

$(".digit").click(function(e) {
  updateCurrentValue(e.target.value);
});

$("#divide, #multiply, #minus, #plus").click(function(e) {
  calculate(e.target.value);
});

$("#equal").click(function() {
  result();
});

function result() {
	calculate('equals', true);
  clearCurrentValue = true;
  decimalMutex = false;
  memory = 0;
}
